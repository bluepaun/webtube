import express from "express";

console.log("router.js");
export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send(`user index`));
userRouter.get("/edit", (req, res) => res.send(`user edit`));
//userRouter.get("/password", (req, res) => res.send(`user password`));

const user2Router = express.Router();

user2Router.get("/", (req, res) => res.send(`user password `) );
user2Router.get("/aaa", (req, res) => res.send(`user password aaa`) );
user2Router.get("/bbb", (req, res) => res.send(`user password bbb`) );
user2Router.get("/ccc", (req, res) => res.send(`user password ccc`) );

userRouter.use("/password", user2Router);