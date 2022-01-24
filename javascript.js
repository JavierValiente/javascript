

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

        // function saludar (){
        //     console.log ("Hola como va??")

        //     saludar ();
        // }
