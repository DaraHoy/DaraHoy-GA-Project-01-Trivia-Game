# DaraHoy-GA-Project-01-Trivia-Game
WDI-Project #1 Trivia Game
# The Tech
For Project 1 I selected Trivia to be my game project. I chose trivia because I was able to quickly think of how I would design the game's logic. I would create a way a way to radomly generate a number and associate that to an item in an array, then I would be able to display and compare a set of questions and answers. The real challenge for me was to utilize CSS and HTML in a visually dynamic way, CSS being the weakest area for me.

## Wireframing The Layout
(http://i.imgur.com/nyj9qhp.jpg)

## User Stories
The user should be able to choose from multiple choices a possible answer and  have it compared to the answer stored in the Answer key.
The user should be scored based on the time remaining on the clock.
the game should radomize the question position every time.
the high score should be kept even after the page is reloaded.
As a user you should be able to get more time for correct answers.

## Issues & Bugs
Most the issues I ran into was mainly CSS related mainuplations that resulted in unexpected behaviors. In the Javascript I initially had issues with setting up the timer using setInterval. Currently there is a bug where clicking on the New Game coninuously will accelerate the intervals for the timer. I also did not have a solution for questions that were already displayed, they would repeatedly come back up and frustratingly repeat back to back, given more time I would attempt to push/pull them out of the array into another for "played questions".

## Features missing
I hit most of my Bronze, Silver and Gold goals. I did mean to implement a more robust bonus system for getting consecutive right answers(multiplyers x2, x3, x10 to the timer score).
A visual representation of a high score list, where a user can enter their name( similar to an arcade game ).
Also did not have enough time to implement an API.
