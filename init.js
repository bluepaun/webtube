import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

console.log("init.js");
const PORT = process.env.PORT || 4000;
const PORT_HTTP = 80;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
//app.listen(PORT_HTTP, handleListening);
