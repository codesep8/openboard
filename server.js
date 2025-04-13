const express = require("express");
const hbs = require("express-handlebars");

const app = express();

//template engine
app.engine('hbs', hbs.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("http://localhost:3000")
})