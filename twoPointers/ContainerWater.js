/*
Дано целое число height длины n. Проведено n вертикальных линий так, что две конечные точки i-й линии - (i, 0) и (i, height[i]).

Найдите две прямые, которые вместе с осью x образуют контейнер, содержащий наибольшее количество воды.

Верните максимальное количество воды, которое может вместить контейнер.

Обратите внимание, что контейнер нельзя наклонять.



Пример 1:


Вход: height = [1,8,6,2,5,4,8,3,7]
Выходные данные: 49
Пояснения: Вышеуказанные вертикальные линии представлены массивом [1,8,6,2,5,4,8,3,7]. В данном случае максимальная площадь воды (синяя часть), которую может вместить контейнер, равна 49.
Пример 2:

Вход: height = [1,1]
Выход: 1
 */

var maxArea = function(height) {
    // Инициализация переменных для максимальной площади, левого и правого указателей
    let maxArea = 0; // Переменная для хранения максимальной площади контейнера
    let left = 0; // Левый указатель, начинающийся с края массива height
    let right = height.length - 1; // Правый указатель, начинающийся с другого края массива height

    // Пока левый указатель меньше правого
    while (left < right) {
        // Вычисление текущей площади и обновление максимальной площади
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]));
        // Расчет текущей площади контейнера: разница в индексах умножается на минимальную высоту стенки

        // Сдвигаем левый или правый указатель в сторону большей высоты
        if (height[left] < height[right]) {
            left++; // Увеличиваем левый указатель, если высота стенки слева меньше
        } else {
            right--; // Уменьшаем правый указатель, если высота стенки справа меньше
        }
    }

    // Возвращаем максимальную площадь
    return maxArea; // Возвращаем максимальную площадь, когда левый и правый указатели встречаются
};
/*
Использование двух указателей позволяет нам эффективно итерироваться по массиву
 и решать задачи, связанные с подзадачами, требующими сравнения двух элементов
 или работу с двумя частями массива одновременно.

В случае задачи с контейнером с наибольшим объемом, два указателя, начинающиеся
 с краев массива, позволяют нам рассматривать пары стенок контейнера.
 По мере продвижения указателей к центру массива мы вычисляем площадь текущего контейнера
  и обновляем максимальную площадь, если текущая площадь больше.
 */
