export function whatsMyType <T>(argument: T ): T //Funcion generica <T>
{
    return argument;
}
// De esta forma TypeScript intuye
// let amIString = whatsMyType('Hola Mundo');
// let amINumber = whatsMyType(100);
// let amIArray = whatsMyType([1,2,3,4,5]);

// podemos forzar el tipo de datos
let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));