// Функции
// Привет. Вам нужно оформить ваше прошлое задание в виде функции,
// которая умеет принимать аргументы.

// И еще) У вас есть функция)
// function f (a, b, c) {
//
//     function sum (a, b) {
//         return a + b;
//     }
// }
//
// Перепишите её следующим образом:
//
//1. Если аргументы a и b не переданы, они равны по
// умолчанию 2 и 3 соответсвенно.
//
// 2. Если аргумент c передан и он является функцией,
// то он выполняется вместо вызова функции sum.
//
// 3. Функция f должна возвращать результат
// функции аргумента c, если он есть, либо результат функции sum.

var height = +prompt("Enter number", '');
function triangle(height) {
    var stars = '';
    for (var i = 0; i<=height; i++){
        for (var j = 0; j<i; j++) {
            stars+="*";
        }
        stars+="\n"
    }
    return stars + "\n";
}
console.log(triangle(height));

// 1. Если аргументы a и b не переданы, они равны по
// умолчанию 2 и 3 соответсвенно.
function f (a, b) {
    a = a || 2;
    b = b || 3;
    var getSum = function() {
        return a + b;
    }
    return getSum();
}
// console.log(f());

// 2. Если аргумент c передан и он является функцией,
// то он выполняется вместо вызова функции sum.

function thirdParam (a,b) {
    a = a ||2;
    b = b ||3;
    return function sum() {
        return a+b;
    }
}

function f (c) {
    return c();
}
// console.log(f(thirdParam()));

// Функция f должна возвращать результат
// функции аргумента c, если он есть, либо результат функции sum.

var cParam = function(a,b) {
    a = a ||2;
    b = b ||3;
    return function sum() {
        return a+b;
    }
};

function f (c) {
    c = c || cParam();

    var sum = function (a,b) {
        a = a ||2;
        b = b ||3;
        return a + b;
    };
    return c() || sum();
}

console.log(f());


