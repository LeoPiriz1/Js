let carrito = []

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito')
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado)
        mostrarCarrito()
    }
}

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    }
    carrito.push(producto)
    guardarCarrito()
    mostrarCarrito()
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito')
    listaCarrito.innerHTML = ''
    
    carrito.forEach(producto => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent = `${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`
        listaCarrito.appendChild(li)
    })

    calcularTotal()
}

function calcularTotal() {
    const totalCarrito = document.getElementById('total-carrito')
    const total = carrito.reduce((total, producto) => total + producto.precio, 0)
    totalCarrito.textContent = `$${total.toFixed(2)}`
}

function vaciarCarrito() {
    carrito = []
    guardarCarrito()
    mostrarCarrito()
}

function mostrarResumen() {
    const modalCompra = document.getElementById('modalCompra')
    const listaProductosModal = document.getElementById('lista-productos-modal')
    listaProductosModal.innerHTML = ''
    
    carrito.forEach(producto => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent = `${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`
        listaProductosModal.appendChild(li)
    })

    const totalModal = document.getElementById('total-modal')
    const total = carrito.reduce((total, producto) => total + producto.precio, 0)
    totalModal.textContent = `$${total.toFixed(2)}`

    $(modalCompra).modal('show')
}

document.addEventListener('DOMContentLoaded', function() {
    cargarCarrito()
    mostrarCarrito()
    
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito)

    document.getElementById('continuar-compra').addEventListener('click', mostrarResumen)
})
