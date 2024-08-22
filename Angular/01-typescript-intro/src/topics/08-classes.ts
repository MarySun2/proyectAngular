export class Person {
    // public name: string;
    // private address: string;

    // constructor sin parametros
    // constructor()
    // {
    //     this.name = 'John';
    //     this.address = 'New York';
    // }

    // constructor con parametros
    // constructor(name: string, address?: string) // recuerda que esto ? es opcional
    // {
    //     this.name = 'John';
    //     this.address = 'New York';
    // }

    //forma corta de definir typescript
    constructor(public name: string, 
                private address: string = 'No Address') 
    {
        this.name = name;
        this.address = address;
    }

    //otra forma de hacerlo
    // constructor(name: string, address: string) 
    // {
    //     this.name = name;
    //     this.address = address;
    // }
}

const iroman = new Person('Jhon', 'New York');
console.table(iroman);




//Una Forma
//export {Person}