var score = 0;
var daddyScore = 0;
var daddyScoreCount = 0;
var daddyScoreIncrement = 5;
var calculatedAnswer = 0;

function checkAnswer() {
    var answer = document.forms["form"]["answer"].value;

    if (answer == calculatedAnswer) {
        document.getElementById("result").innerHTML = "Correct!";

        score++;
        daddyScoreCount++;

        if (daddyScoreCount == daddyScoreIncrement) {
            alert("Well done you earned a Daddy point!!");

            daddyScore++;
            daddyScoreCount = 0;
        }
    }
    else {
        document.getElementById("result").innerHTML = "Sorry that's incorrect!  The correct answer is " + calculatedAnswer + ".";
    }

    generateQuestion();

    return false;
}

function generateQuestion() {
    var checkboxes = document.getElementsByTagName("input");
    var timestables = [];

    for (var i = 0; i < checkboxes.length; i++)
    {
        if (checkboxes[i].type == "checkbox")
        {
            if (checkboxes[i].checked)
            {
                timestables.push(checkboxes[i].value);
            }
        }
    }
    
    var lhs = Math.floor(Math.random() * 12) + 1;

    do
    {
        lhs = Math.floor(Math.random() * 12) + 1;
    }
    while (!timestables.includes(lhs.toString()));

    var rhs = Math.floor(Math.random() * 12) + 1;

    calculatedAnswer = lhs * rhs;

    document.getElementById("question").innerHTML = "Calculate: " + lhs + " x " + rhs;
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("daddyScore").innerHTML = "Daddy Points: " + daddyScore;
}