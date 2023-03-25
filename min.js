function *infinityNumber(){
    var n =1;
    while(true){
        yield n++
    }
}

const number = infinityNumber();

console.log(number.next().value);
console.log(number.next());
// this is to infinity / no stop