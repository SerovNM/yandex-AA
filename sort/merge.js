const mergeSort = arr => {
    // Если массив содержит один элемент или пуст, он считается отсортированным
    if (arr.length <= 1) return arr;

    // Функция merge для слияния двух отсортированных массивов
    const merge = (left, right) => {
        let result = [];
        // Пока есть элементы в обоих массивах
        while (left.length && right.length) {
            // Выбираем минимальный элемент из двух массивов и добавляем его в результат
            result.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        // Добавляем оставшиеся элементы из левого и правого массивов в результат
        return [...result, ...left, ...right];
    };

    // Находим середину массива
    const middle = Math.floor(arr.length / 2);
    // Рекурсивно сортируем левую и правую половины массива
    const leftHalf = mergeSort(arr.slice(0, middle));
    const rightHalf = mergeSort(arr.slice(middle));
    // Объединяем и сортируем левую и правую половины с помощью функции merge
    return merge(leftHalf, rightHalf);
};
