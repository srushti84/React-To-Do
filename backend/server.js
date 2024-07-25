const express= require("express");
const mysql= require("mysql");
const cors= require("cores");
const app= express();
const port= 5000;
app.use(cors());

const db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'rootsrushti8',
    database:'todolist'
});

db.connect(err=>{
    if(err){
        console.error("error connecting"+err.stack);
        return;
    }
    console.log("connected as id "+db.threadId);
});

app.get('/api/todos',(req,res)=>{
    const sql='SELECT FROM todos';
    db.query(sql, (err,results)=>{
        if(err){
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.listen(port,()=>{
    console.log('server running on port ${port}');
});