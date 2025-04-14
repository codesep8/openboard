const express = require('express');

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("home")
});

router.get("/register", (req, res) => {
    res.render("home")
});

router.get("/logout", (req, res) => {
    res.render("home")
});

module.exports = router;