/*
var name = "jack";    
var age  = 23;   
var shootingScore = 45.6;
var message = "Hi my name is " + name + " and I am " + age + " years old.";    
*/

/*var firstName = "John";
var lastName = "JacobJingleHeimerSmith";
var dateOfBirth = "10-09-82";
var age = 23;
var promileImgUrl = "http://coolpicks.com/johnjacob.jpg"

var loginWelcomeMessage= "Welcome, " + firstName + ". Happy " + age + "rd Birthday";

console.log(loginWelcomeMessage);*/


/*var age = 23;
var sum = 10 + 15;
var sub = 10 - 15;
var div = 10 / 15;
var mul = 10 * 15;
var mod = 10 % 3;
console.log(mod);*/

//==equal to
//<=
//>=    
//===

/*
var val1 = 23;
var val2 = "23";

if(val1 === val2 ){
    console.log("These are the same");
}else{
    console.log("One of these is not the same with the other");
}
*/


/*var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;   


if(nikeSBShoes <= myAccountBalance) {    
    myAccountBalance -= nikeSBShoes;
    console.log("we just bought some dope shoes");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance){
    myAccountBalance -= nikeSBShoes - coupon;
    console.log("we just bought some dope shoes with a coupon!");
    console.log("Account Balance: " + myAccountBalance);
}
else {
     console.log("You too broke for shoes bruh!");
}*/




/*
if(1 === 1 && 2 === 2 || "joe" == "joe"){
    console.log("these are both true")  ;
}


if(true && true ){
    console.log("these are both true");
}


if(1 === 3  || "joe" == "joe" ){
    console.log("one of these  are  true");
}


var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap){
    console.log("cat 1 is the cutest");
}else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap){
     console.log("cat 2 is the cutest");
}else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap){
      console.log("cat 2 is the cutest");
}

*/

/*var students = ["Timmy", "Janessa", "Arun"];
var naughtyList = [];
naughtyList.push(students[0]);
console.log(naughtyList);

var index = naughtyList.indexOf("Timmy");
if(index > -1){
     naughtyList.splice(index, 1);
}

console.log(index);
console.log(naughtyList);


   */ 

/*
var total = 10;
for (var x = 0; x < total; x++){
    console.log(x);
} 
*/
/*
var students = ["John","Jacob","Jingle","Heimer","Smith"];
for (var x = 0; x < students.length; x++){
    console.log(students[x]);
} */

/*
var length1 = 15;
var width1 = 10;
var area1 = lengh1 * width1;

var length2 = 12;
var width2 = 14
var area2    = lengh2 * width2;
*/

/*function area(length, width){
    return length * width;
}

var rectangles = []
rectangles.push(area(10, 15));
rectangles.push(area(14, 2));
rectangles.push(area(4, 5));
console.log(rectangles);

var  bankBalance = 500;
function makeTransaction(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Funds");
    }
}


var transaction = function(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Funds");
    }
}

console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.32);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);
makeTransaction(450.00);
console.log(bankBalance);
transaction(10.45);*/


/*function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
        return "Hi I'm " + this.firstName + " and I'm " + this.age + " years old." ;
    }    
} 

var students = [];
students.push(new Student("Jenny", "Laga", 5 ));
students.push(new Student("Timmy", "Turner", 8 ));
students.push(new Student("Carl", "Jr", 4 ));

var student = students[0];
for (var key in student){
     console.log(student[key]);
}    */

/*
for (var x = 0; x < students.length; x++){
   var student = students[x];
   console.log(student.greeting());
} 
*/



/*var student0 = {
    firstName: "Jayne",
    lastName: "Looo",
    age: 7,
    greeting: function(){
      
    }
};*/

/*var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;
student1.greeting = function(){
        return "Hi I'm " + this.firstName + " and I'm " + this.age + " years old." ;
    };

var student2 = {}
student2.firstName = "Zack";
student2.lastName = "Boboo";
student2.age =  5;
student2.greeting = function(){
        return "Hi I'm " + this.firstName + " and I'm " + this.age + " years old." ;
    };
 

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);
console.log(students);
console.log(student0.greeting());    
console.log(student1.greeting());    
console.log(student2.greeting());    */