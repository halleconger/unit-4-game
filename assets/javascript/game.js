$(document).ready(function () {

    // Generate a random number between 19-120
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);

    // Generate a random number for each crystal between 1-12
    var blueImg = Math.floor(Math.random() * 11) + 1;
    var greenImg = Math.floor(Math.random() * 11) + 1;
    var redImg = Math.floor(Math.random() * 11) + 1;
    var yellowImg = Math.floor(Math.random() * 11) + 1;

    // Define variables
    var winsSpan = 0;
    var lossesSpan = 0;
    var userTotalSpan = 0;

    // Link variables to appear on screen
    $("#random").text(randomNumber);
    $("#wins").text(winsSpan);
    $("#losses").text(lossesSpan);
    $("#userTotal").text(userTotalSpan);

    $("blueCrystal").text(blueImg);
    $("greenCrystal").text(greenImg);
    $("redCrystal").text(redImg);
    $("yellowCrystal").text(yellowImg);

    // When a user wins, one point gets added to #wins
    // Reset
    function addPointForWin() {
        winsSpan++;
        $("#wins").text(winsSpan);
        reset();
    }

    // When a user loses, one point gets added to #losses
    // Reset
    function addPointForLoss() {
        lossesSpan++;
        $("#losses").text(lossesSpan);
        reset();
    }

    // Each time a crystal is clicked, the user's total 
    // will increase based on each crystal's random number
    // -- If user total is equal to random number
    // ---- you WIN and reset
    // -- If user total is greater than random number
    // ---- you LOSE and reset
    $("#blueCrystal").on("click", function () {
        userTotalSpan += blueImg;
        $("#userTotal").text(userTotalSpan);
        if (userTotalSpan === randomNumber) {
            addPointForWin()
        } else if (userTotalSpan > randomNumber) {
            addPointForLoss()
        }
    });
    $("#greenCrystal").on("click", function () {
        userTotalSpan += greenImg;
        $("#userTotal").text(userTotalSpan);
        if (userTotalSpan === randomNumber) {
            addPointForWin()
        } else if (userTotalSpan > randomNumber) {
            addPointForLoss()
        };
    });
    $("#redCrystal").on("click", function () {
        userTotalSpan += redImg;
        $("#userTotal").text(userTotalSpan);
        if (userTotalSpan === randomNumber) {
            addPointForWin()
        } else if (userTotalSpan > randomNumber) {
            addPointForLoss()
        };
    });
    $("#yellowCrystal").on("click", function () {
        userTotalSpan += yellowImg;
        $("#userTotal").text(userTotalSpan);
        if (userTotalSpan === randomNumber) {
            addPointForWin()
        } else if (userTotalSpan > randomNumber) {
            addPointForLoss()
        };
    });

    // Resets game after user has either won a point or lost a point
    function reset() {
        var randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random").text(randomNumber);
        var blueImg = Math.floor(Math.random() * 11) + 1;
        $("blueCrystal").text(blueImg);
        var greenImg = Math.floor(Math.random() * 11) + 1;
        $("greenCrystal").text(greenImg);
        var redImg = Math.floor(Math.random() * 11) + 1;
        $("redCrystal").text(redImg);
        var yellowImg = Math.floor(Math.random() * 11) + 1;
        $("yellowCrystal").text(yellowImg);
        userTotalSpan = 0;
        $("#userTotal").text(userTotalSpan);
    }


});