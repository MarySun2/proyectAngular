//Decorador : es una función especial que se puede aplicar a clases, métodos, propiedades, o parámetros. 
//Los decoradores permiten añadir comportamiento adicional o modificar el comportamiento existente de estos elementos.

function classDecorator <T extends { new (...args:any[]): {}}> (
    constructor: T
)
{
    return class extends constructor 
    {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass
{
    //Propiedad
    public myProperty: string = 'Abc123';

    // Metodo Print
    print()
    {
        console.log('Hola Mundo');
    }
}

//imprimo la deficinicion de la clase
console.log(SuperClass);

//Crear la instancia
const myClass = new SuperClass();

console.log(myClass);