const myFunc1 = function () {
    let a = 1;
    let b = 2;
    let result = a + b;
    return result;
}
let result = myFunc1();

console.log(result);

const myFunc2 = function (a = 0, b = 0) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result = a + b;
    return result;
}

result = myFunc2(10, 15);
console.log(result);

result = myFunc2(10);
console.log(result);


result = myFunc2(10, 15, 20);
console.log(result);

result = myFunc2('10', '15', '20');
console.log(result);

result = myFunc2('12.5см', '16.8');
console.log(result);

const myFunc3 = function (a = 0, b = 0) {
    /* a = parseFloat(a);
    b = parseFloat(b);*/
    let result;
    if (typeof a === 'number' && typeof b === 'number') {
        result= a + b;
     
    }
    else {
    result = 'Вы ввели не числовое значение';
        
    }
    return result
}

result = myFunc3('djfsdjf', 'dfsfs');
console.log(result);

result = myFunc4(4, 3);

function myFunc4(x, y) {
    return x*y
}


console.log(result);


const myFunc5 = (a, b) => {
    return a ** b;
}

result = myFunc5(4, 3);
console.log(result);