const concatStr = (str) => {
    let counter = 0;
    let compressed = '';
    for(let i=0;i<str.length;i++) {
        counter++;
        if (i+1 >=str.length || str.charAt(i) !== str.charAt(i+1)) {
            compressed += str.charAt(i) + counter;
            counter = 0;
        }
    }
    console.log(str.length === compressed.length ? str : compressed);
}

concatStr('ccccrrfdddd')