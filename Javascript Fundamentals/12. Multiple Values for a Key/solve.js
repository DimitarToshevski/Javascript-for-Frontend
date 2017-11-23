/*You will be given input lines, each holding two elements separated by a space: a key and value. You need to store
 the given values to the given keys. At the last line of the input you will receive a key.
 Your task is to print all the values corresponding to that key. If there are no such, just print “None”.*/

function solve(arr) {
    let searchedKey = arr.pop();
    let br = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(' ')[0] === searchedKey) {
            console.log(arr[i]);
            br++
        }
    }
    if(br == 0)
    console.log('None');
}