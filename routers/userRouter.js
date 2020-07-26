import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, (req, res) => res.send(`Home`));
userRouter.get(routes.userDetail, (req, res) => res.send(`userDetail`));
userRouter.get(routes.editProfile, (req, res) => res.send(`editProfile`));
userRouter.get(routes.changePassword, (req, res) => res.send(`changePassword`));

export default userRouter;