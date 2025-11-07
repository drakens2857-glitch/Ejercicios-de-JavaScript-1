// Exportaciones con nombre (exportar múltiples elementos)
export const PI = 3.14159;
export function sumar(a, b) {
    return a + b;
}
export class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Exportación por defecto (un solo elemento principal por módulo)
export default function multiplicar(a, b) {
    return a * b;
}
// Exportación combinada (nombrada y por defecto)
const API_URL = 'https://api.ejemplo.com';