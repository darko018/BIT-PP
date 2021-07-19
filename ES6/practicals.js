            //  ------------------------------ EXCERCISES ------------------------------  \\



// 1.Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']


const strings = ['hello', 'there', 'ES', 6];

const capitalize = (...arr) => {
    return strings.filter ( item => typeof item === 'string')
    .map(item => item[0].toUpperCase() + item.slice(1))
}
console.log(capitalize(strings));



// 2.Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only


const products = [{ name: "Banana", price: 120.23}, { name: "Orange", price: 100}]
 
const productsWithTax = products.map(product => {
 
    const { price: prodPrice } = product;
 
    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }
    return newProd
})
console.log(products);
console.log(productsWithTax);



	
// 3.Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]


const arr = [4, 6, 11, -9, 2.1];

const newArr = (array, ele) => {
    if(!ele) {
        let omitedArr = array.map (e =>{
            return e + 1;
        })
    return omitedArr;
    } else {
        let increaseArr = array.map (e =>{
            return e + ele;
        })
        return increaseArr;
    }
} 
console.log(newArr(arr,2));
console.log(newArr(arr));



// 4.Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


const filterAllEven = array => array.filter(element => element % 2 === 0);

console.log(filterAllEven([6, 11, 9, 0, 3]));



// 5.Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']


const filterAllStringsContainingJS = array => {
    let result = [];
    array.forEach(element => {
        if (element.includes("js") || element.includes("JS")) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterAllStringsContainingJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));



// 6.Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]


let arr = [1.6, 11.34, 9.23, 7, 3.11, 8];

let integerArr = arr.filter(element =>{
    return (Number.isInteger(element))
})
console.log(integerArr);



// 7.Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]
	

const filterIntegerContaining5 = array => {
    let result = [];
    array.forEach(element => {
        if (element.toString().includes("5") && parseInt(element) === element) {
            result.push(element);
        }
    });
    return result;
}
console.log(filterIntegerContaining5([23, 11.5, 9, 'abc', 45, 28, 553]));



// 8.Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5


const returnIndexesIfGreaterThan10 = array => {
    let result = [];
    array.forEach(element => {
        if (element > 10) {
            result.push(array.indexOf(element));
        }
    });
    return result;
}
console.log(returnIndexesIfGreaterThan10([1.6, 11.34, 29.23, 7, 3.11, 18]));



// 9.Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// b.Write a function that prints out the names of persons older than 25. 
// c.Write a function that check if there is a person older than 40.
// d.Write a function that checks if all persons are older than 20.   

 
// a.
const arrObj = [
    {name: "Lena", age: 9},
    {name: "Lazar", age: 13},
    {name: "Jasmina", age: 39},
    {name: "Darko", age: 42}    
];

let personOlderThan25 = arr => {
    let olderPerson = "";
    for (let i = 0; i < arr.length; i++){
        if(arr[i].age > 25){
            olderPerson += `${arr[i].name}, `
        }
    }
    return olderPerson;
}
console.log(personOlderThan25(arrObj));


// b.
const arrObj = [
    {name: "Lena", age: 9},
    {name: "Lazar", age: 13},
    {name: "Jasmina", age: 39},
    {name: "Darko", age: 42}    
];

let personOlderThan40 = arr => {
    let olderPerson = "";
    for (let i = 0; i < arr.length; i++){
        if(arr[i].age > 40){
            olderPerson += `${arr[i].name}, `
        }
    }
    return olderPerson;
}
console.log(personOlderThan40(arrObj));


// c.
const arrObj = [
    {name: "Lena", age: 9},
    {name: "Lazar", age: 13},
    {name: "Jasmina", age: 39},
    {name: "Darko", age: 42}    
];

let checkAllPersons = arr =>{
    let older = arr.filter(person => {
        if(person.age > 20) {
            return true;
        }
    })
    older.forEach(ele => {
        console.log(ele.name);
    })
}
console.log(checkAllPersons(arrObj));




// 10.Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

// 	Input: [3, -12, 4, 11]
// 	Output: no


const checkIfPositiveInteger = array => {
    //if negative is found return false (breaking loop)
    for (let element of array) {
        if (element < 0) return "no";
    }
    //if no elements are negative return true
    return "yes";
}
console.log(checkIfPositiveInteger([3, 11, 9, 5, 6]));
console.log(checkIfPositiveInteger([3, -12, 4, 11]));



// 11.Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48


const productNumbersFromArray = array => {
    let result = 1;
    array.forEach(element => {
        result *= element;
    });
    return result;
}
console.log(productNumbersFromArray([2, 8, 3]));



// 12.Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8


const findMaximum = array => Math.max(...array);

console.log(findMaximum([2, 7, 3, 8, 5.4]));