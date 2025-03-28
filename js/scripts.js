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
const ingredientsInitialLetterFilter = (ingredients) =>{
    
    const ingredientsList = ingredients.filter((ingredients) => {
        return /[m]/gi.test(ingredients.charAt(0))
    })
    console.log(ingredientsList)
}
ingredientsInitialLetterFilter(["Manzana", "Melón", "Pera", "Sandía"]);

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