 export async function postUser(data) {
     const responce = await fetch("http://localhost:3000", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(data)
     })

     console.log(responce.json());

 }