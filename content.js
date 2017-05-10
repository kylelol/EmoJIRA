
//Max Attempts
var maxAttempts = 10;
var totalAttempts = 0;

//Attempt to get Elements
var elements = document.getElementsByClassName('ghx-field-icon');

//Wait for load
waitForReady(onwardFunction, fallbackFunction);

//Recursive loop to check if elements are returned. Otherwise continue to wait.
function waitForReady(callback, fallback) {

  if(totalAttempts >= maxAttempts) {
    fallback();
  } else {
    totalAttempts++;

    setTimeout(function(){
      if(elements.length > 0) {
        callback();
      }
      else {
        waitForReady(callback);
      }
    }, 100);
  }
}

//Continue with your code execution within this function
function onwardFunction() {

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var node = element.attributes['data-tooltip']
    var attribute = node.nodeValue

    //TODO: Add more issue types and priorities. 
    if (attribute == "Bug") {
      element.replaceWith(document.createTextNode("🐛"));
    } else if (attribute == "Story") {
      element.replaceWith(document.createTextNode("✨"))
    } else if (attribute == "Improvement") {
      element.replaceWith(document.createTextNode("⚒"))
    }
  }
}

//fallback function if elements were not found within max attempts
function fallbackFunction() {
  console.log("Could not find all the needed elements");
}
