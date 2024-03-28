//просто обходим дерево и считаем глубину
function maxDepth(root) {
    if (root === null) {
        return 0; // Если дерево пустое, глубина равна 0
    } else {
        let leftDepth = maxDepth(root.left); // Глубина левого поддерева
        let rightDepth = maxDepth(root.right); // Глубина правого поддерева
        return Math.max(leftDepth, rightDepth) + 1; // Максимальная глубина равна максимальной из глубин поддеревьев + 1 (текущий узел)
    }
}
//сумма всех значений
function sumOfBinaryTree(root) {
    if (root === null) {
        return 0; // Если дерево пустое, возвращаем 0
    }

    // Сумма узла равна его значению плюс сумме его левого и правого поддеревьев
    return root.value + sumOfBinaryTree(root.left) + sumOfBinaryTree(root.right);
}
