const isPermutation = (str1, str2) =>  {
    let isTheSame = true;
    str1
    .split('')
    .forEach(str => {
        if (str2.indexOf(str) === -1) {
            isTheSame = false;
        }
    })
    console.log(isTheSame);
    return isTheSame;
}


//isPermutation('asd2','ds2a');

const isPermutation2 = (str1, str2) =>  {
    if (str1.length !== str2.length) {
        console.log('false')
    }
        return false;
    for (let i=0; i<str1.length;i++) {
        if (str2.indexOf(str1[i]) === -1) {
            return false
        }

    }
    console.log('true')
    return true;
}

isPermutation2('as2d2','ds2a');