// Needs to have math in the main file???  Is there a better way?
// May have to switch to an array for permutations vs using pure random.
// Going to add some more text just to test out git.
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

function CompTest(x, amount, FirstPlace)
{
	var Check = 0;
	if(x == FirstPlace){
		Check = "  Good job!  You Won!  Collect!";
	}
	else{
		Check = "  Sorry, you did not pick the winning horse.";
	}
	return Check;
}

function results()
{
	var FirstPlace = WinningHorse();
	const myString1 = "The Winning Horse is: ";
	const myString2 = CompTest(document.getElementById('UserGuess').value, document.getElementById('Amount'), FirstPlace);

	document.getElementById('Race').innerHTML = myString1+FirstPlace+myString2;
}

