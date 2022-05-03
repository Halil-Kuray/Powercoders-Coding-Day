let numbers = [1,4,6,3,2];

function weekNumbersToWords (pArray){

  dayList = [];   

  for (let index = 0; index < pArray.length; index++) {

      switch(pArray[index]){
        case 1:
            dayList.push('Monday')
            break;
        case 2:
            dayList.push('Tuesday')
            break;
        case 3:
            dayList.push('Wednesday')
            break;
        case 4:
            dayList.push('Thursday')
            break;
        case 5:
            dayList.push('Friday')
            break;
        case 6:
            dayList.push('Saturday')
            break;  
        case 7:
            dayList.push('Sunday')
            break;              
    }
  }
 console.log(dayList);
}
weekNumbersToWords(numbers);