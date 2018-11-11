const fibonaci = (n) => {
    if (n == 0) {
        console.log('0')
        return 0;

    }
    if (n ===1) {
        console.log('0')
        return 1;
    }

    let a = 0;
    let b = 1;
    let c;
    for (let i=2;i<n;i++) {
        c = a+b;
        a = b;
        b=c;
    }
    console.log(a+b) ;
}
//fibonaci(100)

const isPrime = (num) => {
    for (let i=0;i<Math.sqrt(num);i++) {
        if (num%i ===0) return false;
    }
    console.log(true) ;
}
isPrime(fibonaci(1))