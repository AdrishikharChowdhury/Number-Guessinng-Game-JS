# Guess The Number JS

A classic number guessing game built with vanilla JavaScript and styled with Tailwind CSS. Challenge yourself across three difficulty levels and test your guessing skills against the computer!

## 🎮 Game Overview

The computer generates a random number within a specified range, and your goal is to guess it correctly. Get real-time feedback on whether your guess is too high, too low, or spot on!

## 🚀 Features

- **🎯 Three Difficulty Levels**:
  - **Easy**: Guess between 0-100
  - **Medium**: Guess between 0-200  
  - **Hard**: Guess between 0-300

- **💬 Interactive Feedback**: Get instant hints on whether your guess is too high or too low
- **🎨 Visual Difficulty Selection**: Active difficulty level is highlighted with darker blue
- **🔄 Game Controls**: New Game, Submit Guess, and Reset Game functionality
- **📱 Responsive Design**: Works seamlessly across all devices
- **⚡ Smooth Animations**: Button press animations and transitions

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **Vanilla JavaScript**: Game logic and DOM manipulation
- **Tailwind CSS**: Modern utility-first styling via CDN
- **CSS Transitions**: Smooth button animations and hover effects

## 📁 Project Structure

```
Guess The Number JS/
├── index.html          # Main HTML structure and UI
├── script.js           # Game logic and event handling
└── README.md          # Project documentation
```

## 🎯 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Running the Game

1. **Download or clone** the project files
2. **Navigate** to the project directory:
   ```bash
   cd "Guess The Number JS"
   ```
3. **Open** `index.html` in your web browser:
   ```bash
   # Linux/macOS
   xdg-open index.html
   # or
   open index.html
   
   # Windows
   start index.html
   ```

Alternatively, simply double-click the `index.html` file!

## 🕹️ How to Play

1. **Select Difficulty**: Choose Easy, Medium, or Hard to set the number range
2. **Start New Game**: Click "New Game" to generate a random number
3. **Make Your Guess**: Enter a number in the input field
4. **Submit**: Click "Submit" to check your guess
5. **Follow the Hints**: 
   - "You guessed high bro!!" → Your guess is too high
   - "You guessed low bro!!" → Your guess is too low  
   - "You won bro!!" → Correct guess! 🎉
6. **Reset Anytime**: Use "Reset Game" to start over

## 🎲 Game Mechanics

### Difficulty Levels
```javascript path=null start=null
// Difficulty multipliers
Easy:   0 - 100   (def * 1 = 100 * 1)
Medium: 0 - 200   (def * 2 = 100 * 2)  
Hard:   0 - 300   (def * 3 = 100 * 3)
```

### Random Number Generation
```javascript path=null start=null
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### Game State Management
- **Active Game**: Input enabled, submit button functional
- **Game Won**: Input disabled until new game starts
- **Game Reset**: Input cleared and re-enabled

## 🎨 UI/UX Features

### Interactive Elements
- **Button Animations**: `active:scale-75` for tactile feedback
- **Difficulty Selection**: Visual highlighting of selected level
- **Responsive Layout**: Flexbox centering and mobile-friendly design
- **Message Display**: Dynamic feedback area with border styling

### Color Scheme
- **Primary Blue**: `bg-blue-500` for default buttons
- **Active Blue**: `bg-blue-900` for selected difficulty
- **Clean Borders**: `border-2` with rounded corners
- **Shadow Effects**: `shadow-xl` for depth

## 🔧 Code Highlights

### Event Delegation for Difficulty Selection
```javascript path=null start=null
difficulties.forEach((difficulty) => {
  difficulty.addEventListener("click", () => {
    // Remove active state from all buttons
    difficulties.forEach((button) => {
      button.classList.remove("bg-blue-900");
      button.classList.add("bg-blue-500");
    });
    // Add active state to clicked button
    difficulty.classList.remove("bg-blue-500");
    difficulty.classList.add("bg-blue-900");
  });
});
```

### Game Logic Implementation
```javascript path=null start=null
const game = () => {
  playerGuess.disabled = false;
  computerValue = getRandomInt(0, difficulty);
  
  submit.addEventListener("click", () => {
    let playerValue = playerGuess.value;
    if (playerValue > computerValue) {
      message.innerText = `Your Guess: ${playerValue}. You guessed high bro!!`;
    } else if (playerValue < computerValue) {
      message.innerText = `Your Guess: ${playerValue}. You guessed low bro!!`;
    } else {
      message.innerText = `Your Guess: ${playerValue}. You won bro!!`;
      playerGuess.disabled = true;
    }
  });
}
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🚀 Future Enhancements

- [ ] **Score System**: Track number of attempts and best scores
- [ ] **Leaderboard**: Local storage for high scores
- [ ] **Hint System**: Progressive hints after multiple wrong guesses
- [ ] **Sound Effects**: Audio feedback for correct/incorrect guesses
- [ ] **Custom Range**: Allow players to set their own number ranges
- [ ] **Multiplayer Mode**: Take turns guessing against friends
- [ ] **Statistics**: Track win rate, average attempts, etc.
- [ ] **Themes**: Dark mode and color customization options

## 🎓 Learning Outcomes

This project demonstrates:
- **DOM Manipulation**: Element selection and content updates
- **Event Handling**: Click events and form interactions
- **Conditional Logic**: Game state management with if/else statements
- **Random Number Generation**: Math.random() and Math.floor() usage
- **CSS Styling**: Modern utility-first approach with Tailwind
- **User Experience**: Feedback systems and interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**AdrishikharChowdhury**
- GitHub: [AdrishikharChowdhury](https://github.com/AdrishikharChowdhury)

---

🎮 **Ready to test your guessing skills? Start playing and see how few attempts it takes you to win!**

⭐ If you enjoyed this game, please consider giving it a star on GitHub!