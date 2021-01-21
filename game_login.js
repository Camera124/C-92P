function adduser(){
    user1_name = document.getElementById("user_1-l").value;
    user2_name = document.getElementById("user_2-l").value;
    localStorage.setItem("user1_name", user1_name);
    localStorage.setItem("user2_name", user2_name);
    window.location="page2.html";
}