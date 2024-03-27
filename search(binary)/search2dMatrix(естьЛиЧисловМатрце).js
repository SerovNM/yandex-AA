/**
 * нужно проверить есть ли число в матрице
 */

var searchMatrix = function(matrix, target) {
    let flatMatrix = matrix.flat();
    let start =0;
    let end = flatMatrix.length - 1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(target === flatMatrix[mid]){
            return true
        }
        if(target<flatMatrix[mid]){
            end = mid -1
        }
        if(target>flatMatrix[mid]){
            start = mid + 1
        }
    }
    return false
};

