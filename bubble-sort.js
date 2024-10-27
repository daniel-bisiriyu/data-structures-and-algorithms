const bubbleSort = (arr) => {
    const arrLength = arr.length;
    for (i =0; i<arrLength; i++) {
        console.log("outer-loop", i ,arr[i])
        let isSwapped = false;
        for (j=0; j<arrLength-i+1; j++) {
            console.log("inner-loop",j ,arr[j])
            if (arr[j] > arr[j+1]) { 
               const larger = arr[j];
               arr[j] = arr[j+1];          
               arr[j+1] = larger;
               isSwapped = true;
            }
        }
        if (!isSwapped) {
            break
        }
    }
    return arr
}