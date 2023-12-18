import { postUser } from "./fetch_query/postUser.js"

export const registration = () => {
    const name = document.getElementById('name').value
    const telefon = document.getElementById('telefon').value
    const email = document.getElementById('email').value
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    console.log(name, telefon, email, login, password)

    if (name.length !== 0 && telefon !== 0 && email !== 0 && login !== 0 && password >= 6) {
        postUser({ name, telefon, email, login, password })
    } else {
        alert('Заполните все поля')
    }

}