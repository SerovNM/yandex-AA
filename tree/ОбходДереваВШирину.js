class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sumOfBinaryTree(root) {
    if (root === null) {
        return 0; // Если дерево пустое, возвращаем 0
    }

    let sum = 0;
    let queue = []; // Создаем очередь для обхода дерева в ширину
    queue.push(root); // Добавляем корневой узел в очередь

    while (queue.length > 0) {
        let node = queue.shift(); // Извлекаем узел из очереди

        sum += node.value; // Добавляем значение текущего узла к общей сумме

        // Добавляем дочерние узлы текущего узла в очередь
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return sum;
}
