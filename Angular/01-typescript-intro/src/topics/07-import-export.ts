 import {Product, taxCalculation} from './06-function-destructuring'
 
 const shoppingCart: Product[] = [ 
 {
    description: 'Nokia',
    price:
    {
        value: 100,
        currency: 'EUR'
    }
 },
 
 {
    description: 'Nokia',
    price:
    {
        value: 150,
        currency: 'EUR'
    }
 }
];
 

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});

//imprime en consola
console.log('Total ', total);
console.log('Tax ', taxTotal);
 
 export {}