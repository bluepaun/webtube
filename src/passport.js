import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
    githubLoginCallback,
    facebookLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

console.log(
    `${process.env.PRODUCTION ? process.env.PROD_URL : process.env.LOCAL_URL}${
        routes.gitHubCallback
    }`
);
passport.use(User.createStrategy());
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            callbackURL: `${
                process.env.PRODUCTION
                    ? process.env.PROD_URL
                    : process.env.LOCAL_URL
            }${routes.gitHubCallback}`,
        },
        githubLoginCallback
    )
);
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `https://783f532cbc9a.ngrok.io${routes.facebookCallback}`,
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["public_profile", "email"],
        },
        facebookLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
