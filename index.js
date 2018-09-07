function dwarfRollCall(dwarves) {
  var theNumberedDwarves = "";
  for (var i = 0 ; i < dwarves.length; i++) {
      theNumberedDwarves = theNumberedDwarves.concat(`${i+1}. ${dwarves[i]} `) //theNumberedDwarves = theNumberedDwarves + (`${i+1}. ${dwarves[i]} `);
  }
  return theNumberedDwarves;
}

//dwarfRollCall("Doc", "Dopey", "Bashful", "Grumpy");

function summonCaptainPlanet(planeteerCalls){

  var upperCaseExclamation = new Array();

  for ( var i =0 ; i < planeteerCalls.length; i++) {
      upperCaseExclamation[i] = planeteerCalls[i].toUpperCase() + '!'
  }

  return upperCaseExclamation
}

// summonCaptainPlanet("earth", "wind", "fire", "water", "heart")


function longPlaneteerCalls(words) {
  if (words.length >= 4) {
    return true
  } else {
    return false
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camemberte"];

  for (var i = 0; i < foods.length; i++) {

    if (cheese[0] === foods[i])
      return foods[i];
    else
        if (cheese[1] === foods[i])
        return foods[i];
        else
          if (cheese[2] === foods[i])
          return foods[i];

  }
    return 'no cheese!';
}
