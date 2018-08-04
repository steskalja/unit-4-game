$( document ).ready(function() {
  var targetNumber;
  function setTarget(){
    targetNumber = Math.floor(Math.random() * 300);
  }
  
  setTarget();

  $("#ntg").text(targetNumber);

  var counter = 0;

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
      counter = 0
      $("#ys").text(counter);
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      counter = 0;
      $("#ys").text(counter);
    }

  });
});