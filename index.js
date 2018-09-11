function dwarfRollCall(dwarves) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> d2cbe18151b8eb574ce87d3b71a40e607270992a
  var theNumberedDwarves = "";
  for (var i = 0 ; i < dwarves.length; i++) {
      theNumberedDwarves = theNumberedDwarves.concat(`${i+1}. ${dwarves[i]} `) //theNumberedDwarves = theNumberedDwarves + (`${i+1}. ${dwarves[i]} `);
  }
  return theNumberedDwarves;
<<<<<<< HEAD
  //return `1. ${dwarves[1]} 2. ${dwarves[2]} 3. ${dwarves[3] 4. ${dwarves[4]}}`

=======
=======
  // return `1. ${dwarves[1]} 2. ${dwarves[2]} 3. ${dwarves[3] 4. ${dwarves[4]}}`
>>>>>>> a3c9bfb0f43d9fa94c99b2e183cdd2a9fa3cfeeb
>>>>>>> d2cbe18151b8eb574ce87d3b71a40e607270992a
}

//dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
//dwarfRollCall(dwarves);

////////////////////////////////////////////// Summone Captain Planet. User a loop conver each element to upper case and add !.

function summonCaptainPlanet(planeteerCalls){

  var upperCaseExclamation = new Array();

  for ( var i =0 ; i < planeteerCalls.length; i++) {
      upperCaseExclamation[i] = planeteerCalls[i].toUpperCase().concat('!') //upperCaseExclamation[i] = planeteerCalls[i].toUpperCase() + '!'
  }

  return upperCaseExclamation;
}

// summonCaptainPlanet("earth", "wind", "fire", "water", "heart")

///////////////////////////////////////// Long Planeteer Calls. User the array index length to decide
function longPlaneteerCalls(planeteerCalls) {
  if (planeteerCalls.length >= 4) {
    return true
  } else {
    return false
  }
}

////////////////////////////////////// loop inside loop , apple. goude, ..
function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camemberte"];

  for (var i = 0; i < cheese.length; i++) {

    for (var j = 0; j < foods.length; j++) {

      if (cheese[i] === foods[j]) {
        return cheese[i];
      }
    }

  }
    return "no cheese!"
}

function wordsWithB(words) {
  var outPutArray = new Array();

  for (var i=0 ; i < words.length; i++) {
    if (words[i][0] === 'b' ) {

      outPutArray.push(words[i]); 
    }
  
  }
  return outPutArray;
}

///////////////////////////////////// try if else inside if else

// (var i = 0; i < foods.length; i++) {
//
//     if (cheese[0] === foods[i]) {
//       return foods[i];
//     }
//     else {
//         if (cheese[1] === foods[i]) {
//         return foods[i];
//       } else {
//           if (cheese[2] === foods[i])
//           return foods[i];
//         }
//     }
//   }
//     return 'no cheese!';
// }

////////////////////////////////////  else if
// function findTheCheese (foods) {
//   var cheese = ["cheddar", "gouda", "camemberte"];
//
//   for (var i = 0; i < foods.length; i++) {
//
//     if (cheese[0] === foods[i]) {
//       return cheese[0];
//     } else if (cheese[1] === foods[i]) {
//         return cheese[1];
//       } else if (cheese[2] === foods[i]) {
//           return cheese[2];
//         }
//   }
//     return 'no cheese!';
// }
