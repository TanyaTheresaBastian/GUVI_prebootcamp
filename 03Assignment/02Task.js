//01
var num1 = 5;
console.log("Num:"+num1, "Square:" + Math.pow(num1,2));
//02
var num2 = 10;
var num3 = 20;
console.log("Number1:"+num2,"Number2:"+num3);
[num2,num3] = [num3,num2];
console.log("Number1:"+num2,"Number2:"+num3);
//03
var num4 = 6;
var num5 = 45;
var num6 = 1;
var sum1 = num4 + num5 + num6;
console.log("Num1:"+num4,"Num2:"+num5,"Num3:"+num6,"Sum="+sum1);
//04
var cel =98;
var farhen = (cel* (9/5))+32;
console.log(cel+"C=",farhen+"F");
//05
var meter = 2000;
var miles = meter/1609;
console.log(meter+"m=",miles.toFixed(3)+"miles");
//06
var pound = 100;
var kg = pound *0.45;
console.log(pound + "lb=", kg+"kg");
//07
var runs = 587;
var outs = 12;
var battingAvg = runs/outs;
console.log("Runs:"+runs,"No of Outs:"+outs,"Batting Avg:"+battingAvg.toFixed(3)) ;
//08
var test1 = 89;
var test2 = 72;
var test3 = 100;
var test4 = 41;
var test5 = 99;
var testAvg = (test1+test2+test3+test4+test5)/5;
console.log("Test1:"+test1,"Test2:"+test2,"Test3:"+test3,"Test4:"+test4,"Test5:"+test5,"Test Average="+testAvg);
//09 
let x = 10;
let y = 2;
let a = 3;
let b = 5;
var powOf = Math.pow(x,y);
var powerOf = Math.pow(a,b);
console.log("x:"+x,"y:"+y, "x^y="+powOf);
console.log("a:"+a,"b:"+b, "a^b="+powerOf);
//10
var principle = 10000;
var noOfYrs = 5;
var rOi = 11;
var SI = (principle*noOfYrs*rOi)/100;
console.log("Principle:"+principle, "No Of Yrs:"+noOfYrs,"Rate of Interest:"+rOi,"SI="+SI);
//11
var sideEquiTri = 20;
var areaEquiTri = (Math.sqrt(3)/4)*sideEquiTri*sideEquiTri;
console.log("Side:",sideEquiTri, "Area="+areaEquiTri.toFixed(3));
//12
var baseIsoTri = 10;
var heightIsoTri = 10;
var areaIsoTri = (baseIsoTri*heightIsoTri)/2;
console.log("Triangle Base:"+baseIsoTri, "Triangle Height:"+heightIsoTri,"Area of Isosceles Triangle="+areaIsoTri);
//13
var radius = 5;
var volume = (4/3)*Math.PI*(Math.pow(radius,3));
console.log("Radius of Sphere:"+radius, "Volume of Sphere="+volume.toFixed(3));
//14
var baseTriPrism = 12;
var heightTriPrism = 15;
var areaTriPrism = (baseTriPrism*heightTriPrism)/2;
var heigtPrism = 20;
var volumePrism = areaTriPrism * heigtPrism;
console.log ("Area of Base in Prism:"+areaTriPrism,"Height of Prism:"+heigtPrism,"Volume of Prism ="+volumePrism);
//15
var base = 14;
var height = 15;
var areaTri = (base*height)/2;
console.log("Base:"+base,"Height:"+height,"Area of Triangle="+areaTri);
//16 
var actualCost =1000;
var sellingPrice = 899;
var discount = actualCost - sellingPrice;
console.log("Actual Cost:"+actualCost,"Selling Price:"+sellingPrice,"Discount="+discount);
//17
var rad = 5;
var dia = rad *2;
var circum = 2* Math.PI * rad;
var areaCir = Math.PI*rad*rad;
console.log("Radius:"+rad, "Diameter:"+dia, "Circumference:"+circum,"Area of Circle ="+areaCir);
//18
var num7 = 100;
var num8 = 50;
var add = num7+num8;
var sub = num7-num8;
var mul = num7 * num8;
var div = num7/num8;
var mod = num7%num8;
var inc = num7++;
var decr = num8--;
console.log("Number1 ="+num7, "Number2="+num8);
console.log("Addition:"+add, "Subtraction:"+sub, "Multiplication:"+mul,"Division:"+div, "Modulus:"+mod,"Increment:"+inc,"Decrement:"+decr);
//19
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
//20
var unitRate = 9;
var consumption = 100;
var hour = 24;
var month = 30;
var oneUnit = 1000;
var totalConsumption = consumption*hour*month;
var totalUnits = totalConsumption/oneUnit;
var costElectricity = totalUnits * unitRate;

console.log("Consumption per Day:"+consumption+"watts", "Per Unit Rate:"+unitRate+"Rs", "Total Electricity Cost="+costElectricity+"Rs");
//21
var subj1= 78;
var subj2= 89;
var subj3= 65;
var subj4= 73;
var subj5= 85;
var percent = (subj1+subj2+subj3+subj4+subj5)/5;
var cgpa = percent/9.5;
console.log("Percentage:"+percent+"%","CGPA:"+cgpa.toFixed(2));








