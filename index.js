// Import the mysql2 library
import mysql from "mysql2"
import connectionInfo  from "./secretStuff.js"

// connect to Our mysql database (give it Our credentials)
const connection = mysql.createConnection(connectionInfo)
// run a simple query to get 2 movies
connection.query (
    "SELECT * FROM movies",
function (error, results) {
    console.log(error)
    console.table(results)
    connection.destroy()
}
)

