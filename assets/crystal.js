// create an onclick that starts the game/
// create an random that generates that we have to match
// create an random generator for each gym.
// create an on click for them.
// create  an if statement and else statment
// create and if statement  about winning.
// add an counter to the win and loses.
// random number to guess === 19-120
// each crystal has a value from 1 -12

$(document).ready(function(){

let userScore = 0;
$('#totalOutcome').html(userScore);

function numbers () {
  let randNum =Math.floor(Math.random()*(120 - 19 + 1)+19);
  
  /* testing*/
// number doesnt return value  let randNum1 =Math.floor(Math.random()*(12 - 1 + 1)+1);
  // red crystal value
  console.log(randNum);
 // variable number displayed on html
  $('#captureNumber').html(randNum);

}
// crystal random numbers ====================================================================================
let randNum1 =Math.floor(Math.random()*(12 - 1 + 1)+1);
let randNum2 =Math.floor(Math.random()*(12 - 1 + 1)+1);
let randNum3 =Math.floor(Math.random()*(12 - 1 + 1)+1);
let randNum4 =Math.floor(Math.random()*(12 - 1 + 1)+1);
// crystal click functions begins ======================================================================================
  $('.red').on('click',function(){
    
   let game = $(this).attr('value',randNum1);
   let reds =$('.red').attr("value");
    console.log(reds);
    // function test :)
      // console.log("hey");
  })
  $('.blue').on('click',function(){
    
	let game = $(this).attr('value',randNum2);
	let blues =$('.blue').attr("value");
	 console.log(blues);
	 // function test :)
	   // console.log("hey");
   })
   $('.green').on('click',function(){
    
	let game = $(this).attr('value',randNum3);
	let greens=$('.green').attr("value");
	 console.log(greens);
	 // function test :)
	   // console.log("hey");
   })
   $('.yellow').on('click',function(){
    
	let game = $(this).attr('value',randNum4);
	let yellows =$('.yellow').attr("value");
	 console.log(yellows);
	 // function test :)
	   // console.log("hey");
   })

//=========================functions ends ================================================================================
//Global Variables-------------------------------------	----------
//Counter
let win = 0;
let loss = 0;
let finalScore;
				

//Functions------------------------------------------------------
	function reset()
	{
		//reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 randNum1 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum2 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum3 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;


		 $('#totalOutcome').html(finalScore);
		 start();
	}

	function start()
	{
		 //reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 randNum1 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum2 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum3 = Math.floor(Math.random() * (12 - 1) + 1);
		 randNum4= Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 
		 $('#outCome').html(finalScore);


		//When clicked saves to Final score
			//added the .off() because it will repeat the click twice without it and save the last number that
			// was clicked and push it to the total score during the next game.
		$('.crystal').off().on('click', function()
		{
			let  points1 = $(this).attr('value');
			//Adds to final score when clicked
			finalScore = parseInt(finalScore) + parseInt(points1);
			console.log('Crystal*  ' +  points1);
			console.log('finalScore***  ' + finalScore);
			$('#totalOutcome').html(finalScore);

             // code breaks the css.... why
			if(randNum === finalScore)
			{
				alert('win');
				win++;
				$('#wins').html(win);
				$('#totalOutcome').html(0);
				reset();
				
			}
			else if (finalScore > randNum)
			{
				alert('gameOver');
				loss++;
				$('#loses').html(loss);
				$('#totalOutcome').html(0);
				reset();
			}

		}); 


}

start();
});