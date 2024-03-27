class Solution {
    // Метод для поиска всех путей в бинарном дереве, сумма значений которых равна заданному числу
    pathSum(root, targetSum) {
        // Инициализация массива для хранения результатов
        let result = [];
        // Инициализация массива для хранения текущего пути
        let currentPath = [];
        // Вызов метода dfs для начала обхода дерева
        this.dfs(root, targetSum, currentPath, result);
        // Возврат результатов
        return result;
    }

    // Метод обхода дерева в глубину
    dfs(node, targetSum, currentPath, result) {
        // Если текущий узел пуст, прекращаем обход
        if (!node) return;

        // Добавление значения текущего узла в текущий путь
        currentPath.push(node.val);

        // Если узел является листом и сумма его значения равна целевой сумме, добавляем путь в результаты
        if (!node.left && !node.right && targetSum === node.val)
            result.push([...currentPath]);

        // Рекурсивный вызов для левого поддерева с обновленной целевой суммой
        this.dfs(node.left, targetSum - node.val, currentPath, result);
        // Рекурсивный вызов для правого поддерева с обновленной целевой суммой
        this.dfs(node.right, targetSum - node.val, currentPath, result);

        // Удаление последнего элемента из текущего пути после завершения обхода поддерева
        currentPath.pop();
    }
}
