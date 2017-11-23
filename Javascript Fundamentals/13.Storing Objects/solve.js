/*You will be given input lines, each holding information about a student: name, age and grade. The data comes in the
 following format:
 ? “{name} -&gt; {age} -&gt; {grade}”
 Store the information from the input lines into JS objects.
 Print the objects in their order of appearance, in the format:*/

function solve(arr) {
    let students = [];
    for(let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.Name = arr[i].split(' -> ')[0];
        obj.Age = arr[i].split(' -> ')[1];
        obj.Grade = arr[i].split(' -> ')[2];
        students.push(obj);
    }

    for(let i = 0; i < students.length; i++) {
        console.log('Name: ' + students[i].Name);
        console.log('Age: ' + students[i].Age);
        console.log('Grade: ' + students[i].Grade + '\n');
    }
}
