let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let output = '';

for(let i=num;i>=1;i--){
    output = output + i +"\n"
}
console.log(output);