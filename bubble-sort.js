const bubbleSort = (arr) => {
    const arrLength = arr.length;
    let isSwapped = false
    for (i =0; i<arrLength;i++) {
        
        for (j=0; j<arrLength-i+1; j++) {
            if (arr[i] > arr[i+1]) { 
                isSwapped = true
               const larger = arr[i]
               arr[i] = arr[i+1]          
               arr[i+1] = larger;
            }   
        }
    }
    console.log(arr)
    return arr
}