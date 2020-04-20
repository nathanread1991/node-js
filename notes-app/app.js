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


const command = process.argv[2];

if (command === "add"){
    console.log("you want to add a new note")

}
else if ( command === "delete"){
    console.log("you want to delete a note");
}
else if (command === "modify"){
    console.log("you want to modify a note");
}
else{
    console.log(chalk.bgRedBright("error")+ " please enter one of the folling options: \"add\", \"delete\", or \"modify\"");
}

console.log(process.argv[2]);