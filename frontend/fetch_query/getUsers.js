// export async function getUser() {
//     const user = await fetch("http://localhost:3000")
//     const rez = await user.json()
//     return rez
// }

export async function getUsers() {
    const user = await fetch("http://localhost:3000").then((rez) => rez.json())
    return user
}