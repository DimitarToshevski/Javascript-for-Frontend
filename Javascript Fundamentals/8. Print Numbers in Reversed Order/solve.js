/*You will be given a few numbers as input. You need to print them in reversed order, each on a new line.*/

function solve(arr) {
    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}