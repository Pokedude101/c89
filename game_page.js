Name_1 = localStorage.getItem("Name_1")
Name_2 = localStorage.getItem("Name_2")
player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = Name_1 + ": ";
document.getElementById("player_2_name").innerHTML = Name_2 + ": ";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn is for " + Name_1;
document.getElementById("player_answer").innerHTML = "Answer Turn is for " + Name_2;

function send(){
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    answer = parseInt(number1) * parseInt(number2);
    question = "<h4>" + number1 + " x " + number2 + "</h4>";
    input = "<br>Answer: <input type='number' id='input_check_box'>"  
    check_button = "<br><br><button class='btn btn-info' onclick='check()' id='check_button'>Check</button>'"
    row = question + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}   
