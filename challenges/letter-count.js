
function letterCount (string) {
  var letterTracker = {};
  var array = string.split("");
    array.forEach(function(element) {

    // the for loop is not confusing me. shifting to forEach for (var i = 0; i < array.length; i++) {
    //   var letter = array[i];

  if (letterTracker[element]){
    letterTracker[element] +=1;
  } else {
    letterTracker[element] = 1;
  }

});
return letterTracker;
} // return actually needs to be defined, durr,
  // ie, all of these functions compile the data in
  // the object 





//   letterCount("apple");

// keys should be letters , ie without the loop,
// array[i] gets the 'a' in apple with i=0




// function letterCount ()
//     var string = ("");
//     function letterCount () {
//     var arr= [""]
//

}
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
