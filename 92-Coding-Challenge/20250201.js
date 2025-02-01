const getBatteries = (volt) => {

//can be completely served by 100v bulbs?
   if ( volt % 100 === 0 ){
    return [0, 0, Math.floor(volt / 100)]
   }
  const batteries_100 = Math.floor(volt / 100); //number of 100 volt batteries
  volt = volt % 100; //remaining volts
  //can be completely served by 50?
  if ( volt % 50 === 0){
    return [0, Math.floor(volt / 50), batteries_100]
  }
  //can be completely divisible by 20?
  if (volt % 20 === 0 ) {
    return [Math.floor(volt / 20), 0, batteries_100]
  }
  //can 50 and 20 serve completely?
  if ((volt % 50) % 20 === 0) {
    const batteries_50 = Math.floor(volt / 50); //number of 50 volt batteries
    volt = volt % 50; //remaining volts
    return [Math.floor(volt / 20), batteries_50, batteries_100] 
  }
  //if still not completely servable
  return undefined

};

console.log(getBatteries(250));
console.log(getBatteries(260));
console.log(getBatteries(370));
console.log(getBatteries(30));
console.log(getBatteries(300));
console.log(getBatteries(70));

/**
*     With 250, return [0, 1, 2]
    With 260, return [3, 0, 2]
    With 370, return [1, 1, 3]
    With 30, return undefined
 */

/*   if (volt % 50 === 0) {
    batteries_50 = Math.floor(volt / 50);
  } else if (volt % 20 === 0) {
    batteries_20 = Math.floor(volt / 20);
  } else {
    batteries_50 = Math.floor(volt / 50);
    volt = volt % 50;
    batteries_20 = Math.floor(volt / 20);
    volt = volt % 20;
    if (volt) {
      return undefined;
    } */

//                return [batteries_20, batteries_50, batteries_100];
//                    return result

/* return volt % 50 === 0 //can be completely served by 50?
? [0, Math.floor(volt / 50), batteries_100]
: volt % 20 === 0 //can be completely divisible by 20?
? [Math.floor(volt / 20), 0, batteries_100]
: (volt % 50) % 20 === 0 //can 50 and 20 serve completely?
? [Math.floor(volt / 20), Math.floor(volt / 50), batteries_100]
: undefined; //if still not completely servable */
