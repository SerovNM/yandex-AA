function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                swapped = true;
            }
        }
    }
    return array;
}

const arr = [1, 4, 7, 2, 3, 8, 5, 6, 9, 10];
console.log(bubbleSort(arr));



function bubbleSorting(arr){
    let swapped = true;
    while(swapped){
        swapped = false
        for (let i = 1; i < arr.length; i++) {
                if(arr[i-1]>arr[i]){
                    let tmp = arr[i-1];
                    arr[i-1] = arr[i]
                    arr[i] = tmp
                    swapped = true
                }
        }
    }
    return arr
}
