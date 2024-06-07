

const express = require("express");
const fs = require("fs")

const app =express();

app.get("/",(req,res) =>{
    res.end("hellow gyus")
})

app.get("/about",(req,res) =>{
    res.end("hellow gyus from about")
})

app.get("/write",(req,res)=>{
    const myName = "Biswajit"
    fs.writeFileSync("./notes.txt", myName)
    res.end("Successfully updated")
})

app.get("/read",(req,res)=>{
    const data = fs.readFileSync("./notes.txt","utf-8")
    res.end(data)
})





const port =2000;
app.listen(port, () => {
  console.log(`Server run at ${port}`);
});