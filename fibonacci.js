let startNo1 = 0;
let startNo2 = 1;

console.log(startNo1)
console.log(startNo2)
for (let i=0; i < maxNo; i++) {
    let fibonacciNo = startNo1 + startNo2;
    console.log(fibonacciNo);
    startNo1 = startNo2;
    startNo2 = fibonacciNo;
}

const fibonacci = (firstNo, secondNo) => {
    let result = [];
    let currNo = firstNo + secondNo;
    console.log(currNo);
    fibonacci(secondNo, currNo);
    return result;
}

console.log(startNo1);
console.log(startNo2);
fibonacci(startNo1, startNo2);

