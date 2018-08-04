$( document ).ready(function() {
  var targetNumber;


  var gameSettings = {
      "setTarget": function(){
        targetNumber = Math.floor(Math.random() * 300);
      },
      "restartGame": function(){
        $("#ys").text(counter);
        gameSettings.setTarget();
        $("#ntg").text(targetNumber);
      }
  };

  function createButton(){
    var iDiv = $("<div>")
    iDiv.addClass("col-lg-3");
    var rButton = $("<button type=\"button\">");
    rButton.addClass("btn btn-secondary greset");
    rButton.text("Reset Game");
    iDiv.append(rButton);
    $("#btns").append(iDiv);
  }
  createButton();
  gameSettings.setTarget();

  $("#ntg").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  $("#wns").text(wins);
  $("#los").text(losses);



  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.

  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal

    var iDiv = $("<div>")
    iDiv.addClass("col-lg-3");
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");
    switch(i)
    {
        case 0:
        imageCrystal.attr("src", "./assets/images/img1.jpg");
        break;
        case 1:
        imageCrystal.attr("src", "./assets/images/img2.jpg");
        break;
        case 2:
        imageCrystal.attr("src", "./assets/images/img3.jpg");
        break;
        case 3:
        imageCrystal.attr("src", "./assets/images/img4.jpg");
        break;

    }

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    iDiv.append(imageCrystal);

    $("#crystals").append(iDiv);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
 
    counter += crystalValue;

    $("#ys").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      $("#wns").text(wins);
      counter = 0
      gameSettings.restartGame();
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#los").text(losses);
      counter = 0;
      gameSettings.restartGame();
    }

  });

  $(".greset").on("click", function() {
      wins = 0;
      losses = 0;
      counter = 0;
      $("#wns").text(wins);
      $("#los").text(losses);
      gameSettings.restartGame();

  });

});