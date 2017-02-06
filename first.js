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

function doSomething(Winner)
{
	var x = document.getElementById("UserGuess").value;
	document.getElementById("demo").innerHTML = x;
}

function myFunction(Winner)
{
	var y = document.getElementById('Winner').value;
	return y
}

function CompTest(x, amount, FirstPlace)
{
	console.log(x);
	var Check = 0;
	if(x == FirstPlace){
		Check = "  Good job!  You Won!  Collect!";
	}
	else{
		Check = "  Sorry, you did not pick the winning horse.";
	}
	return Check;
}
