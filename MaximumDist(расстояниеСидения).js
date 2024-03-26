//задача на нахождение максимального расстояния до ближайшего занятого места
var maxDistToClosest = function(seats) {
    let maximum = 0; //переменная для хранения самого длинного расстояния
    let left = 0; //переменная для хранения левой границы

    for (let right = 0; right < seats.length; right++) { //перебор всех мест + правая граница
        const seat = seats[right]; //сидение в текущем месте
        if (seat) { //если там единица
            const distance = right - left; //изменяем дистанцию на разницу границ
            if (!seats[left]) { //если левая граница не занята
                maximum = Math.max(maximum, distance); //если длина максимальная, то записываем ее, если нет остается старая
            } else {
                maximum = Math.max(maximum, Math.floor(distance / 2)); //если левая граница занята, то делаем ровно половину дистанции - это расстояние между сидениями
            }
            left = right; //двигаем левую границу
        } else if (right === seats.length - 1) { //если мы дошли до последнего сидения и оно не занято
            maximum = Math.max(maximum, right - left); //максимум это длина от последнего занятого сидения до конца массива
        }
    }

    return maximum;
};
