const closeOfertaDia = document.getElementById("btnCloseOfertaDia");
const oferta = document.getElementById("btnOferta");
const closeOferta = document.getElementById("btnCloseOferta");
const texto = '';
const selecciono = '';
const btnBuy = document.getElementById("btnBuy");

document.getElementById("defaultOpen").click();

/**
 * 
 * funcion window.onload que lanza la oferta del día al cargar la pagina
 * 
 */
window.onload = modal;

function modal() {
    document.getElementById("ofertaDia").style.display = "block";
}

/**
 * 
 * addEventListener por id de boton que cierra el modal de la oferta del día
 * 
 */
closeOfertaDia.addEventListener("click", function () {
    document.getElementById("ofertaDia").style.display = "none";
});

/**
 * 
 * addEventListener por id de boton que lanza el modal de las ofertas
 * 
 */
oferta.addEventListener("click", function () {
    document.getElementById("ofertas").style.display = "block";
});


/**
 * 
 * addEventListener por id de boton que cierra el modal de las ofertas
 * 
 */
closeOferta.addEventListener("click", function () {
    document.getElementById("ofertas").style.display = "none";
});

/**
 * 
 * @param {*} event
 * addEventListener onclick que cierra modal al hacer click en la pagina
 * 
 */

window.onclick = function (event) {
    const ofertaDia = document.getElementById("ofertaDia");
    const ofertas = document.getElementById("ofertas");
    if (event.target == ofertaDia) {
        ofertaDia.style.display = "none";
    }

    if (event.target == ofertas) {
        ofertas.style.display = "none";
    }
}

/**
 * 
 * @param {*} event
 * Función onkeydown que busca en la pagina
 * 
 */
function buscar(event) {
    const codigo = event.which || event.keyCode;
    const btnBuscar = document.getElementById("btnBuscar");
    const rta = document.getElementById("modalBuscar");
    const rtaBuscar = document.getElementById("rtaBuscar");
    if (codigo === 8) {
        if (selecciono != '') {
            texto = texto.replace(selecciono, '');
            console.log('Texto eliminado' + texto);
        }
        texto = texto.substring(0, texto.length - 1);
        console.log(texto);
    }
    if (codigo >= 65 && codigo <= 90) {
        texto = texto + String.fromCharCode(codigo);
        console.log(texto);
    }
    if (codigo === 13) {

        if (document.getElementById(texto.toLowerCase()) !== null) {
            document.getElementById(texto.toLowerCase()).style.display = "block";
        }
        else {
            rtaBuscar.innerHTML = 'La busqueda no arrojo resultados';
            rta.style.display = "block";
        }
    }
    btnBuscar.addEventListener("click", function () {
        if (document.getElementById(texto.toLowerCase()) !== null) {
            document.getElementById(texto.toLowerCase()).style.display = "block";
        }
        else {
            rtaBuscar.innerHTML = 'La busqueda no arrojo resultados';
            rta.style.display = "block";
        }
    });
}

function borrar() {
    selecciono = texto;
    console.log('Selecciono: ' + selecciono)
}

/**
 * 
 * @param {*} evt 
 * @param {*} pageName
 * Función de onclick que obtiene el id del contenido que el usuario quiere ver
 * 
 */
function openPage(evt, pageName) {
    let i, page, menulinks;
    page = document.getElementsByClassName("page");
    for (i = 0; i < page.length; i++) {
        page[i].style.display = "none";
    }
    menulinks = document.getElementsByClassName("menulinks");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].className = menulinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}

/**
 * 
 * @param {*} product 
 * @param {*} price
 * Función de onclick que obtiene nombre y precio del producto sleccionado y lo almacena en su respectivo array
 * 
 */
let productos = [];
let precios = [];
function shop(product, price) {
    productos[productos.length] = product;
    precios[precios.length] = price;
    document.getElementById("car").innerHTML = productos.length;
    console.log(productos);
    console.log(precios);
    // localStorage.setItem("productos", productos.length);
    // document.getElementById("car").innerHTML = localStorage.getItem("productos");
}

/**
 * 
 * @param {*} id
 * addEventListener por id de boton que lanza el modal del carrito de compras con la data seleccionada por el usuario hasta el momento
 * 
 */
btnBuy.addEventListener("click", function () {
    let total = 0;
    let table, row, cell1, cell2;
    for (i = 0; i < productos.length; i++) {
        table = document.getElementById("factura");
        row = table.insertRow(0);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = productos[i];
        cell2.innerHTML = precios[i];
        total = total +precios[i];
    }
    document.getElementById("total").innerHTML = `Total: ${total}`;
    document.getElementById("buy").style.display = "block";
});