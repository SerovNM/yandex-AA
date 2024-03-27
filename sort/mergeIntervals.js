/*
Если задан массив интервалов, где intervals[i] = [starti, endi], объединить все пересекающиеся интервалы и вернуть массив непересекающихся интервалов, которые покрывают все интервалы на входе.



Пример 1:

Вход: intervals = [[1,3],[2,6],[8,10],[15,18]]
Выход: [[1,6],[8,10],[15,18]]
Пояснение: Поскольку интервалы [1,3] и [2,6] пересекаются, объедините их в [1,6].
Пример 2:

Вход: intervals = [[1,4],[4,5]]
Выход: [[1,5]]
Пояснения: Интервалы [1,4] и [4,5] считаются перекрывающимися.
 */

var merge = function(intervals) {
    // Сортируем интервалы по начальным значениям
    intervals.sort((a,b) => a[0] - b[0]);
    let merged = [], len = 0;
    // Создаем массив для объединенных интервалов и переменную для отслеживания их количества
    // Начальное значение массива merged пустое, len равно 0

    // Проходим по каждому интервалу
    for(let i of intervals){
        // Если массив объединенных интервалов не пуст и последний интервал в нем пересекается с текущим интервалом
        if(merged.length > 0 && merged[len-1][1] >= i[0]){
            // Обновляем верхнюю границу последнего объединенного интервала, если текущий интервал пересекается с ним
            merged[len-1][1] = Math.max(merged[len-1][1], i[1]);
        }else{
            // Если текущий интервал не пересекается с последним объединенным интервалом, добавляем его в массив объединенных интервалов
            merged.push(i);
            len++;
        }
    }
    // Возвращаем объединенные интервалы
    return merged;
};/*
Если задан массив интервалов, где intervals[i] = [starti, endi], объединить все пересекающиеся интервалы и вернуть массив непересекающихся интервалов, которые покрывают все интервалы на входе.
*/
