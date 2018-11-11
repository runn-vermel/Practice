const oneEditReplace = (str1, str2) => {
    let foundDifference = false;
    for (let i =0; i<str1.length;i++) {
        if (str1.charAt(i) !== str2.charAt(i)) {
            if (foundDifference) return false;
            foundDifference = true;
        }
    }
    return true;
};

const oneEditInsert = (str1, str2) => {
    let index1 = 0;
    let index2 =0;

    while(index2<str2.length && index1<str1.length) {
     if (str1.charAt(index1) !== str2.charAt(index2)) {
         if (index1 !== index2) {
             console.log('false')
             return false;
         }
         index2++;
     } else {
         index1++;
         index2++;
     }
    }
    return true;
};
const oneAway = (str1,str2) => {
    if (str1.length === str2.length) {
        return oneEditReplace(str1, str2)
    } else if (str1.length+1 === str2.length ) {
        return oneEditInsert(str1, str2)
    } else if (str1.length-1 === str2.length) {
        return oneEditInsert(str2,str1 )
    }
    return false;
}

oneAway('pale','pleas');