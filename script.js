function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    
    // Computer random choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    // Game logic
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! 🎉";
    } 
    else {
        result = "You lose! 😢";
    }

    // Display results
    document.getElementById("result").textContent = result;
    document.getElementById("choices").textContent =
        "You chose " + userChoice + " | Computer chose " + computerChoice;
}