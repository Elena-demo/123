import { connection } from "./db.js"

connection.connect(function(err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});


export async function select(req, res) {
    connection.query("Select * from client", (err, results, fields) => {
        if (err) console.log(err)
            // else console.log(results)
        return res.json(results)
    })

}

export async function selectFio(req, res) {
    console.log(req.body);
    const params = [req.body.login_in, req.body.pass_in]
    connection.query("select fio from client  where login = ? and password_user = ?", params, (err, rez) => {
        if (err) console.log(err)
        console.log(rez)
        return res.json(rez)
    })
}


export async function insertUser(req, res) {
    console.log(req.body)

    const user = [req.body.name, req.body.telefon, req.body.email, req.body.login, req.body.password]
    const sql = "Insert into client (fio, telefon, email, login, password_user) value (?, ?, ?, ?, ?)"
    connection.query(sql, user, (err, data) => {
        if (err) console.log(err)

        else console.log("Данные добавлены");
    })

    return res.json(req.body);
}