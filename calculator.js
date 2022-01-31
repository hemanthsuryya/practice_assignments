// Set operands here
const a = 5;
const b = 6;

// If multiple operands provide it as string to problem variable
const problem = '2+4*8/2';

function classicCal(A, B) {
    this.a = A;
    this.b = B;   
}

classicCal.prototype.multiplication = function() {
    return this.a * this.b;
}
classicCal.prototype.sum = function(){
    return (this.a + this.b);
}

classicCal.prototype.subtraction = function(){
    return this.a - this.b;
}

classicCal.prototype.division = function(){
    return this.a / this.b;
}

classicCal.prototype.ev = function(){
    return eval(this.a);
}

const  ops = new classicCal(a, b, problem);

console.log(a + ' + '+ b +' = ' + ops.sum());

console.log(a + ' - '+ b +' = ' + ops.subtraction());

console.log(a + ' x '+ b +' = ' + ops.multiplication());

console.log(a + ' / '+ b +' = ' + ops.division()); 

console.log(problem +' = '+ ops.ev());
