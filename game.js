var  buttonColors=["red","blue","green","yellow"];

var  gamePattern=[];

var userClickedPattern=[];

var started=false;

var level= 0;

$(document).keypress(function(){
    if(!started){
            $("#level-title").text("level"+ level);
            nextSequence();
            started=true;
    }
})

$(".btn").click (function(){

var userChosenColour=$(this).attr("id");

userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);


})

function checkAnswer(currentlevel1){
    if(gamePattern[currentlevel1]==userClickedPattern[currentlevel1]){
        console.log("success");
        if(userClickedPattern.length==gamePattern.length){
              setTimeout(function(){
                nextSequence();
              },1000);
        }
    
        
    } else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
     $("#level-title").text("Game Over!,Press any key to start");
   startOver();
    }
}
function nextSequence(params) {
    userClickedPattern=[];

    level++;

    $("#level-title").text("Level"+ level);

    var randomNumber= Math.floor(Math.random()*4);
    
    var randomChoosencolor=buttonColors[randomNumber];

    gamePattern.push(randomChoosencolor);

    $("#" + randomChoosencolor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosencolor);
    animatePress(randomChoosencolor);

   


}



function playSound(name){
    var audio = new Audio(name + ".mp3");
    audio.play();
}


function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    
    
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
} , 100);


}
 function startOver(){
    level=0;
    gamePattern=[];
    started=false;
 }