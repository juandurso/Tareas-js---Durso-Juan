// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

// document.write("<h1>Los meses del año son:</h1>")


// for (let i = 0; i < meses.length; i++) {
//     const mes = meses[i]
//     document.write("<br>", mes)

// }

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


//         let continuar = true
//         let ciudades = []

// while (continuar === true) {
//     let ciudad = prompt("Ingrese una ciudad")
//     ciudades.push(ciudad)
//     continuar = confirm("Desea ingresar otra ciudad?")
// }

//     document.write("La cantidad de elementos dentro del arreglo de ciudades es: ", ciudades.length)

//     document.write("<br> elemento 1er posicion: ", ciudades[0])
//     document.write("<br> elemento 3er posicion:", ciudades[2])
//     ciudades.push("paris")

//     document.write("<br> ultima posicion de elementos:", ciudades[ciudades.length - 1])

//     ciudades.splice(1,1,"barcelona")

//     document.write("<br> elemento 2da posicion:", ciudades[1])


//     document.write("<h2>Las ciudades cargadas son: </h2>")
//     for(i=0 ; i < ciudades.length; i++)
//     {
//         let ciudad = ciudades[i]
//         document.write("<br>",ciudad)
//     }


    // 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


        // function determinarNumero (num)

        // {
        //     if (num % 2 == 0) {
        //         alert("el numero es par")

        //     }else{
        //         alert("el numero es impar")
        //     }
        // }

        // determinarNumero(5)

        // 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

        // let ladoA = parseInt(prompt("ingrese el lado A del triangulo"))
        // let ladoB= parseInt(prompt("ingrese el lado B del triangulo"))

        // function calcularPerimetro (lado1, lado2)

        // {
        //     let perimetro = 2 * (lado1 + lado2)
        //     return perimetro
        // }

        // console.log( "El perimetro del triangulo es: " + calcularPerimetro(ladoA,ladoB))


        // 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

        // let numeros = [];
        // let suma = 0;
        // let numero;
        
        // while (true) {
        //   numero = prompt("Introduce un número:");
        
        //   if (numero === null) {
        //     break;
        //   }
        
        //   if (isNaN(numero)) {
        //     alert("Debes introducir un número válido");
        //     continue;
        //   }
        
        //   numeros.push(Number(numero));
        // }
        
        // for (let i = 0; i < numeros.length; i++) {
        //   suma += numeros[i];
        // }
        
        // alert(`La suma total de los números introducidos es: ${suma}`);


        // let numero = prompt("Introduce un número entero entre 1 y 50:");


        // 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 


        // for (let i = 1; i <= 50; i++) {
        //     console.log(i.toString().repeat(i))
        // }
        
        









