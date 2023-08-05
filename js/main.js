//Declaración de funciones
function calcProm(n1, n2, n3) {
    let calcPromedio = (n1 + n2 + n3) / 3;
    return (calcPromedio)
}
function verMayor(n1, n2, n3) {
    let bandera = false;
    let nMayor = 0
    while (bandera == false) {
        if ((n1 > n2) && (n1 > n3)) {
            bandera = true;
            nMayor = n1;
        } else {
            if ((n2 > n1) && (n2 > n3)) {
                bandera = true;
                nMayor = n2;
            } else {
                if ((n3 > n1) || (n3 > n2)) {
                    bandera = true;
                    nMayor = n3;
                }
            }
        }
    }
    return (nMayor)
}
function verMenor(n1, n2, n3) {
    let bandera = false;
    let nMenor = 0
    while (bandera == false) {
        if ((n1 < n2) && (n1 < n3)) {
            bandera = true;
            nMenor = n1;
        } else {
            if ((n2 < n1) && (n2 < n3)) {
                bandera = true;
                nMenor = n2;
            } else {
                if ((n3 < n1) || (n3 < n2)) {
                    bandera = true;
                    nMenor = n3;
                }
            }
        }
    }
    return (nMenor)
}

//Declaración de variables
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));
let promedio = 0;
let mayor = 0;
let menor = 0;
let k = false;

//Verifico que efectivamente se estén ingresando números
while(!k){
    if (isNaN(num1) || (num1 == null) || (num1 == "")) {
        num1 = parseFloat(prompt("Ingrese el primer número nuevamente: "));
    }
    if (isNaN(num2) || (num2 == null) || (num2 == "")) {
        num2 = parseFloat(prompt("Ingrese el segundo número nuvamente: "));
    }
    if (isNaN(num3) || (num3 == null) || (num3 == "")) {
        num3 = parseFloat(prompt("Ingrese el tercer número nuevamente: "));
    }
    if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
        k = true;
    }
}

//Llamado a funciones
promedio = calcProm(num1, num2, num3);
mayor = verMayor(num1, num2, num3);
menor = verMenor(num1, num2, num3);

//Visualización por pantalla
alert("El menor número ingresado es: " + menor);
alert("El mayor número ingresado es: " + mayor);
alert("El promedio es: " + promedio);
