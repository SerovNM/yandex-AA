/*
Основная идея заключается в том, чтобы найти самую длинную подстроку,
 в которой можно заменить не более k символов так, чтобы все символы стали одинаковыми.


 Вам дана строка s и целое число k. Вы можете выбрать любой символ строки и заменить его на любой другой заглавный английский символ. Эту операцию можно выполнить не более k раз.

Верните длину самой длинной подстроки, содержащей ту же букву, которую вы можете получить после выполнения вышеуказанных операций.



Пример 1:

Вход: s = "ABAB", k = 2
Выход: 4
Пояснения: Замените два "A" на два "B" или наоборот.
Пример 2:

Вход: s = "AABABBA", k = 1
Выход: 4
Пояснения: Заменим одну букву "A" в середине на "B" и получим "AABBBBA".
Подстрока "BBBB" имеет самую длинную повторяющуюся букву, которая равна 4.
Могут существовать и другие способы получить этот ответ.

 */
var characterReplacement = function(s, k) {
    var map = {}; // Создаем объект для отображения частоты символов.
    let maxCount = 0 // Переменная для отслеживания максимальной частоты символов в текущем окне.
    let start = 0 // Индекс начала текущего окна.
    let res = 0; // Переменная для хранения результата - максимальной длины подстроки.

    for (let end = 0; end < s.length; end++) {
        // Подсчитываем символы в текущем окне
        const c = s[end];
        map[c] = (map[c] || 0) + 1;

        // Обновляем максимальную частоту символов в текущем окне
        maxCount = Math.max(maxCount, map[c]);

        // Если максимальная частота символа в окне плюс расстояние между началом и концом окна
        // больше k, значит, мы рассмотрели замену более чем k символов. Время уменьшить окно.
        if (end - start + 1 - maxCount > k) {
            map[s[start]] -= 1; // Уменьшаем частоту символа в начале окна.
            start++; // Сдвигаем начало окна вправо.
        }
        res = Math.max(res, end - start + 1); // Обновляем длину текущей подстроки.
    }
    return res; // Возвращаем максимальную длину подстроки.

};
/*
Мы используем переменные start и end для определения текущего окна в строке.
В каждой итерации цикла for мы обновляем частоту каждого символа в текущем окне, используя объект map.
Затем мы вычисляем максимальную частоту символов в текущем окне и проверяем, не превышает ли количество замен k допустимое количество символов.
Если количество символов, которые мы можем заменить, превышает k, мы сдвигаем начало окна вправо, чтобы уменьшить его размер.
В конце каждой итерации мы обновляем значение res, чтобы хранить длину наибольшей подстроки с одинаковыми символами.
По завершении цикла возвращаем значение res, которое представляет собой длину наибольшей подстроки, в которой можно сделать не более k замен.


 */
