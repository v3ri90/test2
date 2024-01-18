function fullName(firstname , lastname){
    console.log( `${firstname}\t${lastname}`)
}

fullName('Mark', 'Kagiri')

function addNum(n1,n2){
    let sum = 0
    sum =  n1 + n2
    return sum
}

console.log(addNum(9,8))

function areaRec(length , width){
    let area = length * width
    return area
}

console.log(areaRec(9, 10))

function oF(celcius){
    let fh = (celcius * 1.8) + 32
    return fh
}
console.log(oF(32))