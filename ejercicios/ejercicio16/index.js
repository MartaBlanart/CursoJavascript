let nombre="Marta"
let apellido= "Blancart"

let marta={nombre, apellido}

sessionStorage.setItem("marta", JSON.stringify(marta))
localStorage.setItem(marta)
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`


