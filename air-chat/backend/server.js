const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/",(req,res) => {
    res.send("API is Running Sucessfully");
});

app.get("/api/chats",(req,res)=>{
    res.send(chats);
});

app.get("/api/chats/:id",(req,res)=>{
    // console.log(req);
    const singleChat = chats.find((c)=>c._id===req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 9000;

app.listen(9000,console.log("Server Started on PORT 9000"));