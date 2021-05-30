/*2.	Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.

“Webmaster” -> “abeemrstw”
*/

function alphabet_order(stringInput)
  {
return stringInput.toLowerCase().split('').sort().join('');


  }
console.log(alphabet_order("webmaster"));



function ourSplit(singleString) {
  return singleString.split();
}
console.log(ourSplit("web"));

function ourSplit(singleString) {
  return singleString.split('').sort().join('');
}
console.log(ourSplit("dcba"));

// .split svako slovo odvaja u poseban string u novom arrayu. kada je samo split() onda jedan elemenat niza,
//a kada ima split('')odvoji svako slovo stringa u poseban element niza, a kada je razmak '  ' onda ide rec 

// sort() sortia po abecedi ili brojevima od 0,1,2

// join() odvaja pojedinacna slova sa zrezom i join('') pretvara u jedna string




/*3.	Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
*/

function alphabetize_string(stringInput) 
{
	
return stringInput.split(' ').sort().join('').trim();

}

console.log(alphabetize_string('Republic Of Serbia'));


/*4.	Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ]
*/

string_to_array = function (str) {
    return str.split(' ');
  };
  console.log(string_to_array("John Snow"));
  
  // trim() - Remove whitespace from both sides of a string, The trim() method does not change the original string.
  
  //  .split();  --->  [ 'John Snow' ]
  
  /*  .split('');  --->  
  
  [
    'J', 'o', 'h',
    'n', ' ', 'S',
    'n', 'o', 'w'
  ] */
  

  /*5.	Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."
*/


abbrev_name = function (str1) {
    var split_names = str1.split(" "); //["John", "Snow"]
    // if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    // }
    // return split_names[0];
  };
  console.log(abbrev_name("John Snow"));
  