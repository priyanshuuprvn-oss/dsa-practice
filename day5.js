function searchInsert(arr, target){
    let left = 0;
    let right = arr.length -1;

    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if (arr[mid]=== target){
            return mid;
        }
        if (arr[mid]<target){
            left = mid + 1;
        }
        
        else{
            right = mid -1;

         }
        }
        return left;
    }

    const numbers = [1,3,5,6];

    console.log("search 5 (Exists):", searchInsert(numbers,5));
    console.log("search 2 (Insert):", searchInsert(numbers,2));
    console.log("search 7 (Insert):", searchInsert(numbers,7));
    console.log("search 0 (Insert):", searchInsert(numbers,0));
