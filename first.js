// Needs to have math in the main file???  Is there a better way?
// May have to switch to an array for permutations vs using pure random.
// Going to add some more text just to test out git.



// function WinningHorse() not needed any more.  Used for an older random number
// generator without weights.  Now using newRandomHorse() function.

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
	//Old code
//	var FirstPlace = WinningHorse();


	// New code
	// OK, now that I have weighted values, I need a way to map numbers
	// to actual names.
	var FirstPlace = newRandomHorse();
	// End new code
	
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


function newRandomHorse()
{
	var horses=["1", "2", "3", "4", "5", "6"];
	var horseweight=[40, 5, 20, 10, 5, 20];
	var totalhorse=eval(horseweight.join("+"));
	var weighedhorse=new Array();
	var currenthorse=0;

	while (currenthorse<horses.length){
		for(i=0; i<horseweight[currenthorse]; i++)
			weighedhorse[weighedhorse.length]=horses[currenthorse]
		currenthorse++;
	}

	var randomhorse=Math.floor(Math.random()*totalhorse);
	return weighedhorse[randomhorse];
}
