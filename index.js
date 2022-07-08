//this code adjust the document for start.
$(document).ready(function () {
  //this line hides the help button,
  //I don't know why I just did not hide the
  //button in css then update the class to show it.
  //slideToggle looks better I think.
  $("#a0110-open-help").slideToggle(1);

  //same as above, hides the color layout panel.
  $("#color-layout-panel").slideToggle(1);

  //this line randomizes the box color for the game start.
  for (let index = 1; index < 5; index++) {
    var colors = ["#F9F2ED", "#3AB0FF", "#FFB562", "#F87474"];

    shuffleList(colors);
    setTimeout(function () {
      $("#box-" + index + "-id").css("color", colors[index - 1]);
    }, 300);
  }
});

//this code creates the behavior of Close Help button.
$("#a0110-close-help").click(function () {
  $("#game-desc").slideToggle(300);
  $("#a0110-open-help").delay(300).slideToggle(300);
});

//this code creates the behavior of Close Layout button behavior.
$("#color-layout-button").click(function () {
  $("#color-layout-panel").slideToggle(300);
});

//this code creates the behavior of help button.
$("#a0110-open-help").click(function () {
  $("#game-desc").slideToggle(300);
  $("#a0110-open-help").slideToggle(300);
});

//this code slices the colorhunt URL and assigns them to an array.
// This line is deprecated, however, I'm keeping this just in case.
// $("#submit-link-button").click(urlSlicer);

//this code assigns the colors obtained from the URL to boxes randomly.
$("#apply-new-color-button").click(colorAssigner);

// thanks ->>>>> https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
function shuffleList(list) {
  let listLength = list.length;
  while (0 !== listLength) {
    let randomId = Math.floor(Math.random() * listLength);
    listLength -= 1;

    let temporary = list[listLength];
    list[listLength] = list[randomId];
    list[randomId] = temporary;
  }
  return list;
}

function urlSlicer() {
  var colorhuntURL = $("#colorhunt-url").val();
  console.log(colorhuntURL);
  var hexSliced = colorhuntURL.slice(-24);
  console.log(hexSliced);

  var gatheredColors = [
    "#" + hexSliced.slice(0, 6),
    "#" + hexSliced.slice(6, 12),
    "#" + hexSliced.slice(12, 18),
    "#" + hexSliced.slice(18),
  ];
  for (let index = 0; index < gatheredColors.length; index++) {
    console.log("color " + (index + 1) + " is " + gatheredColors[index]);
  }

  return gatheredColors;
};

function colorAssigner() {
  var gatheredColors = urlSlicer();
  for (let index = 1; index < 5; index++) {
    console.log(gatheredColors[index-1]);
    if (gatheredColors.length === 4) {
      var colors = [
        gatheredColors[0],
        gatheredColors[1],
        gatheredColors[2],
        gatheredColors[3],
      ];
    } else {
      var colors = ["#F9F2ED", "#3AB0FF", "#FFB562", "#F87474"];
    }

    // shuffleList(colors);
    $("#box-" + index + "-id").css("color", colors[index - 1]);
  }

  return colors;
};
