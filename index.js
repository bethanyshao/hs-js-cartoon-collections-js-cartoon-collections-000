function dwarfRollCall(dwarves) {
  var dwarfString = "";
  var num = 1;
  dwarves.forEach(function(dwarf) {
    dwarfString += num + ". " + dwarf + " ";
  });
  return dwarfString;
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(function(call) {
    return call.toUpperCase() + "!";
  });
}

function longPlaneteerCalls(words) {
  var longerThan4 = false;
  words.forEach(function(word) {
    if(word.length > 4) {
      longerThan4 = true;
    }
  });
  return longerThan4;
}

function findTheCheese (foods) {
  // cheeses: cheddar, gouda, and camembert
  var containsCheese = false;
  var firstCheese = "";
  foods.forEach(function(food) {
    if(food === "cheddar" || food === "gouda" || food === "camembert") {
      containsCheese = true;
      firstCheese = food;
    }
  });
  if(containsCheese) {
    return firstCheese;
  } else {
    return "no cheese!";
  }
}
