import express, { response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv'


const app=express();
dotenv.config()
const db=mysql.createConnection({
    host     :process.env.HOST,
    user     :"root",
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port     : 3306
});


const PORT=8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(fileUpload())



app.get('/api/get', (req,res) => {

    const sqlSelect = "SELECT * FROM flash_cards where question like '%m%'";
    db.query( sqlSelect, (err,result) => {
        res.send(result)
    })
})


app.post("/api/insert",(req,res) => {
    const question= req.body.question
    const answer = req.body.answer
    

    const sqlInsert = "INSERT INTO flash_cards (question,answer) VALUES (?,?)"
    db.query( sqlInsert, [question,answer], (err,result) => {
        console.log(result)
    })
})

app.delete("/api/delete/:id", (req,res) => {
    const q= req.params.id
    console.log(q)
    const sqlDelete = "DELETE FROM flash_cards WHERE id = ?";
    db.query(sqlDelete, q, (err,result) =>{
        if(err) console.log(err)
    })
})

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
