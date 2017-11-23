/*You will be given a sequence of commands (pairs of elements separated by a space): command and argument. You
 start by an empty array.
 ? The command “add {number}” appends the number to the array.
 ? The command “remove {index}” removes the element at the specified index. If the index is nonexistent,
 ignore that input line. When an element is deleted, all elements on the right from it, go one position left.
 When you process all input data, print the array’s elements each on a separate line.*/

function solve(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].split(' ')[0] == 'add')
        {
            newArr.push(arr[i].split(' ')[1]);
        }

        if(arr[i].split(' ')[0] == 'remove')
        {
            if(newArr[arr[i].split(' ')[1]] !== undefined)
            newArr.splice([arr[i].split(' ')[1]],1);
        }
    }
    for(let i = 0; i < newArr.length; i++)
    console.log(newArr[i]);
}