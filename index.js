const prompt = require('prompt-sync')();
const inputArray = [];
var size = prompt('Size: ');
var k = prompt('No. of sub arrays: ');
let i = 0;
let tempArr = [];
let cost = 0;

for(i=0; i<size; i++) {
    inputArray[i] = prompt('Enter Element ');
}
for(i=0 ; i<(size-1); i++) {
    tempArr[i] = (inputArray[i+1]*inputArray[i+1]) - (inputArray[i]*inputArray[i]);
}
tempArr.sort(function(a, b){return a - b});

cost = (inputArray[size-1]*inputArray[size-1]) - (inputArray[0]*inputArray[0]);

for(i = (size - 2); i > (size - k -1); i--) {
    cost -= tempArr[i];
}

console.log('Cost: ',cost);
return;