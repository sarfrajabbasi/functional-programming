function hackerSpeak(str) {
	var res;
    res = str.replace(/o/gi,'0')
    res = res.replace(/i/gi,'1')
    res = res.replace(/e/gi,'3')
    res = res.replace(/a/gi,'4')
    res = res.replace(/s/gi,'5')
    return res;
}

console.log(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l")
console.log(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r")
console.log(hackerSpeak("hi there"), "h1 th3r3")
console.log(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun")
console.log(hackerSpeak("keep on practicing"), "k33p 0n pr4ct1c1ng")