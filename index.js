//this code hides the help button when the page is loaded.
$(document).ready(function () {
    $("#a0110-open-help").slideToggle(1)
});

//this code slide closes the game description window, slide opens the help button.
$("#a0110-close-help").click(function () {
  $("#game-desc").slideToggle(300);
  $("#a0110-open-help").delay(300).slideToggle(300)
});

$("#a0110-open-help").click(function () {
    $("#game-desc").slideToggle(300);
    $("#a0110-open-help").slideToggle(300)
})


