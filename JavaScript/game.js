
    //each time you click a crystal, you add a value to your total score, 
    //idea is to match your total score to the number 
    //if you match the score, then you increase your win count by 1 
    //random number is reset

$(document).ready(function () {
    //variables 

    // win count
    let wins = 0

    // loss count
    let losses = 0

    //total of guesses added together
    let userGuessTotal = 0
    $("#number-match").text("Guess Count: " + userGuessTotal)

    //Computer match number
    let numberMatch = numberMatchGenerator()
    $("#user-guess-total").text("Target Number: " + numberMatch)

    // console.log(numberMatch)

    // Crystal Count
    let crystalValueOne = crystalValueGenerator()
    $("#crystalOne").attr("data-crystalvalue", crystalValueOne)
    // console.log(crystalValueOne)

    let crystalValueTwo = crystalValueGenerator()
    $("#crystalTwo").attr("data-crystalvalue", crystalValueTwo)
    // console.log(crystalValueTwo)

    let crystalValueThree = crystalValueGenerator()
    $("#crystalThree").attr("data-crystalvalue", crystalValueThree)
    // console.log(crystalValueThree)

    let crystalValueFour = crystalValueGenerator()
    $("#crystalFour").attr("data-crystalvalue", crystalValueFour)
    // console.log(crystalValueFour)


    //functions

    //the crystal value that the user is adding (randomly generated 1-12) --> store this number 
    function crystalValueGenerator(element) {
        return Math.floor(Math.random() * 12) + 1;
    }

    //the computer randomly generated number (19-120) 
    function numberMatchGenerator(element) {
        return Math.floor(Math.random() * 102) + 19;
    }

    function restartGame(element) {
        userGuessTotal = 0
        $("#number-match").text("Guess Count: " + userGuessTotal)
    
        numberMatch = numberMatchGenerator()
        $("#user-guess-total").text("Target Number: " + numberMatch)

        crystalValueOne = crystalValueGenerator()
        $("#crystalOne").attr("data-crystalvalue", crystalValueOne)

        crystalValueTwo = crystalValueGenerator()
        $("#crystalTwo").attr("data-crystalvalue", crystalValueTwo)

        crystalValueThree = crystalValueGenerator()
        $("#crystalThree").attr("data-crystalvalue", crystalValueThree)

        crystalValueFour = crystalValueGenerator()
        $("#crystalFour").attr("data-crystalvalue", crystalValueFour)

    }

    $(".crystals").on("click", function () {
        var crystalValueAdd = ($(this).attr("data-crystalvalue"));
        crystalValueAdd = parseInt(crystalValueAdd);
        userGuessTotal += crystalValueAdd;
        $("#number-match").text("Guess Count: " + userGuessTotal)

        if (userGuessTotal === numberMatch) {
            alert("You Win!!!");
            wins++;
            $("#loss-total").text("Wins: " + wins)
            restartGame();
        } else if (userGuessTotal >= numberMatch) {
            alert("You Lose!!!");
            losses++;
            $("#win-total").text("Losses: " + losses);
            restartGame();
        }
        console.log(userGuessTotal)
    })
    
});
