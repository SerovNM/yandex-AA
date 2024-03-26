/**
 * Дан список точек на плоскости.
 * Напишите функцию, которая возвращает true,
 * если существует прямая, отражение от которой позволит каждой точке
 * быть симметричной относительно этой прямой.
 * Input: points = [[1,1],[-1,1]]
 * Output: true
 * Explanation: Первая точка (1,1) отражается на (-1,1), относительно оси Y.
 */

//ЭТО РЕШЕНИЕ ГОВНО

//возьмем две точки на прямой и проведем между ними линию
//найдем середину этой линии по х (точка1+точка2)/2
//дальше умножим середина на 2 и вычтем одну из точек.
//если результат равен второй точке значит эта линия существует
function isReflected(points) {
    //делаем из массива точек сет и если длина у них не совпадает,
    //значит были повторряющиеся очки
    //значит решение неверное
    const set = new Set(points.map(([x, y]) => x + ':' + y));
    if (set.size !== points.length) {
        return false; // Если есть повторяющиеся точки, возвращаем false
    }

    // находим самую маленькую и самую большую точку
    //бесконечности для корректного сравнения
    let minX = Infinity;
    let maxX = -Infinity;
    for (const [x, _] of points) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
    }

    const centerX = (minX + maxX) / 2; //находим центр между двумя точками

    for (const [x, y] of points) {
        const mirroredX = centerX * 2 - x;
        if (!set.has(mirroredX + ':' + y)) {
            return false;
        }
    }

    return true;
}

// Пример использования:
const points1 = [[1,1],[-1,1]];
console.log(isReflected(points1)); // Ожидаемый результат: true

const points2 = [[1,2],[1,2]];
console.log(isReflected(points2)); // Ожидаемый результат: false
