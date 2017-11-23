function solve(arr) {
    let inputKey = arr.pop().toString();
    let foundKey = 'None';
    for(let i=0; i<=arr.length-1;i++){
        if(arr[i].includes(inputKey))
            foundKey = arr[i].split(' ')[1];
    }
    console.log(foundKey);
}
let arr = ['key value', 'key eulav', 'text txet', 'key'];
solve(arr);

/*You will be given input lines, each holding two elements separated by a space. The first is the key and the second is
 the value.
 Your task is to store the value for each key. If a key already exists, you need to replace the old value with the new
 one. At the last line of input, you will receive a key.
 Print the value corresponding to that key. If there is no such, print “None”.*/