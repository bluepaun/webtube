import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";


console.log("app.js");

const app = express();

const handleHome = (req, res) => res.send(`Hello from home hehe`);

const handleProfile = (req, res) => res.send(`you are on my profile`);

//middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

//route
app.get("/",handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;