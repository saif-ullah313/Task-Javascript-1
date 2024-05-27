//Question No 01
//Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.   


function addPy() {
  var str = document.getElementById("inputField").value;
  //var result = " ";
  if (str.startsWith("Py")) {
    document.getElementById("para").innerHTML = str; // same string
    //result=str;
  } else {
    document.getElementById("para").innerHTML = "Py" + str; // add Py to the beginning
    //result = "Py" + str;
  }
  //document.getElementById("para").innerHTML=result;


}
//********************************************************************************************


//Question No 02:
//Remove a character at the specified position of a given string and return the new string

function charReplace() {
  var original_string = document.getElementById("originalstring").value;
  var position = parseInt(document.getElementById("position").value);
  if (isNaN(position) || position < 0 || position > original_string.length) {
    document.getElementById("Replace").innerHTML = "Invalid Character";
  }
  else {

    var new_string = original_string.slice(0, position) + original_string.slice(position + 1);

    document.getElementById("Replace").innerHTML = "The new string is " + new_string;
  }
}

//*********************************************************************************************** */

//Question No 03:
//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  
function front_back_add() {

  var original_string = document.getElementById("originalstring1").value;
  if (original_string.length < 1) {
    document.getElementById("add").innerHTML = " Invalid String ";
  }
  else if (original_string.length >= 1) {

    var first_character = original_string[0];

    var last_character = original_string[original_string.length - 1]
    var new_string = last_character + original_string.slice(1, -1) + first_character;

    document.getElementById("add").innerHTML = "The new string is " + new_string;
  }

}
/************************************************************************************** */
// Question NO 04:
//Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  



function frontback_add() {
  var original_string = document.getElementById("originalstring2").value;

  if (original_string.length < 1) {
    document.getElementById("front_add").innerHTML = " Invalid String ";
  }
  else if (original_string.length >= 1) {

    var first_character = original_string[0];


    var new_string = first_character + original_string + first_character;

    document.getElementById("front_add").innerHTML = "The new string is " + new_string;
  }

}

/*********************************************************************************************** */
// Question No 05:
//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function checkmultiple() {
  var number = document.getElementById("multipleOf3And7").value;
  if (number > 0) {
    if (number % 3 == 0 || number % 7 == 0) {
      document.getElementById("multiple1").innerHTML = number + " is multiple of 3 or 7.";
    }
    else {
      document.getElementById("multiple1").innerHTML = number + " is not multiple of 3 or 7";

    }
  } else {
    document.getElementById("multiple1").innerHTML = "Please Enter a Positive number";
  }
}


/************************************************************************************************* */
// Question No 06:
//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.


//console.log(btns)


function frontback3() {
  var original_string = document.getElementById("originalstring3").value;
  if (original_string.length >= 3) {
    var last3_character = original_string.slice(-3);
    var new_string = last3_character + original_string + last3_character;
    document.getElementById("last3_add").innerHTML = "The new string is " + new_string;

  }
  else {
    document.getElementById("last3_add").innerHTML = " Invalid String ";
  }
}


//})

/************************************************************ */
//Question no 07:
//Write a JavaScript program to find the largest of three given integers.  

let num1input = document.getElementById("Number1");
let num2input = document.getElementById("Number2");
let num3input = document.getElementById("Number3");
let findMaxNumber = document.getElementById("MaxNumber");
let result = document.getElementById("result");
findMaxNumber.addEventListener('click', () => {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let num3 = parseInt(num3input.value);

  if (num1 >= num2 && num1 >= num3) {
    document.getElementById("result").innerHTML = "The Maximum Number is " + num1;
  } else if (num2 >= num1 && num2 >= num3) {
    document.getElementById("result").innerHTML = "The Maximum Number is " + num2;
  } else {
    document.getElementById("result").innerHTML = "The MAximum Number is " + num3;
  }


});
/*********************************************************************** */
//Question No 08:
//Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
//1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
//2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
//3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.


let total_marks = document.getElementById("totalMarks");
//let isfinalexam = document.getElementById("IsFinalExam");


let findgrade = document.getElementById("FindGrade");
let grade = document.getElementById("CheckGrade");


findgrade.addEventListener('click', () => {
  let totalmarks = parseInt(total_marks.value);
  let isfinalexam = document.getElementById("isfinalexam").checked;


  if (totalmarks >= 90 && totalmarks <= 100 && isfinalexam) {
    grade.innerHTML = "Grade A+";
  } else if (totalmarks >= 95 && totalmarks <= 100) {
    grade.innerHTML = "Grade A+";
  } else {
    grade.innerHTML = "No Grade";
  }


});
/********************************************************************** */
// Question No 09:
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
let firstnumber = document.getElementById("FirstInteger");
let secondnumber = document.getElementById("SecondInteger");
let findsum = document.getElementById("checksum");
let result11 = document.getElementById("result1");

findsum.addEventListener('click', () => {
  let firstinteger = parseInt(firstnumber.value);
  let secondinteger = parseInt(secondnumber.value);
  let sum = firstinteger + secondinteger;
  if (sum > 50 && sum < 80) {
    result11.innerHTML = "65";
  }
  else {
    return 80;
  }
});

/****************************************************************************** */
// Question No 10:
//Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.


let forloop = document.getElementById("Forloop");

forloop.onclick = function () {
  let startnumber = document.getElementById("StartInteger").value;
  let Endnumber = document.getElementById("EndInteger").value;
  // let startInteger = parseInt(startnumber.value);
  // let endinteger = parseInt(Endnumber.value);

  for (let i = startnumber; i < Endnumber; i++) {
    if (i % 2 == 0) {
      document.getElementById("result2").innerHTML += `${i}  is even <br>`;
    } else {
      document.getElementById("result2").innerHTML += `${i}  is odd <br>`;
    }
  }


}
/*************************************************************************************** */
//Question No 11:
//Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.getElementById("result3").innerHTML += `${i} FizzBuzz <br>`;
  }


  else if (i % 5 === 0) {
    document.getElementById("result3").innerHTML += `${i} Buzz <br>`;
  }
  else if (i % 3 === 0) {
    document.getElementById("result3").innerHTML += `${i} Fizz <br>`;

  }
   else
   document.getElementById("result3").innerHTML+= `${i} <br>`
}
/*************************************************************************************** */
//Question No 12:
//Write a JavaScript program to find the Armstrong numbers of 3 digits.



/******************************************************************************** */
//Question No 13:
//Write a JavaScript program to sum 3 and 5 multiples under 1000.

let sum=0;
for(let i=1; i<1000; i +=1){
  if(i%3==0 || i%5==0){
    sum +=i;
  }
  
}
document.getElementById("result5").innerHTML="the sum is "+sum;


/*************************************************************************** */
//Question No 14:
// Calculate the sum of all the numbers in the following array
let numbersArray = [1,13,22,123,49]
let sumArray=0;
for(var i=0;i<numbersArray.length;i++){
  sumArray += numbersArray[i];
}
document.getElementById("result6").innerHTML= `The Sum is   ${sumArray}`;

/************************************************************************** */
//Question No 15:
//Write a program that determines whether a given number is positive or negative.

 let btn = document.getElementById("EvenOddnumber");

  btn.addEventListener('click',()=>{
    let num=document.getElementById("PositiveNegative").value;
    if(num>0){
      console.log("The number is positive");
      document.getElementById("result7").innerHTML="The number is positive";
    }
    if(num<0) {
      console.log("negative")
      document.getElementById("result7").innerHTML= "The number is negative";
    }
    if (num==0){
      console.log("zero")
      document.getElementById("result7").innerHTML= "The number is zero";
    }
    
  });
/********************************************************************************** */
//Question No 16:
//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
let ageOfGender=document.getElementById("EnterAge");
ageOfGender.addEventListener("click",()=>{
  let age=parseInt(document.getElementById("Age").value);
  if(age<12){
    document.getElementById("result8").innerHTML="the ticket price is 5";
  }else if(age>11 && age<18){
    document.getElementById("result8").innerHTML="the ticket price is 10";

  }
  else if (age>17 && age<60){
    document.getElementById("result8").innerHTML="the ticket price is 20";

  }else if (age>59){
    document.getElementById("result8").innerHTML="the ticket price is 15";

  }else{
    document.getElementById("result8").innerHTML="Please Enter a valid age";

   
  }
});
/********************************************************************************* */
//Question No 17:
//Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let Enterprice= document.getElementById("Priceitem");


Enterprice.addEventListener('click',()=>{
  let price= parseInt(document.getElementById("EnterPrice").value);
  if(price>=50 && price<100){
    document.getElementById("result9").innerHTML="The discount on  " + price + " amount is 10%";
  }
  else if (price >=100)
    {
      document.getElementById("result9").innerHTML="The discount on " + price + " amount is 20%";
    }else{
      document.getElementById("result9").innerHTML="The discount on " + price + " amount is 0%";
    }
});

/************************************************************************************* */
//Question No 18:
//Get the sum of two arrays…actually the sum of all their elements.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
let sum1=0;
let sum2=0;
let totalsum =0;
for(let i=0;i<arr_1.length;i++){
  sum1 +=arr_1[i];
  document.getElementById("result10").innerHTML ="The sum of arr_1 is : " + sum1;


}
for(let j=0;j<arr_2.length;j++){
  sum2 +=arr_2[j];
  document.getElementById("result11").innerHTML ="The sum of arr_2 is :  " + sum2;
}
  
totalsum=sum1+sum2;
document.getElementById("result12").innerHTML = "The sum of arr_1 and arr_2 :  " + totalsum;

/************************************************************************************* */
//Question No 19:
//Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let reversearr ="";
for(let i=arr.length-1;i>=0;i--){
  reversearr +=arr[i] + "   ";
 document.getElementById("result13").innerHTML = `The reverse array is [ ${reversearr} ] `;
  
}
/*********************************************************************************** */
//Question No 20:
//Given a number n Calculate the factorial of the number


let findFactorial = document.getElementById("FactorialNumber");

findFactorial.addEventListener('click', () => {
  let num = parseInt(document.getElementById("EnterNumber").value);
  let fact = 1;
  if (num < 0) {
    document.getElementById("result14").innerHTML = "Please Enter a Positive Number";
  } else if (num === 0) {
    document.getElementById("result14").innerHTML = `The factorial of ${num} is 1`;
  } else {
    for (let i = 1; i <= num; i++) { // initialize i with 1 and increment in each iteration
      fact *= i;
    }
    document.getElementById("result14").innerHTML = `The factorial of ${num} is ${fact}`;
  }
});
/********************************************************************************************** */
