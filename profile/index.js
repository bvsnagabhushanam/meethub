#!/usr/bin/env node

const Aboutme = require("./Command/Aboutme");
const Contactme = require("./Command/Contactme");
const summary = require("./Command/summary");
const inquirer = require("inquirer")
const Index = () => {
    console.log("hey");
    // Aboutme()
    // Contactme()

    inquirer.prompt([{
            type:'list',
            choices : ['aboutme','contactme','summary'],
            name: "answer"
    }])
    .then((res) => { 
        console.log (res)
        if(res.answer == 'aboutme'){
            Aboutme();
        }
        if(res.answer == 'contactme'){
            Contactme();
        }
        if(res.answer == 'summary'){
            Summary();
        }
})
};

Index();

module.exports = Index;