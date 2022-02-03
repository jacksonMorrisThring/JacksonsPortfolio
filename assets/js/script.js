var rootEl = $('#root');
var jumbotronEl = $('#jumbotron');

// var myNameEl = $('#myName');
// myNameEl.text("Jacksons Portfolio");
// rootEl.append(myNameEl);

var learnMoreButton = $('#learnMore');

function handleLearnMoreButton(){
    console.log("button pressed");
    jumbotronEl.attr("display", "none");
}



learnMoreButton.on('click', handleLearnMoreButton);

