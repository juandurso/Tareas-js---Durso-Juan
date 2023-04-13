// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// alert("Hola rolling")

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// document.write("hello World")

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

// document.write(3 + 5)

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»


// const usuario = prompt('ingrese el usuario')
// alert("hola " + usuario)

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// const primerNumero = parseInt(prompt('ingrese primer numero'))
// const segundoNumero = parseInt(prompt('ingrese segundo numero'))
// document.write (primerNumero+segundoNumero)

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

    // const primerNumero = parseInt(prompt('ingrese primer numero'))
    // const segundoNumero = parseInt(prompt('ingrese segundo numero'))
    // document.write(Math.max(primerNumero, segundoNumero))

    // 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

    // const primerNumero = parseInt(prompt('ingrese primer numero'))
    // const segundoNumero = parseInt(prompt('ingrese segundo numero'))
    // const tercerNumero = parseInt(prompt('ingrese tercer numero'))
    // document.write(Math.max(primerNumero, segundoNumero, tercerNumero))

    // 8.- Escribe un programa que pida un número y diga si es divisible por 2

    // const numero = parseInt(prompt('ingrese numero'))
    // if (numero % 2 == 0 ) {
    //     alert ("El numero es divisible por 2")
    // }else{
    //     alert("El numero no es divisible por 2")
    // }

    // 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
    // Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

    // const frase = prompt("Ingresa una frase:");
    // const vocales = "aeiouAEIOU";
    // let vocalesEncontradas = "";

    // for (let i = 0; i < frase.length; i++) {
    // const caracter = frase.charAt(i);
    // if (vocales.indexOf(caracter) !== -1 && vocalesEncontradas.indexOf(caracter) === -1) {
    //     vocalesEncontradas += caracter;
    // }
    // }

    // if (vocalesEncontradas.length > 0) {
    // console.log("Las vocales encontradas son: " + vocalesEncontradas);
    // } else {
    // console.log("No se encontraron vocales en la frase ingresada.");
    // }

    // 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

    // const numero = parseInt(prompt('ingrese un numero'))

    // if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0)
    // {
    //     alert("el numero ingresado es divisible por 2 o 3 o 5 o 7")
    // }else{
    //     alert("el numero ingresado no es divisible por 2 o 3 o 5 o 7")
    // }

    // 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)


    //     const numero = parseInt(prompt("Ingrese un número:"));

    // let esDivisiblePor2 = false;
    // let esDivisiblePor3 = false;
    // let esDivisiblePor5 = false;
    // let esDivisiblePor7 = false;

    // if (numero % 2 === 0) {
    //   esDivisiblePor2 = true;
    // }
    // if (numero % 3 === 0) {
    //   esDivisiblePor3 = true;
    // }
    // if (numero % 5 === 0) {
    //   esDivisiblePor5 = true;
    // }
    // if (numero % 7 === 0) {
    //   esDivisiblePor7 = true;
    // }

    // if (esDivisiblePor2 || esDivisiblePor3 || esDivisiblePor5 || esDivisiblePor7) {
    //   console.log(numero +  " es divisible por:");
    //   if (esDivisiblePor2) {
    //     console.log("2");
    //   }
    //   if (esDivisiblePor3) {
    //     console.log("3");
    //   }
    //   if (esDivisiblePor5) {
    //     console.log("5");
    //   }
    //   if (esDivisiblePor7) {
    //     console.log("7");
    //   }
    // } else {
    //   console.log (numero + " no es divisible por 2, 3, 5 ni 7");
    // }


    
        // PRACTICA DE CLASE
// Se tiene que liquidar a tres empleados
// Indicar por mensaje si la liquidacion excedio el presupuesto mensual
// El presupuesto esperado para el mes de abril sera,
// un millon de pesos
// Ok: La liquidacion esta dentro del presupuesto esperado
// Ok: La liquidacion se salio del presupuesto (un millon)

    // const sueldoPrimerEmpleado = parseInt(prompt("Ingresa sueldo primer empleado:"));
    // const sueldoSegundoEmpleado = parseInt(prompt("Ingresa sueldo segundo empleado:"));
    // const sueldoTercerEmpleado = parseInt(prompt("Ingresa sueldo tercer empleado:"));
    // const presupuesto = 1_000_000

    // const resultado = sueldoPrimerEmpleado + sueldoSegundoEmpleado + sueldoSegundoEmpleado

    // if (resultado <= presupuesto)
    // {
    //     alert("La liquidacion esta dentro del presupuesto esperado")
    // }else{
    //     alert("La liquidacion se salio del presupuesto (un millon)")
    // }


