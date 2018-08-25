


//PSUEDOCODING

//Photos connect to javascript
//onclick is created for each photo

//cacti 1
$(document).ready(function() {
    $("#cactus1").on("click", function() {
        console.log("working1")                 //crystal is clicked- console log works
    })
})






//cacti 2
$(document).ready(function() {
    $("#cactus2").on("click", function() {
        console.log("working2")
    })
})


//cacti 3
$(document).ready(function() {
    $("#cactus3").on("click", function() {
        console.log("working3")
    })
})

//cacti 4
$(document).ready(function() {
    $("#cactus4").on("click", function() {
        console.log("working4")
    })
})



//next step
//random number is assigned to the random number box

                                                        // $(document).ready(function() {
                                                        //     $("#randomNumberBox").on("click", function() {          //random number box works on click
                                                        //         console.log("RANDOM NUMBER BOX WORKING ON CLICK")
                                                        //         math.floor(Math.random("number");              //random number does not show up on sreen, and no random number is generated. this does show in console log.
                                                        //         console.log()          //random number is not being generated, clicks are being recorded.              
                                                            
                                                        //     })    
                                                        //     })

//next step
//random number is assigned to crystal---i probably should limit the numbers that can be chosen ( a certain height)


                        //cacti1
                        $(document).ready(function() {
                            $("#cactus1").on("click", function() {          //random number box works on click
                                console.log("RANDOM cacti 1 WORKING ON CLICK")
                                return Math.random();              //random number does not show up on sreen, and no random number is generated. this does show in console log.
                                console.log()        //random number is not generated, clicks re being recorded.                
                            })
                        })


//random number assigned to crystal is shown in box???

//each time a cacti is clicked, its random number adds to the total score

//if the total score reaches the same exact number as the random number chosen, a win happens

//if a win happens, it starts "raining!"

if (cacti1number === radnomnumber) {
    $(document).ready(function() {
        $('body').css('background-image', 'url(../images/rain)');
    });
}

//if it starts raining, audio by lil wayne plays

//if the total score reaches a higher number than the random number, a loss happens.

//when game restarts, the number of games played goes up by one.



//make sure all photos work together to add numbers??