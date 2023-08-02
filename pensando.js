var pensamientos = [
    
]
function datos(){
    fetch ("https://mammoth-ancient-egg.glitch.me/posts").then (response => response.json()).then(pensamientos=>{
        console.log (pensamientos)
        pensamientos.forEach(element => {agregar(element.title,element.content,element.id)
            
        });
    }
    )

}

function guardar (texto,imagen){
    const newpensamiento = { id: uuidv4(), title: texto, content: imagen};
    fetch ("https://mammoth-ancient-egg.glitch.me/posts",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newpensamiento),
    })
    .then (response => response.json())
    .then (pensamiento_creado => agregar(pensamiento_creado.title,pensamiento_creado.content,pensamiento_creado.id))
}
function agregar(element,imagen,id){
    var contenedor =document.getElementById("texto")
    var nuevo_div = document.createElement("div")
    var div_padre = document.createElement("div")
    console.log (pensamientos)
    nuevo_div.innerHTML = element + "<img src = '"+imagen+"' class = 'ms-4' width='400' height='300'/>" +"<button class='btn-close ms-5' aria-label='Close'onClick='borrar("+id+")'></button>"
    nuevo_div.classList.add("card-body")
    div_padre.classList.add("card")
    div_padre.classList.add("mb-2")
    div_padre.id = id
    div_padre.appendChild(nuevo_div)
    contenedor.appendChild(div_padre)
 

}
function save(){
    var element = document.getElementById("pensamiento").value
    var imagen = document.getElementById("imagen").value
    pensamientos.push(element)

    guardar(element,imagen)
    



    const myModal = document.getElementById('exampleModal');
    const modal = bootstrap.Modal.getInstance(myModal);
    modal.hide();

    //const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), )

    //const myModal = new bootstrap.Modal("#exampleModal", 
      //)
      //myModal.hide()
}
function cerrar (){
    var element = document.getElementById("pensamiento")
    element.value = ""
}

function borrar(idparametro){
    console.log (idparametro) 
    fetch ("https://mammoth-ancient-egg.glitch.me/posts/"+idparametro,{
        method: 'DELETE'}) 
        .then (response => response.json())
        .then (pensamiento_borrado => console.log (pensamiento_borrado))
    console.log ("funciona")
    document.getElementById(idparametro).remove()
}
datos()

function uuidv4() {
    return Math.floor(Math.random() * 1000);
}
