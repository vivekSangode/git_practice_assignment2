function checkPrime(){
let num = 13;
let count = 0;
  for(let i = 0; i<=num ; i++){
     if(num%i===0){
         count++;
     }
  }
  if(count===2){
     console.log("Prime Number")
  }else{
     console.log("Not a Prime Number")
  }
}