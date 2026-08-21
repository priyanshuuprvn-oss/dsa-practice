function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid;
        }

        if(arr[mid]<target){
            left = mid+1;
        }
        else{
             right = mid-1;
        }
    }
    return -1;
}

const sortedNumbers = [10,20,30,40,50,60,70,80,90];

console.log("Index of 70:", binarySearch(sortedNumbers, 70)); 
console.log("Index of 20:", binarySearch(sortedNumbers, 20)); 
console.log("Index of 99:", binarySearch(sortedNumbers, 99));