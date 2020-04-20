// const add = require("./utils.js")

// const sum = add(22, 44);

// console.log(sum);


const notes = require("./notes.js");

const myNotes = notes();

console.log(myNotes)

var validator = require('validator');
const chalk = require('chalk');


const email = "nathanread.1991@gmail.comx"
const isEmail = validator.isEmail(email);

console.log("you entered " + email + " as your email")
console.log("email valid = " + isEmail)


if(isEmail){
    console.log(chalk.bgGreenBright("Email is valid"));
}
else{
    console.log(chalk.bgRedBright("Email is Invalid"));
}