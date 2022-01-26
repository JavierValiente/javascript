// COMPLETAR DATOS INGRESO:

// let nombre = '';
// let apellido = '';
// let edad = '';

// while (nombre == "" || apellido == "" || edad == "") {

//     nombre = prompt ("Ingresa tu nombre"); 
//     if ( nombre !=''){
//         apellido = prompt ("Ingresa tu apellido");
//         }
//         if (apellido !=''){
//         edad = prompt ("Ingresa tu edad");
//         }
// }

  

// let edad = 65;
// const nombre = ' Javi';

// if (edad <18) {
//     console.log('No podes hacer el registro, sos menor de edad'); 
// }
// else if (edad <41) {
//     console.log('Podes hacer el registro, debes renovar en 2 años'); 
// }
// else if (edad <61) {
//     console.log('Podes hacer el registro, debes renovar en 1 año');
// }
// else if (edad <76) {
//     console.log('Podes hacer el registro, debes renovar en 6 meses');
// } 
// else if (edad >75) {
//     console.log('No puede hacer el registro, usted es mayor de edad'); 
// }else { 
//     alert ('La edad no fue completada o fue conpletada incorrectamente');
// }

// if ((nombre != '') && ((nombre != ' '))) {
//     alert ('Hola' + nombre)  
// }else {
//     alert ('El nombre no fue completado')
// }

// // SI INGRRSA PATENTE "XXX123" TIENE PEDIDO CAPTURA Y SE CANCELA EL PROCESO: (El dia de mañana una lista en una base?)

// let pedidoCaptura = '';

// while (pedidoCaptura != "XXX123") {

//     pedidoCaptura = prompt ("Ingrese su patente:")
// }

// // SACAR TURNOS HASTA EL 10:

// for ( let i = 1; i <= 10; i++){
//     alert(nombre + " tu turno es el N° " + i)
// }

// let dia = 'domingo';

// switch (dia) {
//     case 'sabado':
//         alert('Turnos hasta las 12hs')
//     break;
//     case 'domingo':
//         alert('Cerrado')
//     break;
//     case 'miercoles':
//         alert('Descuento para empleados municipales')
//     break;
//     default:
//         alert ('Puede ingresar a verificar')
//     break;
// }



// FUNCIONES

function saludoBienvenida(usuario, registroAlDia) {
    let bienvenida = '';

    if (registroAlDia == true) {
        bienvenida = "Hola " + usuario + " tienes un descuento por tener tu registro al día";
    } else {
        bienvenida = "Hola " + usuario + " tendrás un recargo por registro vencido";
    }
    return bienvenida
}

let avisoAlDeuda = saludoBienvenida('Edu', false);
let avisoAlDia = saludoBienvenida('Jaz', true);

console.log(avisoAlDeuda)
console.log(avisoAlDia)

// OBJETOS

