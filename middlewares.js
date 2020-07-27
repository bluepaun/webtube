import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Webtube";
    res.locals.routes = routes;
    next();
};
