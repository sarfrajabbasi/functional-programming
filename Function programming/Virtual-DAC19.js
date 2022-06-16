function adc(value){
    const result = (value * 5)/1023;
    return isInt(result) ? result : Number(result.toFixed(2))
}
function isInt(n){
    return n % 1 === 0;
}

console.log(adc(1023), 5)
console.log(adc(0), 0)
console.log(adc(500), 2.44)
console.log(adc(400), 1.96)
console.log(adc(850), 4.15)