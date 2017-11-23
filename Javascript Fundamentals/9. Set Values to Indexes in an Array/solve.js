/*You will be given N – an integer specifying the length of an array. Then you will start receiving an index and a value.
 For each received line you must set the value at the given index to the given value.
 When you’ve processed all input data, print the array’s elements each on a new line.*/

function solve(arr) {
    let n = arr.shift();
    let newArr = [];

    for (let i = 0; i < n; i++) {
        if(arr[i] !== undefined) {
            let keyValuePair = arr[i].split(' - ');
            newArr[keyValuePair[0]] = keyValuePair[1];
        }
        if(newArr[i] === undefined)
        newArr[i] = 0;
        console.log(newArr[i]);
    }

}
solve([5, '0 - 3', '3 - -6', '4 - 7']);