const arr = [9,8,7,6,5,4,3,2,1]
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = arr[Math.floor(arr.length/2)]; //выбираем указатель
    let midIndex = arr.indexOf(mid) //индекс указателя
    let left = []; //числа меньше указателя
    let right = []; //числа больше указателя
    for (let i = 0; i < arr.length; i++) {
        if(i === midIndex) continue //если указатель - это элемент, то пропускаем
        if(mid<arr[i]){
            right.push(arr[i]) //если элемент меньше указателя, то добавляем в правую часть
        } else{
            left.push(arr[i]) //иначе добавляем в левую часть
        }
    }
    return quickSort(left).concat(mid, quickSort(right)) //кладем указатель в массив, а затем сортируем левую и правую части
}

console.log(quickSort(arr))
