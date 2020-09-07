function defaultArguments(f, givenNumbers, inputNumbers) {
    console.log('\n', '\n', '\n')
    console.log(arguments)
        
    let a = givenNumbers.a
    let b = givenNumbers.b
    let c = givenNumbers.c

    
    // console.log(a, b, c, A, B)
    console.log(inputNumbers.length > 0)
    console.log(Object.keys(givenNumbers).length > 0)

    if ( !(Object.keys(givenNumbers).length > 0) ) {
        if ( !(inputNumbers > 0) ) {
            return NaN
        }
    }

    // if (!a) {
    //     if (!b) {
    //         if (!c) {
    //             if (!A) {
    //                 if (!B) {
    //                     return NaN
    //                 }
    //                 return NaN
    //             }
    //             if (!B) {
    //                 return 'hey'
    //             }
    //             return f(A+B)
    //         }
    //     }
    // }

    

    // if (A === undefined && B === undefined && Object.keys(numbers).length <= 1) {
    //     console.log('HERE')
    //     return NaN
    // }

    // if (A && B !== undefined) {
    //     console.log('NO HERE')
    //     return f(A + B)
    // }
    // if (A && B === undefined && Object.keys(numbers).length >= 2) {
    //     console.log('NO NO HERE')
    //     return f(a+numC)
    // }
    
    // else {
    //     console.log('NO NO NO HERE')
    //     return f(numB, A)
    // }
};

function add(a, b) {
    return a + b;
};

const add2 = (...inputNumbers) => defaultArguments(add, { b: 9 }, inputNumbers);
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