var userPoints = 0;
var computerPoints = 0;
var total = 0;


$(document).ready(function(){

// events
$("img").click(game);
$("img").click(winner);
$("button").click(reset);


// functions

function game (){

// User Choice
    var userChoice =  $(this).data("option");

    $("#userOutput").text(`Your chose ${userChoice}`);

// Computer choice
var computerChoice = Math.floor(Math.random() * 5) + 1;

//value assignation
if( computerChoice === 1)
{
    computerChoice = "Rock";
}
else if (computerChoice === 2)
{
    computerChoice = "Paper";
}
else if (computerChoice === 3)
{
    computerChoice = "Scissors";
}
else if (computerChoice === 4)
{
    computerChoice = "Lizard";
}
else if (computerChoice === 5)
{
    computerChoice = "Spock";
}

$("#computerOutput").text(`Computer chose ${computerChoice}`);


//unique id
var combineChoices = userChoice + computerChoice;

// If the user chose rock...
if( combineChoices === "RockRock")
{
    // tie
    $("#resultOutput").text("Tie!!!");
}
else if ( combineChoices === "RockPaper" ) 
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Paper covers rock. You lost this round :(");
}
else if ( combineChoices === "RockScissors" )
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Rock crushes scissors. You won this round!");
}

else if ( combineChoices === "RockLizard" )
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Rock crushes lizard. You won this round!");
}
else if ( combineChoices === "RockSpock" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Spock vaporizes rock. You lost this round :(");
}

//If the user chose Paper...
if( combineChoices === "PaperRock")
{
    // User win
    userPoints += 1;
    $("#resultOutput").text("Paper covers rock. You win this round!");
}
else if ( combineChoices === "PaperPaper" ) 
{
    // tie
    $("#resultOutput").text("Tie!!!");
}
else if ( combineChoices === "PaperScissors" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Scissors cuts paper. You lost this round :(");
}

else if ( combineChoices === "PaperLizard" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Lizard eats paper. You lost this round :(");
}
else if ( combineChoices === "PaperSpock" )
{
    // User win
    userPoints += 1;
    $("#resultOutput").text("Paper disproves spock. You won this round!");
}

//If the user chose Scissors...
if( combineChoices === "ScissorsRock")
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Rock crushes scissors. You lost this round :(");
}
else if ( combineChoices === "ScissorsPaper" ) 
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Scissors cuts paper. You won this round!");
}
else if ( combineChoices === "ScissorsScissors" )
{
    // tie
    $("#resultOutput").text("Tie!!!");
}

else if ( combineChoices === "ScissorsLizard" )
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Scissors decapitates lizard. You won this round!");
}
else if ( combineChoices === "ScissorsSpock" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Spock smashes scissors. You lost this round :(");
}

//If the user chose Lizard...
if( combineChoices === "LizardRock")
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Rock crushes lizard. You lost this round :(");
}
else if ( combineChoices === "LizardPaper" ) 
{
    // User win
    userPoints += 1;
    $("#resultOutput").text("Lizard eats paper. You won this round!");
}
else if ( combineChoices === "LizardScissors" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Scissors decapitates lizard. You lost this round :(");
}

else if ( combineChoices === "LizardLizard" )
{
    // tie
    $("#resultOutput").text("Tie!!!");
}
else if ( combineChoices === "LizardSpock" )
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Lizard poisons spock. You won this round!");
}

//If the user chose Spock...
if( combineChoices === "SpockRock")
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Spock vaporizes rock. You won this round!");
}
else if ( combineChoices === "SpockPaper" ) 
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Paper disproves spock. You lost this round :(");
}
else if ( combineChoices === "SpockScissors" )
{
    // User won
    userPoints += 1;
    $("#resultOutput").text("Spock smashes scissors. You won this round!");
}

else if ( combineChoices === "SpockLizard" )
{
    // User lost
    computerPoints += 1;
    $("#resultOutput").text("Lizard poisons spock. You lost this round!");
}
else if ( combineChoices === "SpockSpock" )
{
    // tie
    $("#resultOutput").text("Tie!!!");
}

$("#userScore").text(userPoints.toFixed());
$("#computerScore").text(computerPoints.toFixed());

}

function winner(){

    if ( userPoints > 2 || computerPoints > 2 || total > 3 )
    {
        reset();
    }
    else if (userPoints === 2)
    {
        $("#winnerOutput").text("User is the winner!");
    }
    else if(computerPoints === 2)
    {
        $("#winnerOutput").text("Computer is the winner!");
    }
}

function reset (){
    userPoints = 0;
    computerPoints = 0;

    $("#userScore").text(userPoints.toFixed());
    $("#computerScore").text(computerPoints.toFixed());

    $("#userOutput").text("");
    $("#computerOutput").text("");
    $("#resultOutput").text("");
    $("#winnerOutput").text("");
}


});