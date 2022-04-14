# Unit 6: Giphy Project

## Project Description

In this unit, you will create a Giphy App. The Giphy App will take a search term as an input and display a random Gif in a thumbnail on the screen. To create this project, you will learn the anatomy of an API Request, use Promises to make a simple GET request, handle a JSON response object, and use jQuery to display a gif.

## Day 1

### Day 1 Goal 1: Set Up

#### Planning

- [ ] Complete the project planning document.

#### GitHub Set-Up

- [x] Go to the repository
- [x] Fork this repository to your Github account and import to a new workspace
- [ ] Submit your website using the link on the Agenda

#### Starter Code

- [ ] Read through the HTML starter code to understand the organization and class names given.
- [ ] Go to the API request URL [here](https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC) to see how the API request is set up.

### Day 1 Goal 2: Write a fetch request to the API

- [ ] Declare a variable that stores the following API request URL: https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC
- [ ] Write the fetch request that logs the entire API request to the console

### Day 1 Goal 3: Navigate the API request to return a gif

- [ ] Navigate through the API request URL to return only the first gif in the array
  - [ ] HINT: Work your way through the layers one at a time (check your console every time!) to find where the original image URLs are stored
- [ ] Update your API request so that only the original image URL is logged to the console

#### Wrap

- [ ] Commit your changes!

## Day 2

### Day 2 Goal 1: Display a gif to the screen

- [ ] Update the fetch request so the original gif URL is appended to the screen in the correct div
- [ ] Use string interpolation to get the gif image to display on the screen

### Day 2 Goal 2: Add a click handler so the API request can use inputted data

- [ ] Write a click handler for the "Searc" button and move your fetch request into the body
- [ ] Declare a variable to save the user's input
- [ ] Use string interpolation to update the request URL in your fetch request so a gif from the user's search term displays when the button is clicked

### Wrap

- [ ] Commit your changes!

## Day 3

### Day 3 Goal 1: Randomize the gif that is displayed

- [ ] Declare a variable that stores a random number from 0 to the total number of items (different gifs) in the response
- [ ] Update the request URL in your fetch request to display a random gif onto the screen

### Wrap

- [ ] Commit your changes!

### Day 3 Goal 2: Add a project extension

- [ ] Display multiple images in the response to the screen.
- [ ] Create a mail_to link that will email the GIF to anyone you want.
- [ ] Make the GIF pop out in a modal when clicked on.

## References/Tools

- [Fellowship Reference Table](https://docs.google.com/document/d/1qrY2OC-6S04oOXZlYmXja7lmKBmdApR-HXJkhfd67e8/edit)
- [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
