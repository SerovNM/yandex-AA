var isSymmetric = function(root) {
    // Специальный случай: если корень дерева не существует, дерево считается симметричным.
    if (!root)
        return true;
    // Рекурсивно вызываем функцию для проверки, являются ли левое и правое поддерев дерева зеркальными.
    return isSame(root.left, root.right);
};

// Дерево считается симметричным, если левое поддерево является зеркальным отражением правого поддерева.
var isSame = function (leftroot, rightroot) {
    // Если оба корневых узла равны null, возвращаем true.
    // Если ровно один из них равен null, возвращаем false.
    // Если значения корневых узлов не равны, возвращаем false.
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;
    // Возвращаем true, если значения корневых узлов равны и левое, а также правое поддерев являются симметричными.
    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};
