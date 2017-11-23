/*You are given a number X, Y and Z.
 Create a JS function that finds if X * Y * Z (the product) is negative or positive.
 Try to do this WITHOUT multiplying the 3 numbers.*/

function solve(arr) {
    let br = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) == 0) {
            console.log('POSITIVE');
            return;
        }
        if (Number(arr[i]) < 0) {
            br++;
        }
    }
    if (br % 2 == 0) {
        console.log('POSITIVE');
    } else {
        console.log('NEGATIVE');
    }
}