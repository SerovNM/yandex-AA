/**
 * Example 1:
 *
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 */
//Смысл в том чтобы отловить нарушение последовательности и правильно запушит
var summaryRanges = function (nums) {
    const result = []; //результирующий массив
    let start = nums[0]; // берем первый элемент массива

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) continue;// если элемент +1 === текущему элементу, то пропускаем

        if (start === nums[i - 1]) {//если предыдущая закономерность не соблюдена просто пушим элемент без стрелки
            result.push(`${start}`);
        } else {
            result.push(`${start}->${nums[i - 1]}`); //иначе добавляем со стрелкой
        }
        start = nums[i]; // в любом случае начало двигается на текущий элемент
    }

    return result;
};
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

//АЛЬТЕРНАТИВНО
var summaryRanges2 = function (nums) {
    let result =[];
    let start = nums[0];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] + 1 !== nums[i]){
            start === nums[i - 1]? result.push(`${start}`) : result.push(`${start}->${nums[i - 1]}`);
            start = nums[i];
        }
    }
    return result
}
