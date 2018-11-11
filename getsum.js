function GetSum( a,b )
{
  if (a == b) return a;
  const isANegtive = Math.sign(a);
  const isBNegtive = Math.sign(b);
  let sum =[];
  const biggerNumber = (a>b) ? a : b;
  const smallerNumber = (a>b) ? b : a;
    for (let i = smallerNumber;i<=biggerNumber;i++) {
    sum.push(i);
    }
    
  return sum.reduce((acc,curr) => {
    return acc+curr;
  },0);
}


console.log(GetSum(-1,2));