// Just a test function to see if I have this right..
function toDo()
{
  window.document.write("Here are a few things I need to do to begin a test program (horse racing):<br>");
  window.document.write("I need a random generator,<br>");
  window.document.write("I also need to get an input from user.<br>");
  window.document.write("First iteration, random 1-6, get input from user (with error checking), compare and output if it's a winner.<br>");
  window.document.write("Second iteration, add odds tables and wagers.<br>");
  window.document.write("Third iteration, get the full rankings of horses.<br>");
}

// Needs to have math in the main file???  Is there a better way?
// May have to switch to an array for permutations vs using pure random.
function WinningHorse()
{
  function GetRandomHorse(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
 return GetRandomHorse(1, 6);
}


