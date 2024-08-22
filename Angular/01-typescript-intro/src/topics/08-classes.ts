//Classe principal Person 
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

     //otra forma de hacerlo
    // constructor(name: string, address: string) 
    // {
    //     this.name = name;
    //     this.address = address;
    // }

    //forma corta de definir typescript
    constructor(public name: string, 
                private address: string = 'No Address') 
    {
        this.name = name;
        this.address = address;
    }
}

const iroman = new Person('Jhon', 'New York');
console.error(iroman);

//Clases Hero extendida de a Person
// export class Hero extends Person
// {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     )
//     {
//         super(realName, 'Villa Verde');
//     }
// }

// const iroman2 = new Hero('Iroman', 45, 'Tony');
// console.warn(iroman2);

//clase 1

export class Hero
{
    public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    )
    {
         this.person = new Person(realName);
    }
}


const iroman2 = new Hero('Iroman', 45, 'Tony');
console.warn(iroman2);

// clase 2 con Inyeccion de dependencias
export class Hero2
{
    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    )
    {
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony Stark', 'New York');
const iroman3 = new Hero2('Iroman', 45, 'Tony', tony);
console.error(iroman3);




//Una Forma
//export {Person}