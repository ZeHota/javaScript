function scan(freightItems) {
    let contrabandCount = 0
    freightItems.forEach(function (item) {
        if (item === 'contraband') {
            contrabandCount++
        }
    });
    return contrabandCount;
}
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
    console.log('Number of "contraband": ' + numItems); // should be 2