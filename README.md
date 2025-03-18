# Masterji Assignment 1

## Random Quote Generator

A dynamic web application that generates random quotes with features like copying, sharing on X (Twitter), and exporting as images.

### Features

- Random quote generation
- Dynamic background changes
- Copy quotes to clipboard
- Share quotes on X (Twitter)
- Export quotes as images
- Responsive design

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- External APIs:
  - Free Quotes API
  - Picsum Photos API for backgrounds
- Libraries:
  - html2canvas for image export

### Code Structure

#### HTML Structure

```html
<div id="container">
    <div id="quoteDisplay">
        <div id="quote">Your Quotes Get displayed here</div>
        <div id="quoteauthor"></div>
    </div>
    <div id="buttons">
        <button id="newquote" class="btn">New Quote</button>
        <button id="copy" class="btn">Copy Quote</button>
        <button id="twitter" class="btn">Share on X</button>
        <button id="export" class="btn">Export</button>
    </div>
</div>
```

#### Styling Highlights

```css
#quoteDisplay {
    width: 75%;
    margin: auto;
    padding: 40px 40px;
    border-radius: 10px;
    background-color: #FBFFFE;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    border: 2px solid black;
}
```

#### Core Functionality

```javascript
async function fetchqoute(params) {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await response.json();
    
    const quote = document.getElementById("quote");
    const author = document.getElementById("quoteauthor");
    quote.innerHTML = `"${data.data.content}"`;
    author.innerHTML = `Author : ${data.data.author}`;

    // Dynamic background
    document.body.style.backgroundImage = `url(https://picsum.photos/2000/1000?blur=2&random=${Math.floor(
      Math.random() * 1000
    )})`;
  } catch (error) {
    document.getElementById("quote").innerHTML = "Error: " + error;
  }
}
```

### Features Implementation

1. **Quote Generation**
   - Fetches random quotes from Free Quotes API
   - Updates quote and author in the DOM
   - Changes background image dynamically

2. **Copy Feature**
   - Copies both quote and author to clipboard
   - Shows visual feedback with highlight effect

   ```javascript
   function copyquote() {
     const text = `${quote.innerText} ${author.innerText}`;
     navigator.clipboard.writeText(text);
     // Visual feedback implementation
   }
   ```

3. **Share on X (Twitter)**
   - Opens Twitter with pre-populated quote
   - Includes author attribution

4. **Export Feature**
   - Converts quote display to image
   - Downloads as PNG file
   - Uses html2canvas library

### Responsive Design

The application is fully responsive with mobile-specific styling:

```css
@media (max-width: 600px) {
    #quoteDisplay {
        width: 100%;
        padding: 20px;
        font-size: 1.5rem;
    }

    #buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}
```

### Live URL
https://masterji-assignment-3-eta.vercel.app/

### Setup and Usage

1. Clone the repository
2. Open `index.html` in a web browser
3. Click "New Quote" to generate random quotes
4. Use additional buttons to interact with the generated quote


