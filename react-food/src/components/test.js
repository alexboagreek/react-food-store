const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
add10(5);


function partialApply(a, b) {
    return a + b
}

partialApply()

const snieda = true* 10 - true;
console.log(snieda)