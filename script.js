const listaAseo = document.getElementById('aseo-lista');
const listaComida = document.getElementById('comida-lista');
const totalAseoElement = document.getElementById('total-aseo');
const totalComidaElement = document.getElementById('total-comida');
const totalElement = document.getElementById('total');
let totalComida = 0;
let totalAseo = 0;


const productosComida = [
    { nombre: 'Pan tajado ', precio: 3200, enlace: 'https://www.ejemplo.com/pan-tajado' },
    { nombre: 'Salsa de tomate', precio: 4500 },
    { nombre: 'Granola Frutos rojos', precio: 5000 },
    { nombre: 'Tortilla', precio: 5500 },
    { nombre: 'Jamon', precio: 8500 },
    { nombre: 'Leche x4', precio: 14000 },
    { nombre: 'Arroz', precio: 13000 },
    { nombre: 'Atun x3', precio: 17400 },
    { nombre: 'Aceite', precio: 8100 },
    { nombre: 'Chorizo', precio: 4500 },
    { nombre: 'Huevos', precio: 18000 },
    { nombre: 'Queso', precio: 16000 }
];
const productosAseo = [
    { nombre: 'Enjuague bucal', precio: 6600, enlace: 'https://www.ejemplo.com/enjuague-bucal' },
    { nombre: 'Papel higiénico', precio: 14000, enlace: 'https://www.ejemplo.com/papel-higienico' },
    { nombre: 'Bolsas de basura', precio: 1900, enlace: 'https://www.ejemplo.com/bolsas-basura' },
    { nombre: 'Ambientador de baño', precio: 6000, enlace: 'https://www.ejemplo.com/ambientador' },
    { nombre: 'Crema dental', precio: 6500, enlace: 'https://www.ejemplo.com/crema-dental' }
];

productosAseo.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${producto.enlace}" target="_blank">${producto.nombre}</a> $${producto.precio.toLocaleString()}`;
    listaAseo.appendChild(li);
    totalAseo += producto.precio;
});
productosComida.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${producto.enlace}" target="_blank">${producto.nombre}</a> $${producto.precio.toLocaleString()}`;
    listaComida.appendChild(li);
    totalComida += producto.precio;
});

totalAseoElement.textContent = totalAseo.toLocaleString();
totalComidaElement.textContent = totalComida.toLocaleString();
let total = totalAseo + totalComida;
totalElement.textContent = total.toLocaleString();

