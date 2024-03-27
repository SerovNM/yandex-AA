var isSameTree = function(p, q) {
    // Базовый случай: если оба дерева пусты, они идентичны.
    if (p === null && q === null) {
        return true;
    }

    // Если одно из деревьев пусто, а другое нет, они не идентичны.
    if (p === null || q === null) {
        return false;
    }

    // Сравниваем значения текущих узлов.
    if (p.val !== q.val) {
        return false;
    }

    // Рекурсивно проверяем левые и правые поддеревья.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
