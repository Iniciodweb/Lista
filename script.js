const listaAseo = document.getElementById('aseo-lista');
const listaComida = document.getElementById('comida-lista');
const listaCarnes = document.getElementById('carnes'); // Get the "Carnes" list element
const totalAseoElement = document.getElementById('total-aseo');
const totalComidaElement = document.getElementById('total-comida');
const totalCarnesElement = document.getElementById('total-carnes'); // Get the "Carnes" total element
const totalElement = document.getElementById('total');
let totalComida = 0;
let totalAseo = 0;
let totalCarnes = 0; // Variable for the "Carnes" total
let total = 0;

const productosComida = [
    { nombre: 'Pan tajado ', precio: 3300, enlace: 'https://domicilios.tiendasd1.com/p/pan-tajado-blanco-horneaditos-450-grs-12000050' },
    { nombre: 'Salsa de tomate', precio: 4500, enlace: 'https://domicilios.tiendasd1.com/p/salsa-de-tomate-zev-500-g-12000266' },
    { nombre: 'Granola Frutos rojos x2', precio: 10000, enlace: 'https://domicilios.tiendasd1.com/p/granola-frutos-rojos-fit-graan-350-g-12000460' },
    { nombre: 'Tortilla', precio: 5500, enlace: 'https://domicilios.tiendasd1.com/p/tortilla-fajita-crachos-12-und-360-g-12000224' },
    { nombre: 'Jamon', precio: 8500, enlace: 'https://domicilios.tiendasd1.com/p/jamon-de-cerdo-premium-viande-300-g-12000388' },
    { nombre: 'Leche x4', precio: 14000, enlace: 'https://domicilios.tiendasd1.com/p/leche-deslactosada-tetrapak-uht-latti-900-ml-12000245' },
    { nombre: 'Arroz', precio: 13500 },
    { nombre: 'Atun x3', precio: 17400, enlace: 'https://www.soberana.com.co/producto/atun-la-soberana-bipack-acte-girasol-280g/' },
    { nombre: 'Aceite 900mi', precio: 9000, enlace: 'https://domicilios.tiendasd1.com/p/aceite-vegetal-soya-900-ml-12004740' },
    { nombre: 'Chorizo', precio: 4500, enlace: 'https://domicilios.tiendasd1.com/p/chorizo-campesino-ahumado-viande-225-grs-12000081' },
    { nombre: 'Huevos', precio: 18000 },
    { nombre: 'Queso', precio: 16000 },
    { nombre: 'Arepa maiz con avena', precio: 4500, enlace: 'https://domicilios.tiendasd1.com/p/arepa-de-maiz-con-avena-y-chia-masmai-12002550' },
    { nombre: 'Azúcar morena', precio: 5000, enlace: 'https://domicilios.tiendasd1.com/p/azucar-morena-1000-grs-12000250' }, 
    { nombre: 'Esparcible multiusos mantequilla :v', precio: 5000, enlace: 'https://domicilios.tiendasd1.com/p/esparcible-multiusos-rama-250-g-12003456' }, 
    { nombre: 'Espagueti', precio: 2200, enlace: 'https://domicilios.tiendasd1.com/p/spaghetti-doria-250-g-12003256' } ,
    { nombre: 'Sal', precio: 2200, enlace: 'https://domicilios.tiendasd1.com/p/sal-refisal-1000-g-12002874' } 
];

const productosAseo = [
    { nombre: 'Enjuague bucal', precio: 6600, enlace: 'https://domicilios.tiendasd1.com/p/enjuague-bucal-cero-alcohol-bucarine-500-ml-12000185' },
    { nombre: 'Papel higiénico', precio: 14100, enlace: 'https://domicilios.tiendasd1.com/p/papel-higienico-3-h-12-un-rendy-33-mts-12004365' },
    { nombre: 'Bolsas de basura', precio: 1900, enlace: 'https://domicilios.tiendasd1.com/p/bolsa-de-basura-negra-tipo-hogar-tidy-house-10-und-12000273' },
    { nombre: 'Ambientador de baño', precio: 6000, enlace: 'https://domicilios.tiendasd1.com/p/ambientador-en-aerosol-manzana-canela-hosh-360-ml-12003570' },
    { nombre: 'Crema dental', precio: 6500, enlace: 'https://domicilios.tiendasd1.com/p/crema-dental-triple-accion-colgate-100-ml-12000106' },
    { nombre: 'Desmaquillante', precio: 8000, enlace: 'https://domicilios.tiendasd1.com/p/desmaquillante-bifasico-delia-150-ml-12004164' }, 
    { nombre: 'Toalla femenina', precio: 8600, enlace: 'https://domicilios.tiendasd1.com/p/toalla-femenina-invisible-nosotras-24-und-12002481' }, 
    { nombre: 'Pomos de algodón', precio: 3000, enlace: 'https://domicilios.tiendasd1.com/p/pomos-de-algodon-natural-feeling-50-und-12001225' }, 
    { nombre: 'Acondicionador', precio: 7000, enlace: 'https://domicilios.tiendasd1.com/p/acondicionador-kolors-surtido-400-ml-12004348' }, 
    { nombre: 'Desengrante', precio: 2500, enlace: 'https://domicilios.tiendasd1.com/p/desengrasante-brilla-king-500-ml-12000240' } 
];

const productosCarnes = [
    { nombre: 'Carne', precio: 25000 },
    { nombre: 'Pollo', precio: 15000 },
    { nombre: 'Molida', precio: 7000 }
];

function crearLista(lista, productos) {
    productos.forEach(producto => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.classList.add('mi-checkbox');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', actualizarTotal);
        li.appendChild(checkbox); 
        // If the product has a link, create an anchor element
        if (producto.enlace) {
            const enlace = document.createElement('a');
            enlace.href = producto.enlace;
            enlace.target = '_blank';
            enlace.textContent = producto.nombre;
            li.appendChild(enlace);
        } else {
            // Otherwise, just add the product name as text
            li.appendChild(document.createTextNode(producto.nombre));
        }
        li.appendChild(document.createTextNode(` $${producto.precio.toLocaleString()}`)); 
        lista.appendChild(li);
    });
}

function actualizarTotal() {
    totalAseo = 0;
    totalComida = 0;
    totalCarnes = 0; // Reset the "Carnes" total
    total = 0;

    // Calcular total de aseo
    listaAseo.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        totalAseo += productosAseo[Array.from(listaAseo.children).indexOf(checkbox.parentElement)].precio;
    });
    totalAseoElement.textContent = totalAseo.toLocaleString();

    // Calcular total de comida
    listaComida.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        totalComida += productosComida[Array.from(listaComida.children).indexOf(checkbox.parentElement)].precio;
    });
    totalComidaElement.textContent = totalComida.toLocaleString(); 

    // Calculate total for "Carnes"
    listaCarnes.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        totalCarnes += productosCarnes[Array.from(listaCarnes.children).indexOf(checkbox.parentElement)].precio;
    });
    totalCarnesElement.textContent = totalCarnes.toLocaleString(); 

    // Calcular total general
    total = totalAseo + totalComida + totalCarnes; // Include "Carnes" total
    totalElement.textContent = total.toLocaleString(); 
}

// Inicializar las listas
crearLista(listaAseo, productosAseo);
crearLista(listaComida, productosComida);
crearLista(listaCarnes, productosCarnes); // Create the "Carnes" list

// Mostrar los totales iniciales
actualizarTotal();

