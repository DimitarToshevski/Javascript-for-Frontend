/*You will be given input lines (text) holding object data in JSON format. Use the JSON.parse(str) function to
 parse the data into JavaScript objects, and then print them as shown in the examples.*/

function solve(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log('Name: ' + JSON.parse(arr[i]).name);
        console.log('Age: ' + JSON.parse(arr[i]).age);
        console.log('Date: ' + JSON.parse(arr[i]).date + '\n');
    }
}

let obj = [`{"name":"Gosho","age":10,"date":"19/06/2005"}`,
           `{"name":"Tosho","age":11,"date":"04/04/2005"}`];

solve(obj);