//version 1
let sum = (n) => {
    let result = 0;
    for (let i=1; i<=n; i++){
        result += i;
    }
    return result;
}
alert(`Version1: ${sum(100)}`);

//version 2
let sum2 = (n) => {
    if (n<0){
        return 'Wrong input!';
    }
    if (n===0){
        return 0;
    }
    return n += sum2(n-1);
}
alert(`Version2: ${sum2(100)}`);