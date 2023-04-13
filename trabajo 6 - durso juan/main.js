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

// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
//  mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:



// class Persona {

//     constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
//       this.nombre = nombre;
//       this.edad = edad;
//       this.dni = this.generarDNI();
//       this.sexo = sexo;
//       this.peso = peso;
//       this.altura = altura;
//       this.anioNacimiento = anioNacimiento;
//     }

//     generarDNI() {
//         return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        
        
//       }
  
//     mostrarGeneracion() {
//       let generacion = "";
//       let rasgoCaracteristico = "";
  
//       if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
//         generacion = "Generacion Z";
//         rasgoCaracteristico = "Irreverencia";
//       } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
//         generacion = "Generacion Y";
//         rasgoCaracteristico = "Frustracion";
//       } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
//         generacion = "Generación X";
//         rasgoCaracteristico = "Obsesion por el exito";
//       } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
//         generacion = "Generación Y (Millennials)";
//         rasgoCaracteristico = "Ambicion";
//       } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
//         generacion = "Generación Z";
//         rasgoCaracteristico = "Austeridad";
//       } else {
//         generacion = "Generación Desconocida";
//         rasgoCaracteristico = "no se conoce la generación a la que pertenece";
//       }
  
//       console.log(`La persona pertenece a la ${generacion} y su rasgo característico es la ${rasgoCaracteristico}`);
//     }

//     esMayorDeEdad() {
//         if (this.edad >= 18) {
//           console.log(`${this.nombre} es mayor de edad`);
//         } else {
//           console.log(`${this.nombre} es menor de edad`);
//         }
//       }

//       mostrarDatos() {
//         console.log(`Nombre: ${this.nombre}`);
//         console.log(`Edad: ${this.edad}`);
//         console.log(`DNI: ${this.dni}`);
//         console.log(`Sexo: ${this.sexo}`);
//         console.log(`Peso: ${this.peso}`);
//         console.log(`Altura: ${this.altura}`);
//         console.log(`Año de nacimiento: ${this.anioNacimiento}`);
//       }
//   }
  

//   const persona1 = new Persona("Juan", 27, "H", 90, 1.7, 2001);
//   persona1.mostrarGeneracion();
//   persona1.esMayorDeEdad();
//   persona1.mostrarDatos();


// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this.ISBN = ISBN;
      this.titulo = titulo;
      this.autor = autor;
      this.numPaginas = numPaginas;
    }
  
    // Métodos GET
    getISBN() {
      return this.ISBN;
    }
  
    getTitulo() {
      return this.titulo;
    }
  
    getAutor() {
      return this.autor;
    }
  
    getNumPaginas() {
      return this.numPaginas;
    }
  
    // Métodos SET
    setISBN(ISBN) {
      this.ISBN = ISBN;
    }
  
    setTitulo(titulo) {
      this.titulo = titulo;
    }
  
    setAutor(autor) {
      this.autor = autor;
    }
  
    setNumPaginas(numPaginas) {
      this.numPaginas = numPaginas;
    }
  
    // Método para mostrar información del libro
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}`);
    }
  }
  
  // Crear objetos libros
  const libro1 = new Libro("9788408208124", "El Quijote", "Miguel de Cervantes", 1080);
  const libro2 = new Libro("9781505255607", "Harry Potter y las Reliquias de la Muerte", "J.P.Rowling", 650);
  
  // Mostrar información de los libros
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Comparar número de páginas de los libros
  if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`El libro ${libro1.getTitulo()} tiene más páginas que el libro ${libro2.getTitulo()}`);
  } else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`El libro ${libro2.getTitulo()} tiene más páginas que el libro ${libro1.getTitulo()}`);
  } else {
    console.log("Los libros tienen la misma cantidad de páginas");
  }
  