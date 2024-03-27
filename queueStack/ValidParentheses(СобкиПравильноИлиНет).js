/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

var isValid = function(s) {
    const stack = []; //создаем стек для хранения скобок
    const openBrackets = ["(", "{", "["]; //валидные левые скобки
    const chars = s.split(""); //делаем массив
    for (const char of chars) { //валидируемся по буквам
        if (openBrackets.includes(char)) { //если в открытых скобках есть такой символ
            switch (char) {
                case "(":
                    stack.push(")"); //по очереди добавляем закрывающие скобки в стек
                    break;
                case "{":
                    stack.push("}");
                    break;
                case "[":
                    stack.push("]");
                    break;
                default:
                    break;
            }
        } else { //иначе если стек пустой или последний символ не равен char облом
            if(!stack.length || stack[stack.length-1] !== char){
                return false;
            }
            stack.pop(); //каждую итерацию вытаскиваем последний символ
        }
    }
    return !stack.length; //если длина ноль те стек пустой то вернется тру
};

console.log(isValid('()[]{}'))
