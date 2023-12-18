export async function getUser(data) {
    const responce = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    // console.log(await responce.json());
    const rezult = await responce.json()
    return rezult

}