
// function keyboardMistakes(s){
//     s=s.replace(/4/g,'A');
//     s=s.replace('5','S');
//     s=s.replace('0','O');
//     s=s.replace('1','I');
//     return s;
//   }

// function keyboardMistakes(txt){
    
//     txt = txt.replace(/4/gi,'A');
//     txt = txt.replace(/5/gi,'S');
//     txt = txt.replace(/0/gi,'O');
//     txt = txt.replace(/1/gi,'I');
//     return txt;
// }

function keyboardMistakes(txt){
    var res;
    res =txt.replace(/4/gi,'A');
    res =res.replace(/5/gi,'S');
    res =res.replace(/0/gi,'O');
    res =res.replace(/1/gi,'I');
    return res;
}

console.log(keyboardMistakes("MUB45H1R"), "MUBASHIR")
console.log(keyboardMistakes("DUBL1N"), "DUBLIN")
console.log(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
console.log(keyboardMistakes("P4K15T4N"), "PAKISTAN")
console.log(keyboardMistakes("P4R15"), "PARIS")