function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i]; // Текущий неотсортированный элемент
        let j = i - 1; // Позиция текущего неотсортированного элемента в массиве

        // Перемещаем отсортированные элементы вправо, чтобы вставить неотсортированный элемент
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j];
            j--;
        }

        // Вставляем неотсортированный элемент в правильную позицию
        array[j + 1] = currentElement;
    }

    return array;
}

const arr = [1, 4, 7, 2, 3, 8, 5, 6, 9, 10];
console.log(insertionSort(arr)); // Выведет отсортированный массив
