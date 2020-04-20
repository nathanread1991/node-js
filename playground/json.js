const fs = require("fs")

// const book = {
//     title: "ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON);

// fs.writeFileSync("json.json", bookJSON);


// const bookObject = JSON.parse(fs.readFileSync("json.json"));


// console.log(bookObject.author)
// console.log(bookObject.title)
// console.log(bookObject)


const person = JSON.parse(fs.readFileSync("json.json"))
person.name = "Nathan"

console.log(person)

const personJSON = JSON.stringify(person)
fs.writeFileSync("json.json", personJSON)
