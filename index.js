// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // Target the paragraph element with id="text" and update its text content
    var textParagraph = document.getElementById("text");
    textParagraph.textContent = "This is really cool!";
  });
  
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  
  