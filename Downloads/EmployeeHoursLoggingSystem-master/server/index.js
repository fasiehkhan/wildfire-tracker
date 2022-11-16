const express = require('express')
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Create connection 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nahk123!",
    database: "TimeSheetDB",

});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

app.post('/register', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)", 
        [username, password], 
        (err, res) =>{
        console.log(err) 
        }
        );
});


app.listen(3001, () => {
    console.log("running on port 3001")
});