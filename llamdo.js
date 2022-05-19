/* llamdo por GET url
    fetch("https://reqres.in/api/unknown/2")
        .then(res=>res.json())
        .then(res=>console.log(res))
*/
/* //llamado POST
fetch("https://reqres.in/api/users",{
    method : "POST",
    // body : JSON.stringify({"Nombre" : "Marco","Apellido" : "Dupont"}), //tambien se puede hacer como linea abajo
    body : `{"Nombre" : "Marco","Apellido" : "Dupont"}`, //hace lo mismo que la linea de arriba pero usando ``
    headers: {"Content-type" : "application/json"}
})
    .then(res=>res.json())
    .then(res=>console.log(res))
*/
/*//Imagen por URL
const Imagen = document.querySelector(".imagen")

fetch("Wallpaper_1280x1024_Transportes.jpg")
    .then(res=>res.blob())
    .then(img=>Imagen.src = URL.createObjectURL(img))
*/
/*
axios.post("https://reqres.in/api/users",{"nombre" : "Marco", "paterno" : "Dupont"})
    .then(res=>console.log(res))
*/
/*Informacio*/
/* todo ok pero es mejor usar await y async
const getName = ()=>{
    fetch("informacion.txt")
        .then(res =>{
            if (res.ok) Promise.resolve(res)
            else Promise.reject(res)
        })
        .then(res => console.log(res))
        .catch(e=> console.log(e))
}
getName()
*/
const getName = async ()=> {
    //Con Fetch
    /*let peticion = await fetch("informacion.txt")
    let result = await peticion.json()
    let HTMLCode = `Nombre: ${result.nombre} <br>
                    Edad: ${result.edad}`
    */
   //Con axios
    let vDatos = document.querySelector(".cls-data")
    try {
        let result = await axios("informacion.txt")
        vDatos.innerHTML = `Nombre: ${result.data.nombre} <br>
        Edad: ${result.data.edad} `
    } catch(e) {
        vDatos.innerHTML = "La API fallo"
    }
}
let array = []
console.log(array)
document.getElementById("i-nombre").addEventListener("click", getName)
