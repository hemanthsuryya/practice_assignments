function classicCal(c, d) {
    this.a = c;
    this.b = d;   
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
    console.log(this.a);
    return eval(this.a);
}



if(process.argv.length == 5){
    let op = process.argv[2];
    let c = parseFloat(process.argv[3]);    
    let d = parseFloat(process.argv[4]);

    const  ops = new classicCal(c, d);

    switch (op) {
        case 'add':
            console.log(ops.sum());
            break;
        case 'div':
            console.log(ops.division()); 
            break;
        case 'sub':
            console.log(ops.subtraction());
            break;
        case 'mul':
            console.log(ops.multiplication());
            break;
        default:
            console.log('Arguments: <OP> <First number> <Second number>')
            console.log('OP can be add / sub / mul / div');
            console.log("----------------OR--------------");
            console.log('One argument as problem without spaces <whole equation>');
            console.log('node calc.js 5+6-4*3');
            break;
    }
}
else if(process.argv.length == 3)
{
    let c = process.argv[2];    
    const  ops = new classicCal(c, 0);
    console.log(ops.ev());
}
else{
    console.log('Arguments: <OP> <First number> <Second number>')
    console.log('OP can be add / sub / mul / div');
    console.log('e.g.:node calc.js add 6 5');
    console.log("----------------OR--------------");
    console.log('One argument as problem without spaces <whole equation>');
    console.log('e.g.: node calc.js 5+6-4*3');
}
