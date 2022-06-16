function numArgs(...args){
    var called =  args.length;
    return called;
}
console.log(numArgs(), 0)
console.log(numArgs('foo'), 1)
console.log(numArgs('foo', 'bar'), 2)
console.log(numArgs(null, null), 2)
console.log(numArgs('foo', 'bar', 5, null), 4)
console.log(numArgs(false), 1)
console.log(numArgs('foo', {}), 2)
console.log(numArgs('foo', 'bar', {}), 3)
console.log(numArgs([], [], {}), 3)
console.log(numArgs('foo', 'bar', true, null, 0), 5)