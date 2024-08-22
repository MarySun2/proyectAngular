
//1. forma de hacerlo
// interface superHeroe 
// {
//     name: string;
//     age: number;
//     address: {
//         calle: string;
//         pais: string;
//         ciudad: string;
//     };
//     showAddress(): string;
// }

//2. Segunda forma de hacerlo 

 interface superHeroe 
 {
     name: string;
     age: number;
     address: Address;
     showAddress:() => string;
 }

 interface Address
 {
    street: string;
    Country: string;
    city: string;
 }

const superHeroe: superHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        Country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.Country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {}