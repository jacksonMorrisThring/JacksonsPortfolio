var rootEl = $('#root');
var jumbotronEl = $('#jumbotron');
var subCardOneEl = $('#subCardOne');
var subCardTwoEl = $('#subCardTwo');
var mainCardEl = $('#mainCard');
var astronmyAPIBtn = $("#astronomerAPI");
var tuitionBtn = $("#L2C");



// var myNameEl = $('#myName');
// myNameEl.text("Jacksons Portfolio");
// rootEl.append(myNameEl);

var learnMoreButton = $('#learnMore');

function handleLearnMoreButton(){
    jumbotronEl.attr("style", "display: none;");
    //Calls all other card diplay functions
    subCardOneEl.attr("style", "display: block;");
    subCardTwoEl.attr("style", "display: block;");
    mainCardEl.attr("style", "display: block;")


}



learnMoreButton.on('click', handleLearnMoreButton);

astronmyAPIBtn.on("click", function(){
    console.log("button clicked!");
    document.location.href = "https://jacksonmorristhring.github.io/simulartedStargazingEnvironment/";

})

tuitionBtn.on("click", function(){
    console.log("button clicked!");
    document.location.href = "https://jacksonmorristhring.github.io/Learn2Code_tuition/";

})