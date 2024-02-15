//  Hide The Home Screen

// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

// Show The Play Ground

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyBoarddKeyUpEvent(event){
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

// Stop the game if pressed 'Esc'
if(playerPressed === 'Escape'){
    gameOver();
}

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
//   console.log(playerPressed, expectedAlphabet);

  // check right or wrong key press
  if (playerPressed === expectedAlphabet) {
    console.log('you get a point');
    // Update Score
    // 1. get the current score
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // 3. Show the update score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('you loss a life');  
    const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
 
        if(updatedLife === 0){
            gameOver();
        }

// step-1: get the current life number
//     const currentLifeElement = document.getElementById('current-life');
//     const currentLifeText = currentLifeElement.innerText;
//     const currentLife = parseInt(currentLifeText); 
    
//     // step-2: reduce the life count
//     const newLife = currentLife - 1;
//     // step-3: display the update life count
//     currentLifeElement.innerText = newLife;

//   }
// }
  }
}
document.addEventListener("keyup", handleKeyBoarddKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
//   console.log("Your random alphabet", alphabet);

  // set randomly generated alphabet to the screen (show it)

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // Set Background Color
  setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
