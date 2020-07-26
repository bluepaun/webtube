import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;
const PORTHTTP = 80;

const handleListening = () => console.log(`Listening ion : http://localhost:${PORT}`);


const handleHome = (req, res) => res.send(`Hello from home hehe`);


const handleProfile = (req, res) => res.send(`you are on my profile`);

//middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));


app.use(middleware);

//route
app.get("/",handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

//app.listen(PORTHTTP, handleListening);