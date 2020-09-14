const firstValue = process.argv[2];
const secondValue = process.argv[3];
if (firstValue.toUpperCase() > secondValue.toUpperCase()) {
    console.log("1")
}
else if (firstValue.toUpperCase() === secondValue.toUpperCase()) {
    console.log("0")
}
else {console.log('-1')}
