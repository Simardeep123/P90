function Login_button() {
    player1 = document.getElementById("1").value;

    player2 = document.getElementById("2").value;
    localStorage.setItem("Player 1", player1);
    localStorage.setItem("Player 2", player2);
}