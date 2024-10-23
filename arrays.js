const findLowest = (arr) => {
    let lowest = arr[0];
    arr.forEach(element => {
        if (element < lowest) {
            lowest = element;
        }
    });
}