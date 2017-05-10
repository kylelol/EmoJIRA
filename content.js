/*console.log("DOING SOMETHING !!!!!")
var elements = document.getElementsByClassName('ghx-field-icon');
console.log("elements", elements)
console.log("****length", Object.values(elements).length)

for (var i = 0; i < elements.length; i++) {
  console.log("looping")
    var element = elements[i];
    console.log("elements", element.attributes.data-tooltip)

  /*  for (var j = 0; j < element.length; j++) {
        var node = element[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            console.log("text",text)
            var replacedText = text.replace(/[word or phrase to replace here]/gi, '[new word or phrase]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }*/

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
  console.log("elements", elements.length);
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var node = element.attributes['data-tooltip']
    var attribute = node.nodeValue

    if (attribute == "Bug") {
      console.log("let replace something")
      var replacedText = "🐛"
      element.replaceWith(document.createTextNode(replacedText));
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
