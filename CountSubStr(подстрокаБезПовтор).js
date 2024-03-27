/*
Найти подстроку без повторений
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
function lengthOfLongestSubstring(check) {
    let letters = check.split(""); //массив букв
    let max = 0; //максимальная длина
    let result = new Map(); //мапа для хранения

    for (let i = 0; i < letters.length; i++) {
        if (!result.has(letters[i])) { //если символа нет в мапе
            result.set(letters[i], i); //добавляем
        } else {
            i = result.get(letters[i]); // иначе двигаем i
            result.clear(); //очищаем мапу
        }

        if (max < result.size) { // если длина слова больше чем размер мапы
            max = result.size; //то длина слова эменяется на размер мапы
        }
    }
    return max;
}

// Example:
console.log(lengthOfLongestSubstring("dvdf")); // 3
