import { getUser } from "./fetch_query/getUser.js"

const input = document.querySelector(".input")
const divUsers = document.querySelector(".users")


export async function authorization() {
    let h1 = ''
    const login_in = document.querySelector(".login").value
    const pass_in = document.querySelector(".pass").value
    const user = await getUser({ login_in, pass_in })
    setTimeout(() => {
        console.log("jjjj", user)
        if (user.length === 0) alert("Неверный логин или пароль")
        else {
            input.style.display = 'none'
            h1 += `<h1> USER: ${user[0].fio}`
            divUsers.innerHTML = h1
        }
    }, 1000)
}