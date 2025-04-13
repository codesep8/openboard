const express = require("express");
const hbs = require("express-handlebars");

const app = express();

//template engine
app.engine('hbs', hbs.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//router
const homeRouter = require("./routes/home");

app.use("/", homeRouter)

//404
app.use((req, res, next) => {
    res.status(404).send("404")
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})