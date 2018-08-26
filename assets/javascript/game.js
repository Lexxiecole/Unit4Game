

//cacti 1
$(document).ready(function() {
    //create variables
    var cactusOne = Math.floor((Math.random() * 12) + 1)
    console.log(cactusOne);

    var cactusTwo = Math.floor((Math.random() * 12) + 1)
    console.log(cactusTwo);

    var cactusThree = Math.floor((Math.random() * 12) + 1)
    console.log(cactusThree);

    var cactusFour = Math.floor((Math.random() * 12) + 1)
    console.log(cactusFour);

    var numboBox = Math.floor((Math.random() * 150) + 1)
    console.log(numboBox);
    
    var cactiPrick = 0;

    var wins = 0;
    var losses = 0;


    //cactus1
    $("#cactus1").on("click", function() {
        //console.log("working1")
        cactiPrick = cactiPrick + cactusOne;
        console.log (cactiPrick) 
        $("#ccactiPointzNumba").text(cactiPrick)
    })                                       //click function works for cactus 1

    $("#cactus2").on("click", function() {
        //console.log("working2")
        cactiPrick = cactiPrick + cactusTwo;
        console.log (cactiPrick) 
        $("#ccactiPointzNumba").text(cactiPrick)
    })
    $("#cactus3").on("click", function() {
       // console.log("working3")
       cactiPrick = cactiPrick + cactusThree;
       console.log (cactiPrick) 
       $("#ccactiPointzNumba").text(cactiPrick)
    })
    $("#cactus4").on("click", function() {
        //console.log("working4")
        cactiPrick = cactiPrick + cactusFour;
        console.log (cactiPrick) 
        $("#ccactiPointzNumba").text(cactiPrick)
    })

    $("#randomNumberBox").on("click", function() { 
        console.log("RANDOM NUMBER BOX WORKING ON CLICK")
        $("#numbobox").text(Math.floor((Math.random() * 150) + 1))
    }) 

    if (numbobox === cactiPrick) {
    $("background").css("background-image", "url(../images/rain)");
    //else if (numbobox === cactiPrick + 1) {
    //    $("losses").text(++);
    //}
    }

})