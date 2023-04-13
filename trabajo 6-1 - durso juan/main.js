// TRABAJO PRACTICO 4

 // 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

//  class Auto {
//         constructor(color, marca, modelo) {
//             this.color = color;
//             this.marca = marca;
//             this.modelo = modelo;
            
//         }
//          encender () {
//             return console.log("el auto esta encendido")
//         }
//         apagar() {
//             return console.log("el auto esta encendido")
//         }
        
        
//     }

//     const auto1 = new Auto("rojo","fiat","cronos")
//     console.log(auto1)
//     auto1.encender()

// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.



// const cuenta = {
//     titular: "Alex",
//     saldo: 0,
//     ingresar(cantidad) {
//       this.saldo += cantidad;
//     },
//     extraer(cantidad) {
//       if (cantidad > this.saldo) {
//         console.log("No hay suficiente saldo en la cuenta.");
//       } else {
//         this.saldo -= cantidad;
//       }
//     },
//     informar() {
//       console.log(`Titular: ${this.titular} - Saldo: ${this.saldo}`);
//     }
//   };
  
//   cuenta.informar();
  
//   cuenta.ingresar(100);
//   cuenta.informar();
  
//   cuenta.extraer(50);
//   cuenta.informar();
  

//3- Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class Rectangulo {
//     constructor(ancho, alto) {
//       this.ancho = ancho;
//       this.alto = alto;
//     }
  
//     setAncho(ancho) {
//       this.ancho = ancho;
//     }
  
//     setAlto(alto) {
//       this.alto = alto;
//     }
  
//     mostrar() {
//       console.log(`Ancho: ${this.ancho}, Alto: ${this.alto}`);
//     }
  
//     calcularPerimetro() {
//       return 2 * (this.ancho + this.alto);
//     }
  
//     calcularArea() {
//       return this.ancho * this.alto;
//     }
//   }
  

//   const rectangulo1 = new Rectangulo(5,10)
//   rectangulo1.setAlto(6)

//   console.log(rectangulo1.calcularPerimetro())
//   console.log(rectangulo1.calcularArea())

//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


// class Producto {
//     constructor(codigo, nombre, precio) {
//       this.codigo = codigo;
//       this.nombre = nombre;
//       this.precio = precio;
//     }
  
//     imprimeDatos() {
//       console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
//     }
//   }
  
//   const productos = [
//     new Producto(1, "Producto 1", 10.99),
//     new Producto(2, "Producto 2", 20.99),
//     new Producto(3, "Producto 3", 30.99),
//   ]

//   productos.forEach((producto) => producto.imprimeDatos());

