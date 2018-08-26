

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

    $("#randomNumberBox").on("click", function() {          //random number box works on click
        console.log("RANDOM NUMBER BOX WORKING ON CLICK")
        $("#numbobox").text(Math.floor((Math.random() * 150) + 1))
    }) 

    if (numbobox === cactiPrick) {
    $('body').css('background-image', 'url(../images/rain)');
    //else if (numbobox === cactiPrick + 1) {
    //    $("losses").text(++);
    //}
    }

})

//loop tht generates a random number
//then attaches (by an attribute-- you could use value, or data-value) the elements to a cacti



//next step
//random number is assigned to the random number box

//next step
//random number is assigned to cacti---i probably should limit the numbers that can be chosen ( a certain height)


//random number assigned to crystal is shown in box???

//each time a cacti is clicked, its random number adds to the total score

//if the total score reaches the same exact number as the random number chosen, a win happens

//if a win happens, it starts "raining!"


//this works!!! use it!!!

            // if (cactipoints === radnomnumber) {
            // $('body').css('background-image', 'url(../images/rain)');
            // }

            
//if the total score reaches a higher number than the random number, a loss happens.

//when game restarts, the number of games played goes up by one.


//make sure all photos work together to add numbers??