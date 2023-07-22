let a = 27;
let b = 9;
let ekubi = ekub();

function ekub() {
    if (a < b) {
        [a, b] = [b, a];
    }

    while (b !==0) {
        const remainder = a % b;
        a = b;
        b = remainder; 
    }
    return a;
}

console.log(a, "va", b,  "sonlarining ekubi:" , ekubi);