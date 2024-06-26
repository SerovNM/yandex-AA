/**
 * Даны два неотрицательных целых числа, представленные в виде связных списков,
 * где каждый узел содержит одну цифру. Цифры записаны в обратном порядке,
 * так что разряд единицы находится в начале списка. Необходимо сложить два числа и вернуть
 * результат в виде связного списка.

 * Пример:
 *
 * Ввод:
 *
 * l1 = 2 -> 4 -> 3
 * l2 = 5 -> 6 -> 4
 * Вывод:
 *
 * 7 -> 0 -> 8
 * Объяснение:
 *
 * 342 + 465 = 807

 */

var AddTwoNumbers = function(l1,l2){
    let head = new ListNode(); //создаем новый связный список в который сложим значения
    let tail = head; //хвост становится головой (хвост начинается с головы)
    let amount = 0; //переменная для переноса заряда
    while (l1 || l2 || amount){ //пока существуют ноды или есть перенос заряда
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + amount; //сумма всего

        tail.next = new ListNode(sum%10); //значение будущего узла без десятков
        tail = tail.next; //двигаемся на один вперед

        amount = Math.floor(sum/10) //вычисляем сколько уйдет в слнедующий узел

        l1 = l1 && l1.next; // переходим на следующий узел
        l2 = l2 && l2.next //и тут
    }
    return head.next
}
