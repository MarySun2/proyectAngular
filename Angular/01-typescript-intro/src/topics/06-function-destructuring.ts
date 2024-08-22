// impuesto sobre la renta de los productos

// Interface
interface Product 
{
    description: string;
    price: Price;
}

interface Price
{
    value: number;
    currency: string;
}
// objetos
const phone: Product =
{
    description: 'Nokia A1',
    price: 
    {
        value: 150.0,
        currency: 'EUR'
    }
}

const tablet: Product =
{
    description: 'Nokia A1',
    price: 
    {
        value: 250.0,
        currency: 'EUR'
    }
}
//Array
const shoppingCart = [phone, tablet];

const tax = 0.15;

// interface personalizada para la funcion
interface TaxCalculationsOptions
{
    tax: number;
    products: Product[];
}


//funciones
//function taxCalculation(options: TaxCalculationsOptions): [number, number] {
//function taxCalculation({tax, products}: TaxCalculationsOptions): [number, number] {
function taxCalculation(options: TaxCalculationsOptions): [number, number] {

    const {tax, products} = options; // para desestructurar esto

    let total = 0;
    
    // options.products.forEach(product => {
    //     total += product.price.value;
    // });

    //otra forma de hacerlo destructurando
    products.forEach(({price})=> {
        total += price.value;
    });

    // Resultado en un array con [total, totalConImpuesto]
    return [total, total * tax];
}

//Resultado
// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// });

//imprime en consola
// console.log('Total', result[0]);
// console.log('Tax', result[1]);

//Resultado Restructuracion

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

//imprime en consola
console.log('Total ', total);
console.log('Tax ', taxTotal);

export {}