import { getUsers } from "./fetch_query/getUsers.js"

import { authorization } from "./authorization.js"
import { registration } from "./registration.js"


// const divUsers = document.querySelector(".users")
const registrain = document.querySelector(".registrain")
const input = document.querySelector(".input")
const reg = document.getElementById("reg")

reg.addEventListener('click', () => {
    registrain.style.display = 'block'
    input.style.display = 'none'
})


// const users = await getUsers()
// console.log(users)

// let a = ''
// for (let i = 0; i < users.length; i++) {
//     a += `<p> ${users[i].fio} </p>`
// }

// divUsers.innerHTML = a


btn_reg.addEventListener('click', (event) => {
    registration()
})

const btn_in = document.querySelector(".btn_in")
btn_in.addEventListener('click', (e) => {
    e.preventDefault()
    authorization()
})