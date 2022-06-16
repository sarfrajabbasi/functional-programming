function basicCalculator(a,o,b){
    
if(o === '+'){
    return a + b;
}
else if(o === '-'){
    return a-b;
}
if(o === '/' && b !== 0){
    return a/b
}
else if(o==='*'){
    return a*b;
}
return null;
}

console.log(basicCalculator(2, '+', 4), 6)
console.log(basicCalculator(12, '-', 6), 6)
console.log(basicCalculator(18, '/', 2), 9)
console.log(basicCalculator(6, '*', 4), 24)
console.log(basicCalculator(2, '/', 0), null)
console.log(basicCalculator(2, 'x', 4), null)
console.log(basicCalculator(2, 'o', 4), null)
console.log(basicCalculator(12, '-', 2), 10)
console.log(basicCalculator(17, '*', 2), 34)
// Mubashir