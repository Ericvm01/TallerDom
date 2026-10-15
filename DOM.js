// =====Ejercicio 1 =====

// const div = document.querySelector("div");

// const titulo = document.createElement("h1");
// titulo.textContent = "my presentation";
// div.before(titulo);

// // ===== Ejercicio 2 =====

// const parrafoDiv = div.querySelector("p");

// const nuevoParrafo = document.createElement("p");
// nuevoParrafo.textContent = "my best friend is mickey";
// parrafoDiv.after(nuevoParrafo);

// // ===== Ejercicio 3 =====

// const h1 = document.querySelector("h1");
// h1.style.color = "royalblue";

// // Seleccionar la ultima p, ponerle letra en negrita y color de fondo
// const parrafos = document.querySelectorAll("p");
// const ultimaP = parrafos[parrafos.length - 1];
// ultimaP.style.fontWeight = "bold";
// ultimaP.style.backgroundColor = "Red";


// ==============================================================

// ===== Ejercicio 4 =====
// Cambiar la etiqueta ol por ul con replaceWith y agregar la clase "listado"
// const ol = document.querySelector("ol");
// const ul = document.createElement("ul");
// ul.innerHTML = ol.innerHTML;   // conservar los items
// ul.classList.add("listado");
// ol.replaceWith(ul);

// // ===== Ejercicio 5 =====
// // Agregar la clase CSS al h2 y eliminar el item "preparar almuerzo" (remove)
// const h2 = document.querySelector("h2");
// h2.classList.add("titulo-estilo");

// // Funcion auxiliar: busca un li por su texto
// function buscarItem(texto) {
//     const items = document.querySelectorAll(".listado li");
//     for (const item of items) {
//         if (item.textContent.trim() === texto) {
//             return item;
//         }
//     }
//     return null;
// }

// buscarItem("Preparar almuerzo").remove();

// // ===== Ejercicio 6 =====
// // Agregar el item "Recoger a los ninos" despues de "hacer el mercado"
// const itemMercado = buscarItem("Hacer el mercado");
// const itemNinos = document.createElement("li");
// itemNinos.textContent = "Recoger a los ninos";
// itemMercado.after(itemNinos);

// // Clase cumplido: desayunar, almuerzo y recoger a los ninos
// // (el item del almuerzo ya fue eliminado en el ejercicio 5,
// //  por eso se valida que exista antes de aplicarle la clase)
// buscarItem("Desayunar").classList.add("cumplido");
// itemNinos.classList.add("cumplido");

// const itemAlmuerzo = buscarItem("Preparar almuerzo");
// if (itemAlmuerzo !== null) {
//     itemAlmuerzo.classList.add("cumplido");
// }

// // Clase fallido: ir al banco
// buscarItem("Ir al banco").classList.add("fallido");

// ==============================================================

// ===== Ejercicio 7 =====
// Seleccionar las p con clase "ps" y aplicarles color y tamano de letra

const parrafosPs = document.querySelectorAll("p.ps");

parrafosPs.forEach(function (p) {
    p.style.color = "crimson";
    p.style.fontSize = "24px";
});