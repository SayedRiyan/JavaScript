/*In javascript, there are 3 types of function is use to show a output on the screen,
    1.alert();
    2.document.write();
    3/console.log();
    ***In html type file, we have to store the <script> tag in end of a <body> element.
    to add a external .js , we have to write this at the bottom of body-(<script src=""></script>).
    to convert data type-(toString()) and then store it at the keywords .
    ***Use of functions-
        1.prompt()-used for get input from user

*/



/*

    //var tst = prompt("Enter some characters : ")
    //document.write("There are " + tst.charAt(2) + " characters" );

    //var firstn = prompt("Fisrt Name : ");
    //var lastn = prompt("Last Name : ");
    //var fulln = firstn + lastn;
    // document.write(fulln + " and " + fulln.length +" and " + fulln.toUpperCase() + " and the 2nd position word is " + fulln.charAt(2));
*/

/*
   var num1 = prompt("Input a first number = ");
   var num2 = prompt("also put a number to do addition = ");
   num1 = parseInt(num1,10);
   num2 = parseInt(num2,10);//continue from here.

   var pls = num1 + num2;
   document.write("The result is = " + pls + "<br/>");

   var mns = num1 - num2;
   document.write("The result is = " + mns + "<br/>");

   var gun = num1 * num2;
   document.write("The result is = " + gun + "<br/>");

   var vag = num1 / num2;
   document.write("The result is = " + vag + "<br/>");
*/
       



/*
   var tem = prompt("Enter tempareture = ");
   tem  = parseInt(tem,10);
   var conv = ((tem*9) + 160)/5;
   document.write("Today's Weather is : " + conv + " F")
*/

/*
    var marks = prompt("Enter your marks : ");

    if(marks >= 100 || marks <=0)
    document.write("Invalid marks");

    else if(marks >= 80 && marks <= 100)
    document.write("Your Grade is : A+ ");
            
    else if(marks >= 70 && marks <= 79)
    document.write("Your Grade is : A ");

    else if(marks >= 60 && marks <= 69)
    document.write("Your Grade is : A-");

    else if(marks >= 50 && marks <= 59)
    document.write("Your Grade is : B ");

    else if(marks >= 40 && marks <= 49)
    document.write("Your Grade is : C ");

    else if(marks >= 33 && marks <= 39)
    document.write("Your Grade is : D ");

    else
    document.write("You Failure ");
*/
    

/*
  var letter = prompt("Enter a letter : ");

  letter = letter.toLowerCase();

  switch(letter)
  {

    case "a" : 
    document.write("vowel");
    break;

    case "e" : 
    document.write("vowel");
    break;

    case "i" : 
    document.write("vowel");
    break;

    case "o" : 
    document.write("vowel");
    break;

    case "u" : 
    document.write("vowel");
    break;

    default : 
    document.write("consonant");

  }

*/
    
/*
  var m = parseInt(prompt("Enter first num : "));
  var n = parseInt(prompt("Enter last num : "));
  var sum = 0;

  for (var x = m; x <= n ; x = x + 1) 
  {

    sum = sum + x;
    
  }

  document.write("The sum is : " + sum + "<br/ >");
   
*/
    

/*
  Use of ternary oparetor - 
  //var name ? string : string;
  for example - 

  var num = Number(prompt("Enter a number : "));

  num > 0 ? document.write("positive") : num < 0 ? document.write("negitive") : document.write("Zero");

*/

/*
  //function work varity
  //muiltyply works with function like create a function, calling a function, pass value in function, return a function.
  function square (num)
  {
    var result = num * num ;
    document.write("The Result is : " + result);
  } 
    square(prompt("The number is : "));

*/

//IIFEs( Immediatly Invocable Function Expressions )

(function display() 
{
    document.write(prompt("Give an Input "));

})();
display();
 
