//Необходимо спроектировать банкомат


var ATM = function() {
    this.bankNotes = new Array(5).fill(0) //это будет массив из денег которые мы будем использовать
    this.banksNotesValue = [20, 50, 100, 200, 500] //варианты купюр
};

/**
 * @param {number[]} banknotesCount
 * @return {void}
 */
//тут кладем деньги
//подается массив в котором по индексу определено какие купюры и сколько кладём
ATM.prototype.deposit = function(banknotesCount) {
    for(let i =0; i<5; i++){
        this.bankNotes[i] += banknotesCount[i] //теперь в массиве bankNotes будет отображаться количество каждой купюры
    }
    return this.bankNotes
};

/**
 * @param {number} amount
 * @return {number[]}
 */
//тут будем снимать деньги по жадному алгоритму
ATM.prototype.withdraw = function(amount) {
    let remain = amount //тут будем хранить остаток
    let usedBankNotes = new Array(5).fill(0) //тут будем хранить количество купюр которые мы снимаем
    let temp = [...this.bankNotes] //это копия массива bankNotes
    for (let i = 4; i >= 0; i--) { //итерируемся по индексам массива bankNotes по возрастанию тк хотим чтобы сначала снимались купюры с максимальным количеством
        if (temp[i] > 0 && remain >= this.banksNotesValue[i]) { //если количество купюр больше нуля и остаток больше или равен значению купюры
            const bankNote = Math.floor(remain / this.banksNotesValue[i]) //количество самый крупных купюр которые мы хотим снять
            const maxCanUse = Math.min(temp[i], bankNote) //максимальное количество купюр которые мы можем снимать
            usedBankNotes[i] = maxCanUse //тут будем хранить количество снимаемых купюр
            temp[i] -= maxCanUse //от исходного количества купюр отнимаем количество снимаемых купюр

            remain -= maxCanUse * this.banksNotesValue[i] //вычисляем остаток: количество вычитаемое из остатка * значение купюры
        }
    }

    if (remain > 0) { //если после итерации остаток больше нуля то операция не выполнена
        return [-1]
    } else { //иначе вместо исходного массива возвращаем измененный
        this.bankNotes = temp
        return usedBankNotes
    }
};
var obj = new ATM()
obj.deposit([5, 3, 0, 0, 2])
var param_2 = obj.withdraw(600)
