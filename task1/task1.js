function defaultArguments(f, numbers) {
    console.log(arguments)
    // console.log(f(3,4))
    
    let numB = numbers.b
    let number = arguments[2]
    console.log(numB, number)

    return f(numB, number)
};

function add(a, b) {
    return a + b;
};

const add2 = (number) => defaultArguments(add, { b: 9 }, number);
console.assert(add2(10) === 19);
console.assert(add2(10, 7) === 17);
console.assert(isNaN(add2()));

const add3 = defaultArguments(add2, { b: 3, a: 2 });
console.assert(add3(10) === 13);
console.assert(add3() === 5);
console.assert(add3(undefined, 10) === 12);

const add4 = defaultArguments(add, { c: 3 }); // doesn't do anything, since c isn't
console.assert(isNaN(add4(10)));
console.assert(add4(10, 10) === 20);