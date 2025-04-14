const express = require("express");
const hbs = require("express-handlebars");
const session = require("express-session");

const app = express();

//session
app.use(session({
    secret: "yifiyifihguhuh"
}))
app.use((req, res, next) => {
    req.locals.session = req.session
    next()
})

//template engine
app.engine('hbs', hbs.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//router
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");

app.use("/", homeRouter);
app.use("/auth", authRouter);

//404
app.use((req, res) => {
    res.status(404).send("404")
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})