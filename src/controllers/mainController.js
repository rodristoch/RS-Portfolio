const fs = require("fs");
const path = require("path");

const mainController = {

    index: (req, res) => {

        res.render("index.ejs")
    },

    about: (req, res) => {

        res.render("aboutme.ejs")
    },

    proyects: (req, res) => {

        res.render("proyects.ejs")
    },
    
};

module.exports = mainController;


