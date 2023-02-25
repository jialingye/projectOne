# Project-1
<p> My project is about making a game that can be played in a browser using Javascript </p>

### Installation Instructions
<p>No installation needed, click on the link below and you will be able to play the game through your browser.</p>

## Project Choice 
<h2>Hogwarts Treasure Hunt</h2>
<p>I decided to create this game because of my love for Harry Potter. Originally, I had planned to make an escape room game, but I found it too complex to come up with the necessary clues. Instead, I opted for a treasure hunt-style game that focuses on finding hidden items, which I felt would be more approachable and enjoyable for players.</p>

## Project Description
<p>Hogwarts Treasure Hunt game features 8 themed levels, each with 5 items to find. Players must search for all items within the time limit, with each level increasing in complexity and decreasing in time. The game is set in iconic locations from the Harry Potter universe, making it a must-play for fans.</p>

## Wire Frames
<h3> Initial Game View </h3>
 ![begin](https://git.generalassemb.ly/jadeye/projectOne/blob/main/images/md/begin.png)
<h3> Game View </h3>
 ![main](https://raw.git.generalassemb.ly/jadeye/projectOne/main/images/md/main.png?token=AAALQZUET5YTFB6SZQMHOQTEAOLWM)

<h3> final View </h3>
![final](htt)
### MVP Goals
<ul>
    <li>Displaying an image of a Harry Potter-themed scene with clickable objects</li>
    <li>Keeping track of the score for the number of items found</li>
    <li>Displaying a win message when all items have been found</li>
    <li>Adding a timer to limit the player's time to find the items</li>
    <li>Providing a button to restart the game</li>
    <li>Adding beginning windows before player start playing games</li>
</ul>

### Stretch Goals
<ul>
    <li>Adding sound effects and background music to enhance the game atmosphere</li>
    <li>Allowing players to choose their Hogwarts house and customizing the game accordingly</li>
    <li>Implementing a hint system to help players find items if they get stuck</li>
    <li>Randomized item: To add replayability to the game, you could randomize the items to find on each playthrough, so players can't rely on memorizing the locations from previous playthroughs.</li>
    <li>Adding animations and special effects to make the game more visually appealing</li>
</ul>

### User Stories
<ul>
    <li>As a player, I want to be able to play multiple levels of the game</li>
    <li>As a player, I want to be able to see a list of items to find in the current level so that I know what I need to find.</li>
    <li>As a player, I want to be able to click on the correct item so that I can gain points and move on to the next level.</li>
    <li>As a player, I want to be able to see a timer so that I know how much time I have left to complete the level.</li>
    <li>As a player, I want to be able to see a message when I have found all the items in the level so that I know that I have completed the level.</li>
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