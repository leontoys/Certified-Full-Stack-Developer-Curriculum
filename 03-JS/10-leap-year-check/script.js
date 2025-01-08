const isLeapYear = (year) => {  
    if(year%100==0){
      if(year%400==0){
        return `${year} is a leap year.`;
      }
      else{
      return `${year} is not a leap year.` ;
      }
    }  
    else if((year%4==0)){
      return `${year} is a leap year.`;
    }
    else{
      return `${year} is not a leap year.` ;
    }
  }
  
  let year = 1984;
  const result = isLeapYear(year);
  console.log(result);