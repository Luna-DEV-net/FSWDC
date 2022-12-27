const express = require("express"); const server = express(); const bodyParser = require("body-parser");
const db = require("./models")


//Midleware
server.use(bodyParser.json())

// Routers
server.use("/posts", require("./routes/Posts"))


db.sequelize.sync().then(() => {
    console.log("ghg");
    server.listen(50056, "127.0.0.1", () => {console.log("api start on 127.0.0.1:50056")});
});
