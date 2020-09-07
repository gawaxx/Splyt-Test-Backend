function defaultArguments(f, numbers, numberArg) {
    console.log(arguments)
    // console.log(f(3,4))
    
    let numA = numbers.a
    let numB = numbers.b
    let numC = numbers.c
    
    console.log(numB, numberArg, numA, numC)
    console.log('\n', '\n', '\n')

    return f(numB, numberArg)
};

function add(a, b) {
    return a + b;
};

const add2 = (number) => defaultArguments(add, { b: 9 }, number);
console.assert(add2(10) === 19);
console.assert(add2(10, 7) === 17);
console.assert(isNaN(add2()));

const add3 = (number) => defaultArguments(add2, { b: 3, a: 2 }, number);
console.assert(add3(10) === 13);
console.assert(add3() === 5);
console.assert(add3(undefined, 10) === 12);

const add4 = (number) => defaultArguments(add, { c: 3 }); 
console.assert(isNaN(add4(10)));
console.assert(add4(10, 10) === 20);