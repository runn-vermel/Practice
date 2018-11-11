function isValidWalk(walk) {
    if (walk.length >10) return false;
    let upDown = 0;
    let leftRight =0;
    walk.forEach(direction=> {
       switch (direction) {
         case 'n':
           upDown++;
          break;
         case 's':
           upDown--;
          break;
         case 'e':
           leftRight++;
          break;
          case 'w':
            leftRight--;
          break;
       }
    })
    console.log('leftRight',leftRight)
    console.log('upDown',upDown)
    return leftRight + upDown === 0;
    }

    console.log(isValidWalk(['w']))