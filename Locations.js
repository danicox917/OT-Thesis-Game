var shopName;
var shopDesc;
var shopSprite;
var shopQuest;
var shopCost;
var shopWeight;
var shopThing;

function shop(x) {
  location2 = "store";
  console.log(stop);
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight)+"<br></p>Money Available: <p>$"+(cashStart-lost)+"</p>Your Things: <p>"+thingsList+"</p>";
  document.getElementById("street").style.display = "none";
  document.getElementById("shop").style.display = "block";
  y = eval(x);
  shopName = y.name;
  shopDesc = y.desc;
  shopSprite = y.sprite;
  shopQuest = y.question;
  shopCost = y.cost;
  shopWeight = y.weight;
  shopThing = eval(y.thing);
  console.log(shopThing);
  document.getElementById("welcome").innerHTML = "Welcome to "+shopName+ ".";
  document.getElementById("shopDesc").innerHTML = shopDesc;
  document.getElementById("shopkeeper").innerHTML = shopSprite;
  document.getElementById("shopQuest").innerHTML = shopQuest + "<br>"+ "That's gonna be "+"$"+shopCost;
}
function storeWander(){
  lost += shopCost;
  charWeight += shopWeight;
  thingHappening = 0;
  seconds = 0;
  bagForm.push(shopThing);
  thingsListFunc();
  document.getElementById("statsBox").innerHTML = "Tasks: <p>You need to "+subTasks+"<br></p>Weight Available: <p>"+(weight-charWeight)+"<br></p>Money Available: <p>$"+(cashStart-lost)+"</p>Your Things: <p>"+thingsList+"</p>";
  document.getElementById("street").style.display = "block";
  document.getElementById("shop").style.display = "none";
  startCounter(events.store);
  stop += 1;
}
function direction(){
  if (location2 == "store"){
    location2 = "street";
    document.getElementById("secs").innerHTML = "You finish browsing, pay the merchant, and exit back out onto the street.";
    startCounter(events.street);
  } else if (location2 == "street"){
    location2 = "store";
    shop(places[stop]);
  }
  else {
    console.log("This broke");
  }
}