// Ejemplo de operación asíncrona en Node.js
const fs = require('fs');
console.log('Inicio del programa');
// Operación asíncrona de lectura de archivo
fs.readFile('archivo.txt', 'utf8', (error, datos) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return;
    }
    console.log('Contenido del archivo:', datos);
});
console.log('Fin del programa');