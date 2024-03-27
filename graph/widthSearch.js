// Функция, которая проверяет, является ли человек продавцом манго
function personIsSeller(person) {
    // Предположим, что продавцы манго имеют имена, оканчивающиеся на 'm'
    return person.endsWith('m');
}

// Объявление функции search с параметром name и graph
function search(name, graph) {
    // Создание пустой очереди поиска
    let searchQueue = [];
    // Добавление в очередь всех соседей человека с именем name
    searchQueue.push(...graph[name]);

    // Создание массива для отслеживания проверенных людей
    let searched = [];
    // Пока очередь поиска не пуста
    while (searchQueue.length > 0) {
        // Извлечение первого человека из очереди
        let person = searchQueue.shift();
        // Проверка, не был ли этот человек уже проверен
        if (!searched.includes(person)) {
            // Если человек - продавец, выводится сообщение и возвращается true
            if (personIsSeller(person)) {
                console.log(person + " is a mango seller!");
                return true;
            } else {
                // Если не продавец, добавляем всех его соседей в очередь поиска
                searchQueue.push(...graph[person]);
                // Помечаем человека как проверенного
                searched.push(person);
            }
        }
    }
    // Если не найден продавец манго, возвращается false
    return false;
}

// Пример графа связей между людьми
const graph = {
    "you": ["alice", "bob", "claire"],
    "bob": ["anuj", "peggy"],
    "alice": ["peggy"],
    "claire": ["thom", "jonny"],
    "anuj": [],
    "peggy": [],
    "thom": [],
    "jonny": []
};

// Вызов функции search с начальным именем "you" и графом
search("you", graph);
