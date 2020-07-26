import express from "express";
const app = express();

const PORT = 4000;

const PORTHTTP = 80;

const handleListening = () => console.log(`Listening ion : http://localhost:${PORT}`);


const handleHome = (req, res) => res.send(`Hello from home hehe`);


const handleProfile = (req, res) => res.send(`you are on my profile`);

const betweenHome = (req, res, next) =>{
    console.log(`between`);
    next();
}

//this function is working sequencely 순차적으로 시작
app.use(betweenHome);

//app.get("/", betweenHome .....,handleHome);
app.get("/",handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

//app.listen(PORTHTTP, handleListening);