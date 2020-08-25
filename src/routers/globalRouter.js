import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    logout,
    postJoin,
    postLogin,
    getLogin,
    githubLogin,
    postGithubLogin,
    getMe,
    facebookLogin,
    postFacebookLogin,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
    routes.gitHubCallback,
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
);
globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
    routes.facebookCallback,
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    postFacebookLogin
);

export default globalRouter;
