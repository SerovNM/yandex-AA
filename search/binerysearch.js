const arr = [1,4,8,15,16,23,42];

function binarySearch(arr,value, min = 0, max = arr.length -1){
    let mid;
    while(min <= max){
        mid = Math.floor((min+max)/2)
        if(arr[mid]===value){
            return mid;
        } else if (arr[mid] < value) {
            min = mid + 1;
        } else if (arr[mid] > value) {
            max = mid - 1;
        }
    }
}

console.log(binarySearch(arr,4));
