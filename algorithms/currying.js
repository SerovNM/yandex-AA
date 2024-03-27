function curry(fun, ...args) {
    if (args.length >= fun.length) {
        return fun(...args);
    } else {
        return function (...args2) {
            return curry(fun, ...args, ...args2);
        };
    }
}

function add(a, b) {
    return a + b;
}

console.log(curry(add)(4)(7)(7)); // 11
