function defaultArguments(f, givenNumbers, inputNumbers) {
    console.log('\n', '\n', '\n')
    console.log('start')
    console.log(arguments)
    
    let a = givenNumbers.a
    let b = givenNumbers.b
    let c = givenNumbers.c
    
    let A = inputNumbers !== undefined? inputNumbers[0] : undefined
    let B = inputNumbers !== undefined? inputNumbers[1] : undefined
    
    // console.log((!a || !b))
    console.log(!a, !b, !A, !B)
    console.log(a, b, A, B)
    console.log(inputNumbers !== undefined)
    console.log(Object.keys(givenNumbers).length > 0)

    if ( (Object.keys(givenNumbers).length > 0) || (inputNumbers !== undefined) ) {
        if (a && b) {
            console.log('a+b')
            console.log(f)
            console.log(a+b)
            return f(b, a)
        }

        if ( (A && B) ) {
            console.log('A+B')
            return f(A, B)
        }

        if (a && !b) {
            if (!A) {
                console.log('a+B')
                return f(a, B)
            }
            console.log('a+A')
            return f(a, A)
        }

        if (!a && b) {
            if (!A) {
                console.log('b+B')
                return f(b, B)
            }
            console.log('b+A')
            return f(b, A)
        }

    } else {
        console.log('NaN')
        console.log('end')
        return NaN
    }

};

function add(a, b) {
    console.log(arguments)
    console.log(a + b)
    console.log('end')
    return a + b;
};

const add2 = (...inputNumbers) => defaultArguments(add, { b: 9 }, inputNumbers);
console.assert(add2(10) === 19);
console.assert(add2(10, 7) === 17);
console.assert(isNaN(add2()));

const add3 = (...inputNumbers) => defaultArguments(add2, { b: 3, a: 2 }, inputNumbers);
console.assert(add3(10) === 13);
console.assert(add3() === 5);
console.assert(add3(undefined, 10) === 12);

const add4 = (...inputNumbers) => defaultArguments(add, { c: 3 }, inputNumbers);
console.assert(isNaN(add4(10)));
console.assert(add4(10, 10) === 20);


            // else {
            //     if (a && b) {
            //         return f(a+b)
            //     }

            //     if (a && !b ) {
            //         if (!A) {
            //             f(a+B)
            //         }
            //         f(a+A)
            //     }

            //     if (!a && b) {
            //         if (!A) {
            //             f(b+B)
            //         }
            //         f(b+A)
            //     }
            // }

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