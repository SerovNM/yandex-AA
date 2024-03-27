class LinkedNode {
    constructor(data) {
        this.data = data;
        this.prev = null; // добавляем указатель на предыдущий узел
        this.next = null;
    }
}

function reverseDoublyLinkedList(head) {
    let current = head;
    let prev = null;

    while (current) {
        let next = current.next; // сохраняем указатель на следующий узел
        current.next = prev; // меняем указатель на следующий узел на предыдущий
        current.prev = next; // меняем указатель на предыдущий узел на следующий
        prev = current;
        current = next;
    }

    return prev; // новая голова списка - последний узел, который стал первым после разворота
}
