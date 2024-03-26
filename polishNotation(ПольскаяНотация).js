//Вычисление обратной польской нотации
//Смысл в том, что в обратной польской нотации сначала записываются числа, а потом операторы и далее
//операция совершается
//преимущество - не нужны скобки для записи приоритета опраций
var evalRPN = function(tokens) {
    const stack = []; //в стек будем добавлять
    //эта функция проверяет, является ли строка оператором
    const isOperator = (str) => {
        return str === "+" || str === "-" || str === "*" || str === "/";
    };
    //проитерируемся по всем элементам массива tokens
    for (const token of tokens) {
        //если элемент является оператором, то вычисляем результат
        if (isOperator(token)) {
            const ele2 = parseInt(stack.pop()); //вытаскиваем из стека последний элемент
            const ele1 = parseInt(stack.pop()); //вытаскиваем из стека предпоследний элемент
            let result = 0; //переменная, в которую будем записывать результат вычислений
            switch (token){
                case "+":
                    result = ele1 + ele2;
                    break;
                case "-":
                    result = ele1 - ele2;
                    break;
                case "*":
                    result = ele1 * ele2;
                    break;
                case '/':
                    result = Math.trunc(ele1 / ele2);
                    break;
                    default:
                        break
            }
            stack.push(result.toString()); //в стек добавляем результат
        } else {
            stack.push(token); //если элемент не является оператором, то добавляем его в стек
        }
    }

    return parseInt(stack.pop()); //возвращаем последний элемент стека
};
console.log(evalRPN(["2","1","+","3","*"]))
