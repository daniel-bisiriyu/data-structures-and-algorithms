const findLowest = (arr) => {
    let lowest = arr[0];
    for (let element of arr) {
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest
}