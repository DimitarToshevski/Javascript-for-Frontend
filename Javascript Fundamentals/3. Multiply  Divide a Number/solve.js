/*You are given a number N and a number X. Create a JS function that:
 Multiplies N * X if X is greater than or equal to N
 Divides N / X if N is greater than X
 The input comes as array of strings.*/

function solve(arr) {
    if(Number(arr[1])>=Number(arr[0]))
    console.log(Number(arr[1])*Number(arr[0]));
    else console.log(Number(arr[0]) / Number(arr[1]));
}