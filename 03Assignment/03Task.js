//01
var out="";
for (var i = 0; i<7; i++){
    out = out + "#";
    console.log(out);
}
//02
var strArray= ["<option>Jazz</option>","<option>Blues</option>","<option>New Age</option>","<option>Classical</option>","<option>Opera</option>"];

var newArray ="";
for (var i = 0; i<strArray.length; i++){
    newArray +=strArray[i];
    
}
console.log(newArray);
//03
var myarray=[11,22,33,44,55];
var count=1;
for (var i = 0; i<4; i ++){
    count += 1;
}
console.log(count);
//04
var foods= [];
foods = ["Fruit Salad", "Pista IceCream", "Watermellon Juice","Chocolate Truffle", "Kalaki", "White Sauce Pasta", "Parotta", "Beef olarthiyathu", "Mutton chuka", "Cheese burst Pizza", "Soft Panner Taco", "Panneer corn and peas SubWay", "Strawberry Icecream", "Mutton Mughal Biriyani", "Prawn Noodles", "Gulab Jamun", "Badusha", "Panner Burger", "Red Velvet cupcake", "Rose Milk" ];
// console.log(foods);
//05
console.log(foods[4]);
//06
console.log(foods.length);
//07
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    friends[0]=friends[3];
    
}
console.log(input);
}

dataHandling(friends);
//08
const friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling1(input1){
for (var i = 0; i <input1.length; i++) {
    if (input1[i] == "CaptianAmerica"){
        break;
}
    console.log(input1[i]);
}
    
}
dataHandling1(friends1);
//09
const friends2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling2(input2, name2){
for (var i = 0; i < input2.length; i++) {
   if (input2[i] == name2){
        console.log("found");
   }
 }
}
dataHandling2(friends2,"Jeff");
//09
var friends01 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends02 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
var friends03 = friends01.concat(friends02);
function dataHandling(input4){
    friends03.sort();
    console.log(input4);
}
dataHandling(friends03);
//10
console.log(friends03[0]);
console.log(friends03[((friends03.length)/2)-1]);
console.log(friends03[friends03.length-1]);
//11
friends03.push("Tanya Bastian");
friends03.unshift("Theresa");
console.log(friends03);











