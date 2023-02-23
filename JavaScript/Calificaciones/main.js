// Programa para calcular el promedio de tres caificaciones.
var alumno;
var nombAlumno;
var apeidoPat;
var apeidMat;
var materia;
const calificaciones = [];
var calif1 = 0;
var calif2 = 0;
var calif3 = 0;
var promGral = 0;

acceso();

function acceso(){ // Iniciar con la pregunta para iniciar
    console.log("Bienvenido al sistema para registrar calificaciones")
    var opcIngresa = prompt("¿Quieres ingresar un registro? " + "Responder si/no: ");
        if (opcIngresa == "si"){
            registro();
        } else if (opcIngresa == "no"){
            console.log("Gracias");
            
        } else {
            console.log("Respuesta no valida, vuelva a intentarlo"); // Validar que se ingresa si o no
            return acceso();
        }
    registro();
}

function registro(){ //Registro para el alumno
    console.log("***************************************************" + "\n");
    console.log("  Ingresa los datos del alumno");
    nombAlumno = prompt("Nombre del alumno: ");
    apeidoPat = prompt("Apellido paterno: ");
    apeidoMat = prompt("Apellido materno: ");
    alumno = (nombAlumno + " " + apeidoPat + " " + apeidoMat);
    console.log(alumno.toUpperCase()); // Imprimira en mayuscula  
    console.log("\n" + "***************************************************");
    califica();
}

function califica(){ // Introducir calificaciones
    if (calificaciones.length == 3){ // Validar que esten todas las calificaciones
        promedio();
    } else {
    console.log("Materias para ingresar calificación");
    console.log("Opción 1 -> Español " + calif1 + "\n" + "Opción 2 -> Matemáticas " + calif2 + "\n" + "Opción 3 -> Ciencias Naturales " + calif3);
    var opc2 = prompt("Introduce una opción: ");
    if (opc2 == "1"){ 
        calif1 = prompt("Ingresar calificación Español: ");
        if ((calif1 >= 6) && (calif1 <= 10)){
            calificaciones[0] = calif1;
            return califica();
        } else {
            console.log("Calificación no valida, ingrese un valor de 6.0 a 10.0");
            calif1 = 0;
            return califica();
        }
    }else if (opc2 == "2"){
        calif2 = prompt("Ingresar calificación Matemáticas: ");
        if ((calif2 >= 6) && (calif2 <= 10)){
            calificaciones[1] = calif2;
            return califica();
        } else {
            console.log("Calificación no valida, ingrese un valor de 6.0 a 10.0");
            calif2 = 0;
            return califica();
        }
    }else if (opc2 == "3"){
        calif3 = prompt("Ingresar calificación Ciencias Naturales: ");
        if ((calif3 >= 6) && (calif3 <= 10)){
            calificaciones[2] = calif3;
            return califica();
        console.log("Gracias");
        } else {
            console.log("Calificación no valida, ingrese un valor de 6.0 a 10.0");
            calif3 = 0;
            return califica();
        }
        promedio();
        boleta();
    }else {
        console.log("Opción no valida, vuelva a intentarlo");
        return califica();
    }
}
}
function promedio(){ // Obtener el promedio general
    calif1 = +calif1;
    calif2 = +calif2;
    calif3 = +calif3;
    promGral = ((calif1 + calif2 + calif3) / 3);
    boleta();
}

function boleta(){ // Mostrar boleta con las calificaciones
    console.log("***************************************************");
    console.log(alumno.toUpperCase());
    console.log("* Español              Calificación: " + calif1);
    console.log("* Matemáticas          Calificación: " + calif2);
    console.log("* Ciencias Naturales   Calificación: " + calif3);
    console.log("PROMEDIO GENERAL:       " + promGral);
    console.log("***************************************************");
    acceso();
}