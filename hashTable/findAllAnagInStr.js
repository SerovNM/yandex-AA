/*
Задав две строки s и p, верните массив всех начальных индексов анаграмм p в s. Вы можете вернуть ответ в любом порядке.

Анаграмма - это слово или фраза, образованная путем перестановки букв другого слова или фразы, обычно с использованием всех исходных букв ровно один раз.



Пример 1:

Вход: s = "cbaebabacd", p = "abc".
Выход: [0,6]
Пояснения:
Подстрока с начальным индексом = 0 - это "cba", что является анаграммой "abc".
Подстрока с начальным индексом = 6 - "bac", что является анаграммой "abc".
Пример 2:

Вход: s = "abab", p = "ab".
Выход: [0,1,2]
Пояснения:
Подстрока с начальным индексом = 0 - это "ab", что является анаграммой "ab".
Подстрока с начальным индексом = 1 - "ba", которая является анаграммой "ab".
Подстрока с начальным индексом = 2 - "ab", что является анаграммой "ab".

 */

var findAnagrams = function(s, p) {

    // Создаем массив для результатов и объект для хранения символов в p.
    const output = [];
    const neededChars = {};

    // Заполняем объект, чтобы знать, сколько раз каждый символ встречается в p.
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++;
        } else neededChars[char] = 1;
    }

    // Инициализируем указатели и счетчик символов для анаграммы.
    let left = 0;
    let right = 0;
    let count = p.length;

    // Перемещаем окно по строке s.
    while (right < s.length) {

        // Если текущий символ найден в p и еще нужен, уменьшаем счетчик.
        if (neededChars[s[right]] > 0) count--;

        // Уменьшаем количество нужных символов и двигаем правый указатель.
        neededChars[s[right]]--;
        right++;

        // Если все символы анаграммы найдены, добавляем индекс начала анаграммы в массив результатов.
        if (count === 0) output.push(left);

        // Когда окно достигает размера анаграммы, начинаем двигать его вправо, восстанавливая нужные символы.
        if (right - left == p.length) {
            // Если символ, оставленный за окном, был нужным, увеличиваем счетчик.
            if (neededChars[s[left]] >= 0) count++;

            // Восстанавливаем необходимые символы, оставленные за окном.
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};
/*
Эта функция ищет все вхождения анаграмм строки p в строку s.
Она использует метод скользящего окна, где сначала подсчитывается количество каждого символа в p,
 затем окно проходит по строке s, отслеживая текущие символы.
  Когда в окне найдены все символы, встречающиеся в p,
   их индекс добавляется в выходной массив.
 */