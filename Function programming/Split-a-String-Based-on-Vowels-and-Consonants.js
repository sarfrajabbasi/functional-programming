// function split(str){
//    const vr =  str.replace(/[^aeiou]/gi,'') + str.replace(/[aeiou]/gi,'');
//     return vr;
// }

// ***************************************
function split(str) {
    let vowels = '';
    let consonants = ''
    for(let i = 0;i < str.length;i++){//#
        if(isVowel(str[i])){
            vowels += str[i]
        }else{
            consonants +=str[i]
        }
    }
    return vowels + consonants;
}
function isVowel(letter){
    const vowels = 'aeiou'
    return vowels.includes(letter)//#
}
// *******************************************
// function split(str) {
//     var a = str.match(/[aeiou]/gi);
//     var b = str.match(/[^aeiou]/gi);
//         return a.concat(b).join('');
//     }

console.log(split("abcde"), "aebcd")
console.log(split("Hello!"), "eoHll!")
console.log(split("What's the time?"), "aeieWht's th tm?")