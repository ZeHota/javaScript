function calculatePower(powerSettings) {
    
    if (!Array.isArray(powerSettings) || !powerSettings.length) {
        totalPower = 0
        return totalPower
    }
    else {
    let b = powerSettings.map(num => num*2)
    let a = b.reduce((aa, bb) => aa+bb)
    let totalPower = a
    return totalPower
    }
}
const laserPower = calculatePower([1,2,3,4,5,6,7,8,9]);
console.log('Required laser power is ' + laserPower);