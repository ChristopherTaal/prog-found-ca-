//LEVEL 2
//Using the loop from question 5 above, only log the counter variable if it is an even number.
for(var i = 15; i <= 25; i++) {
    var number = i%2;
    if (number===0)
    console.log(i);
    else
    console.log();
  }
  //Create a function that logs the sentence "I am a function".
  function innerFunction(create){
      console.log (create);
  }
  innerFunction ("I am a function");
  function outerFunction(erase){
      console.log (erase);
      erase();
  }
  outerFunction(innerFunction);
