function addFirstToLast(inputArray) {
    let firstAndLast = '';
    let first = inputArray[0]
    let last = inputArray[inputArray.length - 1]
  
    // Only execute this code if the array has items in it
    if (inputArray.length > 0) {
      // Change the line below! What should it be?
      firstAndLast = first + last;
    }
  
    return firstAndLast;
  }
  console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));