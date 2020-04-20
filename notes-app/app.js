const fs = require("fs");


fs.writeFileSync("notes.js", "My Name is Nathan Read");
fs.appendFileSync("notes.js", "\nim appending to the file");

