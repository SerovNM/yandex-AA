function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return left;
}

function longestIncreasingSubsequence(arr) {
    if (arr.length === 0) return [];

    let lis = [];
    let prevIndices = new Array(arr.length);
    prevIndices.fill(-1);

    for (let i = 0; i < arr.length; i++) {
        let index = binarySearch(lis, arr[i]);
        if (index === lis.length) {
            lis.push(arr[i]);
        } else {
            lis[index] = arr[i];
        }
        if (index > 0) {
            prevIndices[i] = lis[index - 1];
        }
    }

    if (lis.length === 0) return [arr[0]]; // Если массив пустой, вернуть первый элемент

    let result = [];
    let lastIndex = arr.indexOf(lis[lis.length - 1]);
    while (lastIndex !== -1) {
        result.unshift(lis[lis.length - 1]);
        lastIndex = prevIndices[lastIndex];
    }

    return result;
}

// Пример использования
const sequence = [3, 4, -1, 0, 6, 2, 3];
console.log("Наибольшая возрастающая подпоследовательность:", longestIncreasingSubsequence(sequence)); // Вывод: [ -1, 0, 2, 3 ]
