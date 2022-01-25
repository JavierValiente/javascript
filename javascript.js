// COMPLETAR DATOS INGRESO:

let edad = 65;
const nombre = ' Javi';

if (edad <18) {
    console.log('No podes hacer el registro, sos menor de edad'); 
}
else if (edad <41) {
    console.log('Podes hacer el registro, debes renovar en 2 años'); 
}
else if (edad <61) {
    console.log('Podes hacer el registro, debes renovar en 1 año');
}
else if (edad <76) {
    console.log('Podes hacer el registro, debes renovar en 6 meses');
} 
else if (edad >75) {
    console.log('No puede hacer el registro, usted es mayor de edad'); 
}else { 
    alert ('La edad no fue completada o fue conpletada incorrectamente');
}

if ((nombre != '') && ((nombre != ' '))) {
    alert ('Hola' + nombre)  
}else {
    alert ('El nombre no fue completado')
}

// SACAR TURNOS HASTA EL 10:

for ( let i = 1; i <= 10; i++){
    alert(nombre + " tu turno es el N° " + i)
}




// FUNCIONES

// function saludoBienvenida(usuario, registroAlDia) {
//     let bienvenida = '';
//     if (registroAlDia == true) {
//         bienvenida = "Hola " + usuario + " tienes un descuento por tener tu registro al día";
//     } else {
//         bienvenida = "Hola " + usuario + " tendrás un recargo por registro vencido";
//     }
//     return bienvenida
// }

// let saludo1 = bienvenida('Edu', false);
// let saludo2 = bienvenida('Jaz', true);
