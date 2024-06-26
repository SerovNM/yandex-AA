/**
 *
 * Дан целочисленный массив nums, отсортированный по возрастанию (с уникальными значениями).
 *
 * Перед передачей в вашу функцию, nums возможно повернут в неизвестном индексе k
 * (1 <= k < длины массива nums), так что полученный массив выглядит как [nums[k], nums[k+1], ..., nums[n-1],
 * nums[0], nums[1], ..., nums[k-1]] (индексация с 0). Например, [0,1,2,4,5,6,7] может быть повернут в
 * индексе 3 и превратиться в [4,5,6,7,0,1,2].
 *
 * Учитывая массив nums после возможного поворота и целое число target,
 * верните индекс target в nums, если оно есть в массиве, или -1, если его нет.
 *
 * Ваш алгоритм должен иметь сложность O(log n) по времени выполнения.
 *
 * Примеры:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 *
 * Input: nums = [1], target = 0
 * Output: -1
 *
 *
 *
 *
 * Этот алгоритм использует модифицированный бинарный поиск для поиска целевого
 * элемента в отсортированном массиве, который может быть повернут.
 * Основная идея заключается в том, чтобы определить, в какой части массива находится целевой элемент,
 * и сужать диапазон поиска.
 */

/**
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) { // Если средний элемент равен целевому значению, возвращаем его индекс
            return mid;
        }

        if (nums[low] <= nums[mid]) { // Если левая часть отсортирована
            if (nums[low] <= target && target < nums[mid]) { // Если целевое значение находится в отсортированной части слева
                high = mid - 1; // Сужаем область поиска
            } else {
                low = mid + 1; // Иначе ищем в другой части
            }
        } else { // Если правая часть отсортирована
            if (nums[mid] < target && target <= nums[high]) { // Если целевое значение находится в отсортированной части справа
                low = mid + 1; // Сужаем область поиска
            } else {
                high = mid - 1; // Иначе ищем в другой части
            }
        }
    }

    return -1; // Если целевое значение не найдено, возвращаем -1
};
/**
 *  На каждом шаге алгоритм проверяет,
 *  в какой части массива находится целевое значение относительно текущего среднего элемента.
 *  Если массив отсортирован и вращен, то хоть его конечный элемент и меньше начального,
 *  но часть отсортированного порядка все равно сохраняется. Основная идея -
 *  определить в какой части массива находится целевое значение и перераспределить границы поиска
 *  в соответствии с этим.
 */
