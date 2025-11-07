fetch('https://api.ejemplo.com/datos')
    .then(response => {
// El objeto response contiene la respuesta del servidor
        console.log('Estado:', response.status);
        // 200, 404, etc.
        console.log('OK:', response.ok); // true si status es 200 - 299
        return response.json(); // Extrae el cuerpo como JSON
    })
    .then(datos => {
        console.log('Datos:', datos);
    })
    .catch(error => {
        console.error('Error en la petición:',
            error);
    });