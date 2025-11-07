function obtenerDatos(callback) {
    // Simulamos una operación asíncrona con setTimeout
    setTimeout(() => {
        const datos = { id: 1, nombre: "Producto" };
        callback(null, datos); // null indica que no hay error
    }, 2000);
}
obtenerDatos((error, datos) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Datos recibidos:", datos);
    }
});