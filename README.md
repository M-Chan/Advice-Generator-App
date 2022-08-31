# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview
### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.jpg)




### Links
- Solution URL: [Solution]()
- Live Site URL: [Advice Generator App]()

&nbsp;
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- [Advice Slip API](https://api.adviceslip.com)

&nbsp;
### What I learned
- HTML
-- Don't forget the following!!!
  ```html
  <noscript>JavaScript disabled</noscript>
  ```

&nbsp; <!-- non-breaking space ASCII character; adds a line -->
- CSS
-- To create the glow effect for the dice upon hover, I used a box shadow...
  ```css
  #diceBox:hover{box-shadow: 0.1vh 0.1vh 4vh 0.75vh hsl(150, 100%, 66%);}
  ```
  -- I also learnt that you can 'justify-self' and 'align-self' for individual 'child' elements

&nbsp;
- JS
-- I learnt to use an API!
  ```js
  return await fetch("https://api.adviceslip.com/advice")
  ```


&nbsp;
### Continued development
- I would like to practise working with APIs more



---
## Author
- Website - [Man Ting Chan](https://m-chan.github.io/)
- Frontend Mentor - [@M-Chan](https://www.frontendmentor.io/profile/M-Chan)