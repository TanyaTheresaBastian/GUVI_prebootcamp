var lemein = "0"; //Assigned value is String
var lemeout = 0; //Assigned value is Number
var msg = "";
if (lemein) //String value 0 is taken as True
{
 msg += "Hi"; // message = message + "Hi" 
}
if (lemeout) //Number value 0 is taken as False
{
 msg += "Hello"; // message = message + "Hello"
}
console.log(msg); // message printed according to the True condition.