const usuario = prompt('Ingrese su nombre y apellido:');

const saludo = (usuario) => console.log('Bienvenido al Turnero online ' + usuario);

saludo(usuario);

const servicios = ["Clínica Médica", "Ginecología", "Cardiología", "Dermatología", "Nutrición", "Laboratorio"];

const servicioElegido = prompt("Elija un servicio:\n" + servicios.join("\n"));

switch (servicioElegido) {
    case "Clínica Médica":
    case "Ginecología":
    case "Cardiología":
    case "Dermatología":
    case "Nutrición":
    case "Laboratorio":
        console.log("Servicio seleccionado: " + servicioElegido);
        break;
    default:
        alert("El servicio seleccionado no está disponible");
        break;
}

const fechaActual = new Date().getTime();

const fechaIngresadaString = prompt("Indique la fecha: dd/mm/aaaa");
const fechaIngresada = Date.parse(fechaIngresadaString);

const hora = parseInt(prompt("Indique la hora (8-18 hs):"));

if (fechaIngresada > fechaActual) {
    if (hora >= 8 && hora <= 18) {
        console.log(usuario + ' ha agendado un turno para ' + servicioElegido + ' el día ' + fechaIngresadaString + ' a las ' + hora + ' horas.');
    } else {
        alert("Seleccione otro horario");
    }
} else {
    alert("La fecha ingresada no es válida");
}