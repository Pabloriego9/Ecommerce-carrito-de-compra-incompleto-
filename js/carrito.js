let carrito = [];

 var json ={
   marca: "nombre",
   precio:12,
   stock:12,
   imagen: "direccion de imagen",
 };
// creamos un objeto
class Producto {
    constructor( marca, precio, imagen) {
      this.nombre = marca;
      this.precio = precio;
      this.imagen = imagen;
    }
  }
 let button = document.getElementsByClassName("agregar-carrito");
 for (let i = 0; i <button.length; i++){
   button[i].addEventListener("click", function (){ 
    let padre = button[i].parentElement.parentElement
    let titulo = padre.children[0].textContent // capturamos el nombre del producto
    let imagen = padre.children[1].children[0].src
    let precio = padre.children[1].children[1].innerHTML
  
    let preciSinEspacio = precio;
    preciSinEspacio.toString().trim();
    console.log(imagen);
    let producto = new Producto(titulo,preciSinEspacio,imagen);
    carrito.push(producto);
    guardarLocal('carrito',carrito)

    // capturar la tabla de html
    let table = document.querySelector(".table")
    

    let localCarrito = leerLocal('carrito')
    if(localCarrito != ""){
      let aux = ''
      for (let i = 0; i < localCarrito.length; i++) {
        let producto = localCarrito[i]
        aux += `<thead>
                  <tr> 
                    <th><img src="${producto.imagen}" width=100 </th>
                    <th class="name">Nombre ${producto.nombre}</th>
                    <th class="precio">Precio ${producto.precio}</th>
                    <th> <a href= "#" class="borrar-producto fas fa-times-circle" onClick="borrarCarrito()" data-id= "${producto.id}"></a> </th>
                  </tr>
                </thead>`
      }
      table.innerHTML = aux 
    }
  });
 }

function borrarCarrito (){
 let borrador = document.querySelector(".borrar-producto");
 borrador.parentElement.parentElement.remove()
 console.log(borrador.parentElement.parentElement)
}
 // Guardar en localstorage // function declarada !
 function guardarLocal(key,valor){
    localStorage.setItem(key,JSON.stringify(valor))
 } 
 
  function leerLocal(key){
    let valor = localStorage.getItem(key);
      if (valor===null){
        return null
      } else{
        return JSON.parse(valor);
      }
   }
  
 //modal que confirma la que se añadio el carrito de compra
 (function(){
  $(function(){
     
     $(`#btn-ventana`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana2`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana3`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana4`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana5`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana6`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana7`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana8`).on('click',function(){
      $('#ventana-modal').modal()
     })
     $(`#btn-ventana`).on('click',function(){
      $('#ventana-modal').modal()
     })
    })

}())

