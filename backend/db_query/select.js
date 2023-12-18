connection.query("Select * from client", (err, results, fields) => {
    console.log(err)
    console.log(results)
    console.log(fields)
})