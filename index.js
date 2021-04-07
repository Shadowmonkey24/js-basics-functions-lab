// Code your solution in this file!

let hq = 42
const price = 0.02

function distanceFromHqInBlocks(x) {
     if (x >= 42) {
       return  x-hq;
     }
     else if (x < 42) {
       return hq-x;
     }

    };
    
    

    function distanceFromHqInFeet(x) {
        if (x >= 42) {
          return  [x-hq] *264;
        } 
        else if (x < 42) {
          return [hq-x] *264;
        }
   
   };

   function distanceTravelledInFeet(x,y) {
    if (x >= y) {
      return  [x-y] *264;
    } 
    else if (x < y) {
      return [y-x] *264;
    }

};


function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  if(distance > 2500){
    return('cannot travel that far')
  }else if((distance) > 2000){
    return 25
  }else if(distance > 400){
    return((distance - 400)*price)
  }else if(distance <= 400){
    return 0
  }   
}

     
    
  
 