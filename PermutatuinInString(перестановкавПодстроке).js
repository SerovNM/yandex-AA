/**
 * Задача "Permutation in String" состоит в том, чтобы определить,
 * содержится ли одна строка как перестановка символов в другой строке.
 *
 * Example 1:
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 * Example 2:
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 *
 * @param s1
 * @param s2
 * @returns {boolean}
 */

function checkInclusion(s1, s2) {
    // Создаем карту (Map) символов строки s1
    const map = new Map();
    for (let i = 0; i < s1.length; i++)
        map.set(s1[i], map.get(s1[i]) + 1 || 1);

    // Начинаем проверку окон в строке s2
    for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
        // Проверяем, что начальный и конечный символы текущего окна существуют в карте
        if (!map.has(s2[start]) || !map.has(s2[end])) continue;

        // Проверяем символы внутри окна
        let i = start;
        do {
            map.set(s2[i], map.get(s2[i]) - 1); // Уменьшаем количество символов в карте
            i++;
        } while (i <= end && map.get(s2[i])); // Пока символы не закончились в карте или не вышли за пределы окна

        // Если все символы из s1 присутствуют в текущем окне s2, возвращаем true
        if (i > end) return true;

        // Если не все символы из s1 присутствуют в текущем окне s2, восстанавливаем карту
        for (let j = start; j < i; j++)
            map.set(s2[j], map.get(s2[j]) + 1); // Увеличиваем количество символов в карте
    }

    // Если перестановка s1 не найдена в строке s2, возвращаем false
    return false;
}
