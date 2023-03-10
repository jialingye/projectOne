# Project-1
<p> My project is about making a game that can be played in a browser using Javascript </p>

### Installation Instructions
<p>No installation needed, click on the link below and you will be able to play the game through your browser.</p>

## Project Choice 
<h2>Hogwarts Treasure Hunt</h2>
<p>I decided to create this game because of my love for Harry Potter. Originally, I had planned to make an escape room game, but I found it too complex to come up with the necessary clues. Instead, I opted for a treasure hunt-style game that focuses on finding hidden items, which I felt would be more approachable and enjoyable for players.</p>

## Project Description
<p>Hogwarts Treasure Hunt game features 9 themed levels, each with 5 items to find. Players must search for all items within the time limit, with each level increasing in complexity and increasing in time. The game is set in iconic locations from the Harry Potter universe, making it a must-play for fans.</p>

## Wire Frames
<h3> Initial Game View </h3>
 <img src='https://github.com/jialingye/projectOne/blob/main/images/md/begin.png' alt='initial'/>

<h3> Game View </h3>
<img src='https://github.com/jialingye/projectOne/blob/main/images/md/main.png' alt='main'/>

<h3> Final View </h3>
<img src='https://github.com/jialingye/projectOne/blob/main/images/md/final.png' alt='final'/>

## User Stories
### MVP Goals
<ul>
    <li>As a player, I want to see a beginning window before starting the game so that I can get ready to play the game.</li>
    <li>As a player, I want to see a Harry Potter-themed scene with clickable objects so that I can search for items.s</li>
    <li>As a player, I want my score to be kept track of so that I can know how many items I have found.</li>
    <li>As a player, I want to see a win message when I have found all the items so that I can know that I have completed the level.</li>
    <li>As a player, I want to play against a timer that limits the amount of time I have to find the items so that I can add an extra challenge to the game.</li>
    <li>As a player, I want to have a button that allows me to restart the game so that I can play again if I want to improve my score.</li>
    
</ul>

### Stretch Goals
<ul>
    <li>As a player, I want to hear sound effects and background music to increase the immersion of the game.</li>
    <li>As a player, I want to be able to input my name, be assigned a college, and view a scoreboard to track my progress and compete with others.</li>
    <li>As a player, I want to have access to a hint system to assist me in finding items if I'm stuck.</li>
    <li>As a player, I want the items to be randomized each time I play the game, so that I can't rely on memorizing their locations from previous playthroughs.</li>
    <li>As a player, I want the game to include animations and special effects to make the experience more visually appealing.</li>
</ul>

### Pseudo Code
<ol>
    <li>Set up game interface and display the first theme.</li>
    <li>Create an array of objects, each containing a theme background, five items to find, and their clickable locations.</li>
    <li>When the player clicks on the correct location for an item, increment the score by one.</li>
    <li>When the score equals 10, display the win message and allow the player to choose to replay or go to the next level.</li>
    <li>If the player completes all levels within the time limit, display the final win message.</li>
    <li>Make beginning theme that ask player to input their names, and assign college for them</li>
    <li>Set a timer for each level and display the time limit.</li>
    <li>If the player fails to complete a level within the time limit, display the game over message and allow the player to replay the current level.</li>
    <li>If the player chooses to use the add time button, add 10 seconds to the timer and deduct one point from the score.</li>
    <li>End game when all themes are completed and display final score.</li>
</ol>

### Links
[Enter the game](https://jialingye.github.io/projectOne/)