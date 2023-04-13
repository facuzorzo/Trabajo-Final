const contenedor = document.getElementById("contenedor")
fetch("./database.json")
.then(Response => Response.json())

.then(data =>{
    for (const producto of data) {
        contenedor.innerHTML += `
    <div class="phone">
        <div class="phoneConteiner">
        <img class="imgPhone" src="${producto.imagen}"/>
        </div>
        <h2>$${producto.price}</h2>
        <h3>Hasta 12 cuotas sin interes</h3>
        <p>${producto.name}${producto.modelo}</p>
        <button class="btn-comprar" id="btn-comprar">Añadir al carrito<i class="bi bi-cart4"></i></button>

       
    </div>        `
    }
})


const carritoCargar = document.getElementById("btn-comprar")
carritoCargar.addEventListener("click", () =>{
    Swal.fire('Añadiste este producto al carrito de compras')
})