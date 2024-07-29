//3 escopos: global, função e bloco

var serie = 'Friends'

if(true){
    var serie2 = 'Got'
    document.write(serie)
}
document.write(serie2)
document.write('<br />')

function x() {
    var serie3 = 'The Walking'
    document.write(serie)
    document.write(serie2)
}
x()   
document.write('<br />') 
document.write(serie3)