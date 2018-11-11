//return the total number of smiling faces in the array
function countSmileys(arr) {
if (!arr.length) return 0;
  return arr
  .filter(smiley => {
    return  smiley.length >2
    ? (smiley.charAt(1) === "~" || smiley.charAt(1) ==="-")
      ? ((smiley.indexOf(":")>-1 || smiley.indexOf(";")>-1) && 
        (smiley.indexOf("D")>-1 || smiley.indexOf(")")>-1))
      : false
    : ((smiley.indexOf(":")>-1 || smiley.indexOf(";")>-1)  && 
    (smiley.indexOf("D")>-1 || smiley.indexOf(")")>-1))
  })
  .length
}