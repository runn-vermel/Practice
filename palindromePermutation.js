const isPalindromePermutation = (str) => {
    const isEven = str.length %2 ===0;
    const countArray = {};
    let isPalindromePermutation = false;

    str
    .split('')
    .forEach(letter => countArray[letter] = !countArray[letter] ? 1 : countArray[letter]+1);
    
    return  (str.length %2 ===0) 
        ? isPalindromePermutation = Object.values(countArray).every(letter => (isEven && letter %2 ===0))
        : isPalindromePermutation = Object.values(countArray).sort((a,b) => a-b)[1] !==1;

}

isPalindromePermutation('actutcaf');