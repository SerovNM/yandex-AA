var guessNumber = function(n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2); //находим серидину
        const guess = this.guess(mid); //передаем середину в функцию guess
        if (guess === 0) { //если она вернула ноль то мы нашли ответ
            return mid;
        } else if (guess === -1) { //если -1 то число меньше
            high = mid - 1;
        } else {
            low = mid + 1; //если 1 то число больше
        }
    }
    return -1;
};
