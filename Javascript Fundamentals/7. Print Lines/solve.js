/*You will be, continuously, given input lines, until you receive the command “Stop”. Print each of those lines at the
 moment you read them, until you reach the ending command. Do NOT print the ending command.*/

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Stop')
        return;
        else console.log(arr[i]);
    }
}