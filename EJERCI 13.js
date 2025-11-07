try {
    // Código que podría generar un error
    const resultado = operacionRiesgosa();
    console.log("Operación exitosa:",
        resultado);
} catch (error) {
    // Este bloque se ejecuta si ocurre un
    error
    console.error("Ocurrió un error:",
        error.message);
} finally {
// Este bloque siempre se ejecuta, haya error o no
    console.log("Limpieza de recursos");
}