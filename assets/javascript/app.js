var timer = 30;
var incorrect = 0;
var correct = 0;


$(document).ready(function(){
    $("#container").hide();
    $("#results").hide();
    //($"#footer").show();

    $("#restartButton").on("click" , function(){
        $("#results").hide();
        $("#container").show();
        timer = 30;
        correct = 0;
        incorrect = 0;
        startTime();
    })

    $("#startButton").on("click", function() {
        $("#starter").hide();
        $("#container").show();
        startTime();
        return;
    })

    function countdown() {
        timer --;
        $("#seconds").html(timer + " Seconds");
        $("#endButton").on("click" , function(){
            timer = 0;
            return;
            
        }) 

        if(timer == -1) {
            checkAnswers();
            $("#container").hide();
        }
    }

    function startTime() {
        setInterval(countdown, 1000);
    }

    function checkAnswers() {   
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    
    if (q1 == "0") {
        correct++;
    } 
    else if (q1 == "1") {
        incorrect++;
    }
    if (q2 == "0") {
        correct++;
    }
    else if(q2 == "1") {
        incorrect++;
    }
    if (q3 == "0") {
        correct++;
    }
    else if (q3 == "1") {
        incorrect++;
    }
    if (q4 == "0") {
        correct++;
    }
    else if(q4 == "1") {
        incorrect++;
    }

    if (correct == 4) {
        $("#timesUp").html("I guess you do my lord.");
        $("#image").show();

    }
    else if (correct < 4) {
        $("#timesUp").html("Haha you loser!");
        
    }

    $("#correctAnswers").html(correct);
    $("#incorrectAnswers").html(incorrect);

    $("#results").show();
    }


});


