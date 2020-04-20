// const add = require("./utils.js")

// const sum = add(22, 44);

// console.log(sum);
const chalk = require('chalk');
const yargs = require('yargs');
const 

yargs.version('V1.1.0')

yargs.command({
    command: ["add","-a","ADD","a"],
    describe: "add a new note",
    builder: {
        title:{
            describe: "Note Title",
            alias: ["t", "TITLE"],
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note Body",
            alias: ["b", "BODY"],
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Title: ", argv.title)
        console.log("Body: ", argv.body)
    }
    
})

yargs.command({
    command: "remove",
    describe: "remove note",
    handler: function(){
        console.log("removing note")
    } 
})

yargs.command({
    command: "list",
    describe: "list notes",
    handler: function(){
        console.log("listing notes")
    } 
})

yargs.command({
    command: "read",
    describe: "read note",
    handler: function(){
        console.log("reading note")
    } 
})

yargs.parse();