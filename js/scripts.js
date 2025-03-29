//1️⃣ Camila está organizando datos en su sistema.
// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array.
// Ejemplo: Si recibe [2, 5, 8], deberá mostrar:
// 0 - 0  
// 5 - 5  
// 16 - 8
const organizingDataInTheSystem = () => {
    numbersIntheSystem = [2, 5, 8];
    
  const systemResult = numbersIntheSystem.map((number,position) => {
    return number * position
  });

  const numbersInOrderForConsole = systemResult.sort((a,b) => {
    return a - b;
  })

  numbersInOrderForConsole.forEach((results, originalNumbers) => {
    console.log(`${results} - ${numbersIntheSystem[originalNumbers]}`)
  })
}

organizingDataInTheSystem();

//2️⃣ Bego quiere hacer cálculos avanzados.
// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1 (el +1 es para evitar que se divida por 0).
// Ejemplo: Si recibe [10, 20, 30], deberá imprimir [10, 10, 10].
const advancedCalculations = (numbers) =>{
    
    const funtionToDividedArrayAndIndex = numbers.map((numbers,index) =>{
        return numbers / (index + 1)
    })

    console.log(`Números recibidos: ${numbers} Resultado del cálculo: ${funtionToDividedArrayAndIndex}`)
}
advancedCalculations ([10, 20, 30]);

//3️⃣ Sabrina está trabajando con archivos de texto.
// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
// Ejemplo: Si recibe ["hola", "mundo"], deberá imprimir ["HOLA", "MUNDO"].
const textFilesInUppercase = (words) => {
   
    const lowerCaseToUpperCaseWords = words.map((words) => {
    return words.toUpperCase();
   }) 

   console.log(lowerCaseToUpperCaseWords)
}
textFilesInUppercase(["hola", "mundo"]);

//4️⃣ Macarena está organizando una lista de ingredientes.
// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas.
// Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].
const ingredientsInitialLetterFilter = (ingredients,letter) =>{

    const ingredientsList = ingredients.filter(ingredients => {
        return ingredients.charAt(0).toLowerCase() === letter.toLowerCase()
    })
    console.log(ingredientsList)
}

ingredientsInitialLetterFilter(["Manzana", "Melón", "Pera", "Sandía"], 'm');

//5️⃣ Camila está recopilando datos numéricos.
// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], deberá mostrar 55.
const collectingNumericData = (numbers) =>{
    const numbersTotal = numbers.reduce((acc,number) => {
        return acc + number
    })

    console.log("el total de la suma es: " + numbersTotal)
}

collectingNumericData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//6️⃣ Bego está creando informes detallados.
// Investiga el método Math.pow()
// Crea una función que reciba un array de 10 números y muestre por consola cada número, su cuadrado y su cubo en este formato:
// "Número: 2 - Cuadrado: 4 - Cubo: 8".
const detailedReportGenerator = (numbers) =>{
    
    const squareNumbers = numbers.map(num =>Math.pow(num,2) );
    const cubeOfNumbers = numbers.map(num =>Math.pow(num,3) );

   numbers.forEach((numbers,result) => {
        console.log(`Número: ${numbers} - Al cuadrado: ${squareNumbers[result]} - Al cubo: ${cubeOfNumbers[result]}`)
    })
}

detailedReportGenerator([9,25,13,12,89,5,20,4,96,10]);

//7️⃣ Sabrina quiere modificar un mensaje secreto.
// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.Ejemplo: Si recibe "javascript", deberá imprimir "jAvAscrIpt".
const modifyingSecretMessageUppercaseVowels = (message) =>{
   
    const finalmessage = message.map(message => 
        {
        if(/[aeiou]/i.test(message)){
           // return  message.replace(/[aeiou]/gi.toUpperCase)
           return message.replaceAll(/[aeiou]/gi ,message => message.toUpperCase())
        }
        })

    console.log(finalmessage) // Preguntar mañana
}

modifyingSecretMessageUppercaseVowels(['javascript'])

//8️⃣ Macarena está buscando números importantes.
// Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.
// deberá mostrar:
// "Algún número es mayor de 5"
// "Ningún número es mayor de 5"
const searchImportantNumbersGreaterThan5 = (numbers) =>{

     const numbersSearch = numbers.some(numbers => {
        numbers >= 5} )
        const numbersSearchResult = numbersSearch
                    ?"Algún número es mayor de 5"
                    :"Ningún número es mayor de 5"    

console.log(numbersSearchResult)
}

searchImportantNumbersGreaterThan5([1,2,3,4,4,5,2,6,7,10]) //preguntar mañana

//9️⃣ Camila está filtrando resultados.
// Crea una función que reciba un array de 5 palabras y un número,
//  y devuelva un array con las palabras que tienen esa longitud
// Ejemplo: Si recibe ['hola', 'adios', 'gato', 'perro', 'casa'], 4, deberá imprimir ['hola', 'gato', 'casa'].
const lengthWordsfilter = (words,number) =>{

    const lengthFilter = words.filter(words =>
        {
        return words.length === 4
        })

    console.log(lengthFilter)
}

lengthWordsfilter(['hola', 'adios', 'gato', 'perro', 'casa'], 4,)

//🔟 Bego quiere comprobar divisores.
// Crea una función que reciba un array de números y un número, y devuelva un array con los números que sean divisores de ese número.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6] y 2, deberá imprimir [1, 2, 4, 6].
const numberDividerFilter = (numbers, divisorNumber) =>{

    const numberDivisorsOf2 = numbers.filter(numbers =>{
          return numbers % divisorNumber === 0
    })
console.log(numberDivisorsOf2)
}

numberDividerFilter([1, 2, 3, 4, 5, 6],2) //preguntarle a adrian si el 1 es un error

// 1️⃣1️⃣ Sabrina está seleccionando usuarios.
// Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30.
// const users = [
// { name: 'John', age: 25 },
// { name: 'Jane', age: 30 },
// { name: 'Bob', age: 20 }];
// Ejemplo salida:
// Usuarios menores de 30: John, Bob

const userSeleccionByAge = () => {
    const users = [
                { name: 'John', age: 25 },
                { name: 'Jane', age: 30 },
                { name: 'Bob', age: 20 }];


    const ageSearchFilter = users.filter(user => {
       return  user.age < 30
    })     

    const userBelow30 = ageSearchFilter.map(user => user.name)

    console.log('Usuarios menores de 30: ' + userBelow30.join(', '))
}
userSeleccionByAge()

//1️⃣2️⃣ Macarena quiere comprobar números pares.  
// Crea una función que reciba un array con 5 números y te diga si todos son pares o no.
// Ejemplo: Si recibe [2, 4, 6, 8, 10], deberá impimir Todos son pares.
const evenNumberschecker = (numbers) =>{

const  evenNumbers = numbers.every(numbers => {
    numbers % 2 === 0})
   
const cheekerResult = evenNumbers 
                    ?'Todos son pares'
                    :'Algún número no es par'

console.log(cheekerResult)
}

evenNumberschecker([2, 4, 6, 8, 10])

//1️⃣3️⃣ Abby quiere ordenar palabras por longitud.  
// Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
// Ejemplo: Si recibe ["cielo", "sol", "estrella", "luz", "universo"], deberá imprimir ["sol", "luz", "cielo", "estrella", "universo"].
const ordenWordsByLength = (words) => {
    const wordsOrden = words.sort((a,b) => {
        a.length - b.length;})

     console.log(wordsOrden)
}
ordenWordsByLength(["cielo", "sol", "estrella", "luz", "universo"])

//1️⃣4️⃣ Camila quiere invertir palabras.  
// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y minúsculas. A Camila no le gusta el método reverse(), así que quiere hacerlo de otra manera 😊.
// Ejemplo: Si recibe "Mariposas" deberá imprimir "sasopiraM".




//💪 Desafío Extra 1:
// Bego quiere simplificar un array de números de dos dígitos sumando sus dígitos.
// Crea una función que reciba un array de 5 números de dos dígitos y devuelva un array con la suma de los dígitos.
// Ejemplo: Si recibe [21, 34, 87, 10, 28], deberá imprimir [3, 7, 15, 1, 10].

//💪 Desafío Extra 2:
//Macarena quiere borrar usuarios específicos.
// Crea una función que reciba un id y borre al usuario correspondiente del siguiente array:
// const users = [
// { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
// { id: "user002", name: "María", surname: "González", age: 25 },
// { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
// { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
// { id: "user005", name: "Luis", surname: "López", age: 40 }
// ];
// Ejemplo: Si recibe "user003", el array quedará sin Pedro.