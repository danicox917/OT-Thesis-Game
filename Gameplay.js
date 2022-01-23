let thingsList = [];
function thingsListFunc() {
  thingsList = "";
  for (var x of bagForm) {
    thingsList = concat(thingsList,x.name,", ");
  }
}
thingsListFunc();
let homeList = [];

function startGame() {
  document.getElementById("introPortion").style.display = "none";
  document.getElementById("GameArea").style.display = "block";

  //start screen
  refresh();

  //start moving
  timeProgress();
  
  console.log(thingsList);
}
function testStats(){ //remove this when you're done testing stats box
  fname = "Dani";
  lname = "Cox";
  gender = "woman";
  race = "white";
  class2 = "middle class";
  locale = "an urban";
  bagForm = [keys, callingCard, memo];
  charWeight = bagForm[0].weight+bagForm[1].weight+bagForm[2].weight;
  formHandler(); 
}
function refresh (){//include this somewhere else when done testing, probably startGame()?
  for (var x of bagForm) {
    y = eval(x.actions);
    y;
  }
  for (var x of bagForm) {
    thingsList= thingsList.concat("<ul> ",x.name,"</ul>");
  }
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight)+"<br></p>Money Available: <p>$"+(cashStart-lost)+"</p>Your Things: <p>"+thingsList+"</p>";
}

//updates time and stats and events
let seconds = 0;
let thingHappening = "nothing happens";
let choice1Active = "";
let choice2Active = "";
let stop = 0;
let location2 = "street";
function timeProgress(){
  console.log(location2);
  if (seconds < 3 && thingHappening == "nothing happens"){
    seconds += 1;
    document.getElementById("secs").innerHTML = seconds;
    document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight)+"<br></p>Money Available: <p>$"+(cashStart-lost)+"</p>Your Things: <p>"+thingsList+"</p>";
    weightedRandom(probArray);
    document.getElementById("event").innerHTML = thingHappening;
    document.getElementById("street").style.display = "block";
    document.getElementById("shop").style.display = "none";
  } else if (thingHappening !== "nothing happens") {
    document.getElementById("choice1").style.display = "block";
    document.getElementById("choice2").style.display = "block";
    document.getElementById("choice1").innerHTML = choice1Active;
    document.getElementById("choice2").innerHTML = choice2Active;
    stopCounter();
  } 
  else {
    console.log("you done");
    stopCounter();
    direction();
    }
}
//starts time counter
var location1;
var cancel;
function startCounter(loc){
  let probArray = [];
  seconds = 0;
  loca = eval(loc);
  document.getElementById("countStarter").style.display = "none";
  let location1= loca;
  cancel = setInterval(timeProgress, 1000);
  probArrayFunc(location1);
}
function stopCounter(){
  document.getElementById("recount").style.display = "none";
  document.getElementById("outcome").style.display = "none";
  clearInterval(cancel);
}
//continues after event
function contTime(){
  console.log("It's working!");
  document.getElementById("recount").style.display = "none";
  document.getElementById("outcome").style.display = "none";
  document.getElementById("choice1").style.display = "none";
  document.getElementById("choice2").style.display = "none";
  result = "";
  thingHappening = "nothing happens";
  choice1Active = "";
  choice2Active = "";
  cancel = setInterval(timeProgress, 1000);
}
//random event generator
let probArray = [];
let functionArray = [];
function probArrayFunc(location){
  for (var x in location) {
    let times = 0;
    let max = eval(location[x].probability);
    while (times < max) {
      probArray.push(location[x]);
      times += 1;
    } 
  }
}
function functionArrayFunc(action){
  functionArray = [];
  let times = 0;
  while (times < probGood) {
    functionArray.push(goodOption);
    times += 1;
    } 
  while (times < (probBad+probGood)) {
    functionArray.push(badOption);
    times += 1;
    } 
  console.log (functionArray);
}
function weightedRandom(items){
  let index = Math.floor(Math.random() * probArray.length);
  thingHappening = items[index].desc;
  choice1Active = items[index].choice1;
  choice2Active = items[index].choice2;
  console.log(index+" index");
  console.log(thingHappening);
}
let result = "";
var rep;
function weightedAction(){
  let index = Math.floor(Math.random() * functionArray.length);
  result = functionArray[index];
  console.log(index+" index");
  console.log(result);
  if (result == "The assailant gets ahold of your pockets and you lose some things, but you get away safely." || result == "You bolt and the assailant manages to grab you as you leave, taking some things as you pull away."|| result == "You drop some things and they roll away."){
    loss();
    rep = "You lost "+change;
  } else if (result == "They have agreed to deliver some stuff to your home. What are neighbors for?"){
    deliverStuff();
    rep = "They delivered the "+change+ " to your house.";
  } else if (result =="You successfully slip the pocketbook out of their pocket."|| result =="You get some money, lucky you."|| result =="She thanks you and gives you some money for your trouble."){
    windfall();
    rep = "You gained "+change;
  } else {
    rep = "";
  }
}
//effects of outcome
//bad thing happens and you lose money or item
var repurcussion;
var change;
//lose items
function loss(){
  console.log("loss");
  let coinFlip = Math.floor(Math.random()*2);
  console.log(coinFlip);
  if (coinFlip == 1){
    let index = Math.floor(Math.random()*bagForm.length);
    repurcussion = bagForm[index].name;
    console.log(index+" index");
    console.log(repurcussion);
    bagForm.splice(index,1);
    console.log(bagForm);
    change = repurcussion;
    thingsListFunc();
  } else {
    let index = Math.floor(Math.random()*currentCash);
    lost += index;
    change = "$"+index;
  }
}
//deliver stuff, gain weight
function deliverStuff(){
  console.log("deliver");
  let index = Math.floor(Math.random()*bagForm.length);
  let thing = bagForm[index].name;
  if (location1== events.store){
    let thing = shopThing;
  }
  console.log(index+" index");
  console.log(thing);
  charWeight -= bagForm[index].weight;
  change = thing;
  bagForm.splice(index,1);
  homeList.push(bagForm[index]);
  thingsListFunc();
}
//gain money
function windfall(){
  console.log("windfall");
  let index = Math.floor(Math.random()*50);
  console.log(index+" index");
  lost -= index;
  change = "$"+index;
}

//choices for actions
var probGood;
var probBad;
var goodOption;
var badOption;
var outcome;

function choiceOption(x){
  if (x == "BLAH"){
    console.log("THIS IS BROKEN");
  }
  else if(x == "Ask for their help"){
    probGood = 5;
    probBad = 5;
    goodOption = "They have agreed to deliver some stuff to your home. What are neighbors for?";
    badOption = "They really don't have the time today. Sorry friend, maybe next time.";
    if (location1 == events.street && bagForm.includes(clippings)) {
      probGood =  8;
      probBad = 2;
    } else if (location1 == events.store && bagForm.includes(memo)){
      probGood =  7;
      probBad = 3;
    } else if (location1 == events.store && bagForm.includes(callingCard)){
      probGood =  7;
      probBad = 3;
    }
    finish(x);
  }
  else if (x == "Try and slip the pocket book out of their pocket"){
    probGood = 4;
    probBad = 6;
    goodOption = "You successfully slip the pocketbook out of their pocket.";
    badOption = "They catch you, and you make yourself scarce before they can call the cops.";
    if (location1 == bagForm.includes(handkerchief)) {
      probGood =  6;
      probBad = 4;
    }
    finish(x);
  }
  else if (x == "Fight them off"){
    probGood = 5;
    probBad = 5;
    goodOption = "You manage to fight them off long enough to get away, and you bolt without losing any money or items.";
    badOption = "The assailant gets ahold of your pockets and you lose some things, but you get away safely.";
    if (location1 == events.street && bagForm.includes(gun)) {
      probGood =  8;
      probBad = 2;
    }
    finish(x);
  }
  else if (x == "Run"){
    probGood = 7;
    probBad = 3;
    goodOption = "You bolt and the assailant doesn't catch you.";
    badOption = "You bolt and the assailant manages to grab you as you leave, taking some things as you pull away.";
    finish(x);
  }
  else if (x == "Pick it up"){
    probGood = 9;
    probBad = 1;
    goodOption = "You get some money, lucky you.";
    badOption = "As soon as you pick it up you can tell the paper feels odd. You look closer and see that the money is counterfeit.";
    finish(x);
  }
  else if (x == "Help her"){
    probGood = 3;
    probBad = 7;
    goodOption = "She thanks you and gives you some money for your trouble.";
    badOption = "She thanks you and you go on your way.";
    finish(x);
  }
  else if (x == "Try to catch yourself"){
    probGood = 4;
    probBad = 6;
    goodOption = "You stop your fall with only your pride harmed.";
    badOption = "You drop some things and they roll away.";
    finish(x);
  }
  else if (x == "Just let yourself fall"){
    probGood = 5;
    probBad = 5;
    goodOption = "Your body breaks the fall for your things and you don't lose anything.";
    badOption = "You drop some things and they roll away.";
    finish(x);
  }
  else {
    stopCounter();
    contTime();
  }
  //continue on
}
function finish(x){
  functionArrayFunc(x);
  weightedAction();
  document.getElementById("outcome").display = "block";
  document.getElementById("outcome").innerHTML = result + "<br>"+rep;
  document.getElementById("recount").style.display = "block";
  document.getElementById("choice1").style.display = "none";
  document.getElementById("choice2").style.display = "none";
}