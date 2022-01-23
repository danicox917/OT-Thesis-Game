const defaultSet = {
  money: 1000,
  weight: 30
}
//career options
const sucbiz = {
  name: "successful business owner",
  money: 1,
  goal: "party"
}
const landowner = {
  name: "landowner",
  money: .9,
  goal: "party"
}
const shopOwner = {
  name: "shop owner",
  money: .7,
  goal:"dinner"
}
const carpenter = {
  name:"carpenter" ,
  money: .7,
  goal:"dinner"
}
const factory = {
  name: "factory worker",
  money: .6,
  goal:"workSupplies"
}
const farmer = {
  name: "farmer",
  money: .4,
  goal:"workSupplies"
}
const railroad = {
  name: "railroad worker",
  money: .5,
  goal: "workSupplies"
}

//actions 
const deliverGoods = {
  desc:"You wonder if the shopkeeper would be willing to deliver your purchase to your home, so that you won't have to carry it around yourself.",
  location: ["store"],
  probability: 30,
  choice1: "Ask for their help",
  choice2: "Pass"
}
const pickpocket = {
  desc:"You notice a person nearby has a pocketbook about to tip out of their pocket. They're dressed nicely, and it's likely there's some money in it.",
  location: ["store","street"],
  probability: 20,
  choice1: "Try and slip the pocket book out of their pocket",
  choice2: "Pass"
}
const getRobbed = {
  desc:"A fiend approaches you and threatens you bodily harm if you don't hand over your valuables.",
  location: ["street"],
  probability: 15,
  choice1: "Fight them off",
  choice2: "Run"
}
const enterHouse = {
  desc:"Your door is locked.",
  location: ["home"],
  probability: 60,
  choice1: "Knock to see if anyone is home",
  choice2: ""
}
const friendDeliver = {
  desc:"You run into a friend on the street. They're going to be passing your house, and you wonder if they wouldn't mind bringing home some of your purchases for you.",
  location: ["street"],
  probability: 10,
  choice1: "Ask for their help",
  choice2: "Pass"
}
const findMoney = {
  desc:"As you're walking down the street you look down and see some money on the street.",
  location: ["street"],
  probability: 5,
  choice1: "Pick it up",
  choice2: "Pass"
}
const helpMoney = {
  desc:"You see a little old woman struggling to carry some items.",
  location: ["street"],
  probability: 10,
  choice1: "Help her",
  choice2: "Pass"
}
const slipDrop = {
  desc:"You trip on the street",
  location: ["street"],
  probability: 8,
  choice1: "Try to catch yourself",
  choice2: "Just let yourself fall"
}
const nothing = {
  desc: "nothing happens",
  location:["store","street"],
  probability: 100,
  choice1: "",
  choice2: ""
}
const events = {
  street: [pickpocket, getRobbed, friendDeliver, findMoney, helpMoney, slipDrop, nothing],
  store:[deliverGoods, pickpocket, nothing],
  home:[enterHouse]
}

//locations
const mercantile = {
  name:"the Mercantile Shop",
  desc:"Get all your random shit here",
  sprite:"",
  question:"What did you need? A punch bowl? Sounds like you're in for a fun evening.",
  cost:100,
  weight: 6,
  thing: "punchbowl"
}
const printer = {
  name:"the Printer's Shop",
  desc:"Get stuff printed up",
  sprite:"",
  question:"Need something printed? Well you're in the right place. Oh you just need to pick up an order. Well I have your invitations right here.",
  cost:20,
  weight: 5,
  thing: "invitations"
}
const florist = {
  name:"the Florist",
  desc:"Smells rad",
  sprite:"",
  question:"Welcome to flower town, bitch. Having a party? It's gonna slap I tell you what. We'll get you all set.",
  cost:150,
  weight: 6,
  thing: "flowers"
}
const butcher = {
  name:"the Butcher",
  desc:"It meaty",
  sprite:"",
  question:"Meat??? Ham??? Beef???",
  cost:10,
  weight: 20,
  thing: "roast"
}
const market = {
  name:"the Market",
  desc:"All purpose snacks",
  sprite:"",
  question:"You want it we got it, how can I help you? Veggies? Good for you, don't touch the stuff myself.",
  cost:10,
  weight: 10,
  thing: "veggies"
}
const coalMonger = {
  name:"the Coal Monger",
  desc:"Keep your house warm",
  sprite:"",
  question:"Got some bad kids this year?",
  cost:15,
  weight:15,
  thing: "coal"
}
const cobbler = {
  name:"the Cobbler",
  desc:"No pie, only shoes",
  sprite:"",
  question:"We gots some shoes for ya",
  cost:20,
  weight: 10,
  thing: "shoes"
}
const haberdasher = {
  name:"the Haberdasher",
  desc:"Fine men's apparel",
  sprite:"",
  question:"You want some gloves? It's your lucky day",
  cost:12,
  weight: 3,
  thing: "gloves"
}
const tobacconist = {
  name:"Tobacco Galore",
  desc:"It stinky",
  sprite:"",
  question:"Puff",
  cost:20,
  weight: 10,
  thing: "tobacco"
}
//tasks
const party = {
  name: "get ready for a dinner soiree for your dear friends and business acquaintences",
  tasks:["buy a new punch bowl", "pick up invitations", "buy flowers"],
  locations:[mercantile, printer, florist]
}
const dinner = {
  name: "get everything you need for a wonderful Sunday dinner for your family",
  tasks:["pick up the roast", "go to the market for vegetables", "get coal for the stove"],
  locations:[butcher, market, coalMonger]
}
const workSupplies = {
  name: "get new work supplies",
  tasks:["buy a sturdy new pair of work boots", "get some new gloves", "pick up some tobacco, as a treat"],
  locations:[cobbler, haberdasher, tobacconist]
}

//objects
const callingCard = {
  name:"calling card",
  desc:"It's a card with your name on it.",
  sprite:"<img src='images/caravan.png' alt='a calling card'>",
  weight: 1,
  actions: "deliverGoods.probability= 65"
}
const memo = {
  name:"memorandum book and a pencil",
  desc:"Just a little notebook and pencil, you can write just about anything in it.",
  sprite:"<img src='images/caravan.png' alt='a calling card'>",
  weight: 4,
  actions: "deliverGoods.probability= 60"
}
const handkerchief = {
  name:"handkerchief",
  desc:"Wipe your nose or whatever.",
  sprite:"",
  weight: 2,
  actions:"pickpocket.probability=40"
}
const gun = {
  name:"pistol",
  desc:"Put 'em up cowboy.",
  sprite:"",
  weight: 10,
  //actions: "escapeRobbery.probability=90"
}
const keys = {
  name:"set of your house keys",
  desc:"Use it to get into your house, or keep other people out of your house.",
  sprite:"",
  weight: 3,
  actions: "enterHouse.probability=100"
}
const clippings = {
  name:"few newspaper clippings",
  desc:"Includes the news of the day.",
  sprite:"",
  weight: 2,
  actions:"friendDeliver.probability= 60"
}
const ring = {
  name:"diamond ring",
  desc:"Why wear it when you could just carry it around with you.",
  sprite:"",
  weight: 3,
  actions: "getRobbed.probability = 70"
}
const watch = {
  name:"pocket watch",
  desc:"What time is it? The time of our lives.",
  sprite:"",
  weight: 5,
  actions: "getRobbed.probability = 60"
}
//shop items
const punchbowl = {
  name:"Punch Bowl",
  desc:"Holds punch",
  sprite:"",
  weight: 6
}
const invitations = {
  name:"Invitations",
  desc:"invites your best friends",
  sprite:"",
  weight: 5
}
const flowers = {
  name:"Flowers",
  desc:"Smells nice",
  sprite:"",
  weight: 6
}
const roast = {
  name:"Roast",
  desc:"Smells nice",
  sprite:"",
  weight: 20
}
const veggies = {
  name:"Vegetables",
  desc:"Fresh and healthy",
  sprite:"",
  weight: 10
}
const coal = {
  name:"Coal",
  desc:"Keeps you warm",
  sprite:"",
  weight: 15
}
const shoes = {
  name:"Shoes",
  desc:"Good for work",
  sprite:"",
  weight: 10
}
const gloves = {
  name:"Gloves",
  desc:"Keep your hands warm and clean",
  sprite:"",
  weight: 3
}
const tobacco = {
  name:"Tobacco",
  desc:"I've heard rumors this stuff isn't good for you",
  sprite:"",
  weight: 10
}

function dispObj(obj) {
  return obj.sprite+"<br>"+obj.desc+"<br>Weight: "+obj.weight+" lbs"
}
let obj1 = dispObj(callingCard);
let obj2 = dispObj(memo);
let obj3 = dispObj(handkerchief);
let obj4 = dispObj(gun);
let obj5 = dispObj(keys);
let obj6 = dispObj(clippings);
let obj7 = dispObj(ring);
let obj8 = dispObj(watch);

var bag;
let charWeight=0;
let bagForm = [];

function objSelector() {
  bag=[];
  charWeight = 0;
  bagForm=[];
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="bag"]:checked');
  for (var checkbox of checkboxes)
  {if (checkbox.checked) {
    bag.push(checkbox.value);
  }
  }
  if (bag.length === 3) {
    for (var x of bag) {
      y = eval(x);
      bagForm.push(y);
      charWeight = charWeight+y.weight;
    }
    let cont1= bagForm[0].name;
    let cont2= bagForm[1].name;
    let cont3= bagForm[2].name;
    document.getElementById("bagSubmit").style.display = "none";
    document.getElementById("reset").style.display = "block";
    document.getElementById("continue").style.display = "block";
    document.getElementById("bagContents").innerHTML = "You decided to bring a "+cont1+", a "+ cont2+", and a "+cont3+" on your errand today. They weigh "+ charWeight+" pounds altogether. That leaves "+(weight-charWeight)+" pounds of space left for the things you need to pick up. <br> If this sounds right continue on, otherwise change your selection and submit again.";
  }
  else {
    document.getElementById("bagContents").innerHTML = "You have to pick exactly three things, sorry :/";
  }
}

document.getElementById("obj1").innerHTML = obj1;
document.getElementById("obj2").innerHTML = obj2;
document.getElementById("obj3").innerHTML = obj3;
document.getElementById("obj4").innerHTML = obj4;
document.getElementById("obj5").innerHTML = obj5;
document.getElementById("obj6").innerHTML = obj6;
document.getElementById("obj7").innerHTML = obj7;
document.getElementById("obj8").innerHTML = obj8;

function selected(x){
  var sel = document.getElementById(x);
  {if (sel.style.backgroundColor=="rgb(242, 220, 155)") {
    sel.style.backgroundColor="#F2EDD5d9";
    return;
  }
  else{
    sel.style.backgroundColor="rgb(242, 220, 155)";
  }
}
return
}
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 3) {
        $(this).prop('checked', false);
        document.getElementById("alert").innerHTML = "You can only pick 3!";
    }
});

//race/gender options
const abw = {
  money: 1,
  randomEvents:""
}
const abb = {
  money: .6,
  randomEvents:""
}
const imm = {
  money: .8,
  randomEvents:""
}
const wom = {
  money: .75,
  weight: 1.2,
  randomEvents: "",
  preface: "the wife of"
}
const notWom = {
  money: 1,
  weight: 1,
  randomEvents:"",
  preface: ""
}
