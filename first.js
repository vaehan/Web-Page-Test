function myFunction()
{
window.document.write("Testing only - this text is coming from a separate file and a separate style sheet should also control the size of this text.");
}

function toDo()
{
  window.document.write("Here are a few things I need to do to begin a test program (horse racing):<br>");
  window.document.write("I need a random generator,<br>");
  window.document.write("I also need to get an input from user.<br>");
  window.document.write("First iteration, random 1-6, get input from user (with error checking), compare and output if it's a winner.<br>");
  window.document.write("Second iteration, add odds tables and wagers.<br>");
}

// Needs to have math in the main file???  Is there a better way?
function WinningHorse()
{
  function GetRandomHorse(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  window.document.write("testing function inside")'
  var theHorse = GetRandomHorse(1, 6);
  window.document.write(theHorse);
}


