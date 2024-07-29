// converter B para A

var a = 10
var b = 20
var c = null

document.write('A: '+a+'<br />')
document.write('B: '+b+'<br />')
document.write('C: '+c+'<br />')
document.write('<hr />')

var temp = a; // temp == temporaria
a = b;
b = temp;

document.write('A: '+a+'<br />')
document.write('B: '+b+'<br />')
document.write('C: '+c+'<br />')
document.write('<hr />')