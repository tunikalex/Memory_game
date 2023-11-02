# 1. Game Description

"Memory Game" is an interactive game where players are challenged to test their memory and ability to find pairs among cards. The goal of the game is to open all cards in pairs, matching their values.

The game consists of the following key elements:

- **Cards**: The game board features cards with numbers that need to be matched in pairs.

- **Input of Card Quantity**: At the beginning of the game, the player can input the desired quantity of cards in the game. The number of cards should be even and within the range of 6 to 80.

- **Game Board**: The cards are placed on the game board, and the objective is to open and match all the pairs.

- **Victory**: The player wins when all pairs of cards have been opened and matched.

The game is implemented using HTML, CSS, and JavaScript and provides an interactive experience for enhancing the player's memory and attentiveness.

## 2. HTML

### 2.1. Element `<!DOCTYPE html>`

- `<!DOCTYPE html>`: Declares the document type as HTML5.

### 2.2. Element `<html>`

- `<html lang="en">`: The root element of the HTML document with the language set to English.

### 2.3. Element `<head>`

- `<head>`: Contains metadata about the document.

- `<meta charset="UTF-8">`: Sets the document encoding to UTF-8.

- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Specifies the compatibility mode for Internet Explorer.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configures the viewport settings for mobile devices.

- `<title>Game in pair</title>`: Sets the page title.

- `<link rel="stylesheet" href="./css/normalize.css">`: Links the external stylesheet `normalize.css` to the document.

- `<link rel="stylesheet" href="./css/slyles.css">`: Links the main stylesheet `slyles.css` to the document.

- `<script defer src="main.js"></script>`: Links the external script `main.js` to the document with the `defer` attribute.

### 2.4. Element `<body>`

- `<body>`: Represents the content of the page.

## 3. CSS

### 3.1. Common Styles

- `box-sizing`: Sets the `box-sizing` property to `border-box` for all elements on the page.

- `a`: Defines styles for hyperlinks.

- `ul`: Sets margins and paddings for lists to zero.

- `img`: Specifies a maximum width of 100% for images.

- `body`: Sets a minimum width, font, and background for the page.

### 3.2. Global Classes

- `.flex`: Applies `display: flex` to elements.

- `.opacity`: Sets the opacity property to 0 for elements.

### 3.3. Styles for `.container`

- `.container`: Centers text, provides a fixed width, and sets a background.

### 3.4. Styles for `.title`

- `.title`: Removes margins and defines text color.

### 3.5. Styles for `.main__win`

- `.main__win`: Fixes the position, centers text, sets dimensions, and adds a background image.

### 3.6. Styles for `.form`

- `.form`: Defines styles for forms.

- `.form__input`: Styles the text input fields.

### 3.7. Styles for `.list`

- `.list`: Sets styles for the container of game cards.

### 3.8. Styles for `.list__shirt`

- `.list__shirt`: Styles the game cards.

### 3.9. Styles for `.list__item`

- `.list__item`: Styles the game elements (cards).

## 4. JavaScript (main.js)

### 4.1. - Function `createNumbersArray(count)`

- Generates an array of numbers with pairs of identical values.

- Parameter `count` (default 8) - the number of elements in the array.

### 4.2. - Function `shuffle(arr)`

- Shuffles the elements of the `arr` array using the Fisher-Yates algorithm.

- Parameter `arr` - the array to be shuffled.

### 4.3. - Function `howMuch(callback)`

- Handles the input of the quantity of game cards by the user and calls the provided callback function.

- `callback`: The callback function that will be called with the quantity of game cards.

### 4.4. - Function `createInput()`

- Creates HTML elements for inputting the quantity of game cards and adds them to the page.

### 4.5. - Function `crateGamesTable(arr)`

- Creates the game cards table based on the `arr` array and adds it to the page. If the table already exists, it will be recreated.

- `arr`: An array of numbers to be used in the game.

### 4.6. - Function `playGame()`

- Manages the game process, handles card clicks, and determines if the cards match. If all cards are opened, the game ends.

### 4.7. - Function `startGame()`

- Initiates the start of the game, creates the input for the quantity of game cards, and manages the game process.
