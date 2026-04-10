In styles.css (lines 1–232), I focused on the overall visual design and layout of the site. The .game-card element centers the main content in the middle of the page, creating a clean layout. I also adjusted margins throughout the file to fine-tune spacing and improve the overall appearance. To enhance the design, I incorporated color styling and linear gradients, as well as hover effects—for example, buttons slightly shift upward when hovered over to give a more interactive feel. Additionally, I used overflow: hidden and height: 100% to prevent unwanted scrolling and ensure the layout stays consistent.

In my HTML, I added new classes and IDs to better organize and control different sections of the page. For example, I created a leaderboard-section class so I could treat that entire section as one unit and position it more easily. I also added classes like guess-row primarily for alignment purposes, helping structure the layout more cleanly.

In JavaScript, I implemented several extra features to improve user experience. I created a function called formatPlayerName, which wraps the player name and score in a <span> with the class high-score. This allows those elements to appear in blue, making them stand out visually from the rest of the text.

I also added an event listener for the Enter key, so when it is pressed and the guess button is enabled, it automatically triggers the guess action. A short timeout ensures the button visually resets properly after being pressed.

Finally, I improved input validation by clearing the input field if the user enters an invalid value like a letter or an out-of-range number. This makes the game smoother to use, since the user does not have to manually delete incorrect input each time.

Overall, these additions improved both the design and usability of my project. The game is now fully functional, visually polished, and more interactive for the user.