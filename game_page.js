user1_name = localStorage.getItem("user1_name");
user2_name = localStorage.getItem("user2_name");
user1_score = 0;
user2_score = 0;
document.getElementById("user1_name").innerHTML = user1_name + ":";
document.getElementById("user2_name").innerHTML = user2_name + ":";
document.getElementById("user1_score").innerHTML = user1_score;
document.getElementById("user2_score").innerHTML = user2_score;
document.getElementById("player_q").innerHTML = "Question Turn - " + user1_name;
document.getElementById("player_a").innerHTML = "Answer Turn - " + user2_name;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_number = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn="user1";
answer_turn="user2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answer_turn == "user1"){
            user1_score = user1_score + 1;
            document.getElementById("user1_score").innerHTML = user1_score;
        }
        else{
            user2_score = user2_score + 1;
            document.getElementById("user2_score").innerHTML = user2_score;
        }
    }
    if(question_turn == "user1"){
        question_turn = "user2";
        document.getElementById("player_q").innerHTML = "Question Turn - " + user2_name;
    }
    else{
        question_turn = "user1";
        document.getElementById("player_q").innerHTML = "Question Turn - " + user1_name;
    }
    if(answer_turn == "user1"){
        answer_turn = "user2";
        document.getElementById("player_a").innerHTML = "Answer Turn - " + user2_name;
    }
    else{
        answer_turn = "user1";
        document.getElementById("player_a").innerHTML = "Answer Turn - " + user1_name;
    }
    document.getElementById("output").innerHTML = "";
}