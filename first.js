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

function results()
{
	var FirstPlace = WinningHorse();
	var wager = Number(Amount.value);

	const ANNOUNCEMENT = "The winning horse number:  ";
	const UPDATEDBALANCE = "Your new balance is: ";

	const YOUWIN = "Congratulations!  You win!  Race again?";
	const YOULOSE = "Sorry, not a winner.  Race again?";

	document.getElementById('FirstHorse').innerHTML = ANNOUNCEMENT+FirstPlace;

	if(isWinner(document.getElementById('UserGuess').value, FirstPlace)){
		document.getElementById('RaceResults').innerHTML = YOUWIN;
		bank.balance += wager;}
	else{
		document.getElementById('RaceResults').innerHTML = YOULOSE;
		bank.balance -= wager}


	document.getElementById('BalanceStatement').innerHTML = UPDATEDBALANCE+bank.balance;
}


function isWinner(guess, winner)
{
	if(guess == winner){
		return true;
	}
	else{
		return false;}
}


function getBalance()
{
	document.write(bank.balance);
}


