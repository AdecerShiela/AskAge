 const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age? ', (age) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(age);
  addyears(age,5);
  addyears(age,20);
  addyears(age,30);
  
   rl.close();
});

 function addyears(age,increment){
 var me = age + increment;
 
  if(me<15){
    console.log("After " + increment + "years: " + 'I dont have to think about my life yet');
}
else if(me>15 && me<30){
    console.log("After " + increment + "years : " +  'Need to finish studies and find a job');    
}
else if(me>=30 && me<35){
    console.log("After " + increment + "years : " + 'I need to marry');
}
else if(me>=35 && me<40){
    console.log("After " + increment + "years : " + 'I will rear children');
}
else if(me>=40 && me <=59){
    console.log("After " + increment + "years : " + 'Prepare to retire');
}
else {
    console.log("After " + increment + "years : " + 'I will now retire');
}
 }
  

 
 

