/*You will be given input lines holding information about an object in the format “key -&gt; value“. Create a JS object
 and save these keys and values in it.
 After you’ve processed all the input data, print the JSON version of the object. Use the JSON.stringify(obj)
 function.*/

function solve(arr) {
    let students = [];
    let obj = {
    "name" : arr[0].split(' -> ')[0],
    "age" : arr[1].split(' -> ')[0],
    "grade" : arr[2].split(' -> ')[0],
    "date" : arr[3].split(' -> ')[0],
    "town" : arr[4].split(' -> ')[0]
};
    console.log(JSON.stringify(obj));
}

let arr = ['name -> Angel',
    'surname -> Georgiev',
    'age - > 20',
    'grade -> 6.00',
    'date - > 23/05/1995',
    'town - > Sofia'];

solve(arr);