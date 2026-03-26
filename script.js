// ✅ ADD THIS (VERY IMPORTANT)
let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! 🎉";
        playerScore++;
    } 
    else {
        result = "You lose! 😢";
        computerScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("choices").textContent =
        "You chose " + userChoice + " | Computer chose " + computerChoice;

    // ✅ NOW THIS WILL WORK
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

    const jokes = [
        "That move was so clean the computer needs therapy 😭",
        "You just violated the laws of Rock Paper Scissors physics 💀",
        "Even the CPU is questioning its life choices right now 🤖💔",
        "Bro played like there was free WiFi on the line 📶😂",
        "That wasn’t a move… that was a statement 😤🔥",
        "The scissors just resigned after that play ✂️📄",
        "You didn’t win… you emotionally damaged the computer 😭",
        "Rock, Paper, Scissors but you brought anime protagonist energy 🎬⚡",
        "The computer is updating its will after that round 💀📉",
        "That play was so unpredictable even Google is confused 🤯",
        "You just speedran embarrassment… or greatness 😎",
        "The CPU is now filing a complaint with customer support 📞🤖",
        "That move had zero logic but 100% confidence 😂🔥",
        "You just unlocked the 'main character in chaos mode' achievement 🏆",
        "Even scissors said ‘nah I’m out’ and retired early ✂️🏃‍♂️",
        "The computer is now emotionally unavailable 💔🤖",
        "That was illegal in 12 different programming languages 💀",
        "You didn’t play the game… you *redefined* it 😭🔥",
        "The result is irrelevant, that move was iconic 💅",
        "Somewhere, a developer just cried and smiled at the same time 😭😂"
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").textContent = randomJoke;
}