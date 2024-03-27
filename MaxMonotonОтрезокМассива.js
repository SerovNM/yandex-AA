/**
 * Дан массив целых чисел. Найти длину максимального строго монотонного
 * (то есть либо возрастающего, либо убывающего) отрезка в этом массиве.
 *
 * Пример:
 *
 * makefile
 * Copy code
 * Input: [9, 4, 2, 10, 7, 8, 8, 1, 9]
 * Output: 5
 * Explanation: Один из длинных строго монотонных отрезков - [4, 2, 1, 9].
 */
function maxLengthOfMonotonicSubarray(nums) {
    let increasing = 1; //длина возврастающего
    let decreasing = 1; //длина убывающего
    let maxLength; //максимальная длина
    let arr =[];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) { //если возврастает
            increasing++; //к возрастающему прибавляем один
            arr.push(decreasing)
            decreasing = 1; //и убывающему сбрасываем на единицу
        } else if (nums[i] < nums[i - 1]) {
            decreasing++; //иначе к убывающему прибавляем один
            arr.push(increasing)
            increasing = 1; //и возврастающему сбрасываем на единицу
        }

        maxLength = Math.max(...arr); //потом находим максимальную длину
    }

    return maxLength;
}

// Пример использования:
const nums = [9, 4, 2, 10, 7, 8, 8, 1, 9];
console.log(maxLengthOfMonotonicSubarray(nums)); // Вывод: 3
