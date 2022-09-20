function checkPrime(){
let num = 13;
let factor = 0;
  for(let i = 0; i<=num ; i++){
     if(num%i===0){
         count++;
     }
  }
  if(factor===2){
     console.log("Prime Number");
  }else{
     console.log("Not a Prime Number");
  }
}