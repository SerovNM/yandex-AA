/**
 * Если даны две строки s и t, верните true, если t является анаграммой s, и false в противном случае.
 *
 * Анаграмма - это слово или фраза, образованная путем перестановки букв другого слова или фразы, обычно с использованием всех исходных букв ровно один раз.
 *
 *
 *
 * Пример 1:
 *
 * Вход: s = "anagram", t = "nagaram".
 * Выход: true
 * Пример 2:
 *
 * Вход: s = "крыса", t = "автомобиль"
 * Выход: false
 */

//ТУПОЙ ВАРИАНТ
var isAnagram = function(s, t) {
    return s.split('').sort().join('')===t.split('').sort().join('')
};

//НОРМ ВАРИАНТ

var isAnagram2 = function(s, t) {
    if(s.length!==t.length) return false

    const map = new Map()

    for (const letter of s){
        map.set(letter, (map.get(letter) || 0) + 1)
    }

    for (let i = 0; i < t.length; i++) {
        // Если символа нет или его количество становится нулевым, это не анаграмма
        if (!map.has(t[i]) || map.get(t[i]) === 0) {
            return false;
        } else {
            // Уменьшаем количество символа в карте на 1
            map.set(t[i], map.get(t[i]) - 1);
        }
    }
return true
}
