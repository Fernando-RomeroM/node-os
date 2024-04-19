const os = require('os');

function obtenerDatosDeRed() {
    const interfacesDeRed = os.networkInterfaces();
    const datosDeRed = [];

    // Iterar sobre las interfaces de red
    for (const nombreInterfaz in interfacesDeRed) {
        const interfaz = interfacesDeRed[nombreInterfaz];
        for (const detalle of interfaz) {
            // Extraer la familia, dirección e interno de cada interfaz
            const { family, address, internal } = detalle;
            // Guardar los datos en un objeto
            const datosInterfaz = {
                Interfaz: nombreInterfaz,
                Familia: family,
                Dirección: address,
                Interno: internal
            };
            // Agregar el objeto a la lista de datos de red
            datosDeRed.push(datosInterfaz);
        }
    }

    return datosDeRed;
}

// Ejemplo de uso
const datosRed = obtenerDatosDeRed();
console.log(datosRed);
