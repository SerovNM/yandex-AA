/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

 */
var topKFrequent = function(nums, k) {
    let map = new Map;
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    const arrMap = Array.from(map).sort((a, b) => {
        return b[1] - a[1]; // Сортируем по убыванию частоты
    }).map((item) => item[0]);
    return arrMap.slice(0, k);
};
