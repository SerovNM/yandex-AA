/**
 * дано два связанных списка
 * необходимо определить есть ли внутри цикл
 */

var hasCycle = function(head) {
    let fast = head; // быстрый указатель головы
    let slow = head; // медленный указатель головы
    while (fast && fast.next) {// пока быстрый не налл и следующий быстрого не налл
        fast = fast.next?.next; // быстрый двигается на два шага
        slow = slow.next; // медленный двигается на один шаг
        if (fast === slow) return true; // если они однжды встречаются значит есть цикл
    }
    return false; // фолс если цикла нет
};
