var task;
var subTasks;
var cashStart;
var weight;
var title;
var demo;
var gen;
var locphrase;
var role;
var introParagraph;
var lost;
var goal;
var places;

function formHandler() {
  /*let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let gender = document.querySelector('input[type="radio"][name="gender"]:checked').value;
  let race = document.querySelector('input[type="radio"][name="race"]:checked').value;
  let class2 = document.querySelector('input[type="radio"][name="class2"]:checked').value;
  let locale = document.querySelector('input[type="radio"][name="locale"]:checked').value;*/

  let result = "Your name is "+ fname +" "+lname+". You are a " + class2 +" "+ race+" "+ gender+ " and you live in "+ locale+" place."
  document.getElementById("result").innerHTML = result;

  if (gender == "woman") {
    title = "Ms.";
  } else if (gender == "man"){
    title = "Mr.";
  } else {
    title = fname;
  }
  if (race == "Black") {
    demo = abb;
  } else if (race == "white"){
    demo = abw;
  } else {
    demo = imm;
  }
  if (gender == "woman") {
    gen = wom;
  } else {
    gen = notWom;
  }
  if (locale == "an urban") {
    locphrase = "";
  } else {
    locphrase = "the countryside just outside of ";
  }

  if (race == "Black" && class2 == "wealthy" && locale == "an urban") {
    role = sucbiz;
  } else if (race == "Black" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
  } else if (race == "Black" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
  } else if (race == "Black" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
  } else if (race == "Black" && class2 == "working class" && locale == "an urban"){
    role = factory;
  } else if (race == "Black" && class2 == "working class" && locale == "a rural"){
    role = farmer;
  } else if (race == "immigrant" && class2 == "wealthy" && locale == "an urban"){
    role = sucbiz; 
  } else if (race == "immigrant" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
  } else if (race == "immigrant" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
  } else if (race == "immigrant" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
  } else if (race == "immigrant" && class2 == "working class" && locale == "an urban"){
    role = factory;
  } else if (race == "immigrant" && class2 == "working class" && locale == "a rural"){
    role = railroad;
  } else if (race == "white" && class2 == "wealthy" && locale == "an urban"){
    role = sucbiz;
  } else if (race == "white" && class2 == "wealthy" && locale == "a rural"){
    role = landowner;
  }else if (race == "white" && class2 == "middle class" && locale == "an urban"){
    role = shopOwner;
  } else if (race == "white" && class2 == "middle class" && locale == "a rural"){
    role = carpenter;
  } else if (race == "white" && class2 == "working class" && locale == "an urban"){
    role = factory;
  } else if (race == "white" && class2 == "working class" && locale == "a rural"){
    role = farmer;
  } else {
    role = carpenter;
  }
  goal = eval(role.goal);
  places = eval(goal.locations);
  task = goal.name;
  subTasks = goal.tasks[0]+", "+goal.tasks[1]+", and "+goal.tasks[2]+".";

  cashStart = defaultSet.money*role.money*gen.money;
  lost = 0;
  weight = defaultSet.weight*gen.weight;


  introParagraph = "Good afternoon " +
  title +" "+lname+ "! Today is April 5, 1885, a lovely Sunday in "+ locphrase +" New York City. <br> It's going to be a big day so you better get started. <br> You're "+ gen.preface + " a " + role.name + " so today you have three things you need to do: " +task+". You have $" + cashStart+" to get everything on your list. <br> It's a crazy world out there and anything could happen, so you want to be sure you have everything you need before you go. But you can only carry about " + weight + " pounds, including the things you need to pick up while you're out. Pick three things to take with you: <br>"
  document.getElementById("introParagraph").innerHTML = introParagraph;

  document.getElementById("obj1").innerHTML = obj1;
  document.getElementById("obj2").innerHTML = obj2;
  document.getElementById("obj3").innerHTML = obj3;
  document.getElementById("obj4").innerHTML = obj4;
  document.getElementById("obj5").innerHTML = obj5;
  document.getElementById("obj6").innerHTML = obj6;
  document.getElementById("obj7").innerHTML = obj7;
  document.getElementById("obj8").innerHTML = obj8;
}
function startPlay(){
  document.getElementById("characterButton").style.display = "none";
  document.getElementById("introPortion").style.display = "block";
}