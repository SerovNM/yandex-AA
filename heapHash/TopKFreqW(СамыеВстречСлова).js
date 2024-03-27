/*
Example 1:

Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
 with the number of occurrence being 4, 3, 2 and 1 respectively.
 */
var topKFrequent = function(words, k) {
    let map = new Map;
    for(let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) || 0) + 1);
    }
    const arrMap = Array.from(map).sort((a, b) => {
        if (a[1] === b[1]) { // Если частоты слов равны
            return a[0].localeCompare(b[0]); // Сортируем их по алфавиту
        }
        return b[1] - a[1]; // Сортируем по убыванию частоты
    }).map((item) => item[0]);
    return arrMap.slice(0, k);
};
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"],4))
