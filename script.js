async function fetchqoute(params) {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await response.json();
    // console.log(data.data.author);

    const quote = document.getElementById("quote");
    const author = document.getElementById("quoteauthor");
    quote.innerHTML = `"${data.data.content}"`;
    author.innerHTML = `Author : ${data.data.author}`;

    // Set the background image of the body element
    const ImageURL = `https://picsum.photos/2000/1000?grayscale&blur=2&random=${Math.floor(Math.random() * 100)}`;

    const imageResponse = await fetch(ImageURL);
    if (imageResponse.ok) {
      document.body.style.backgroundImage = `url('${imageResponse.url}')`;
    } else {
      console.error("Failed to load image.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching the quote or image.");
  }

// fetch(ImageURL)
//   .then(response => {
//     if (response.ok) {
//       document.body.style.backgroundImage = `url('${response.url}')`;
//     } else {
//       console.error("Failed to load image.");
//     }
//   })
//   .catch(err => {
//     alert("Error loading image: " + err);
//   });
}

function copyquote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("quoteauthor");


  if (
    quote.innerHTML === "Your Quotes Get displayed here" &&
    author.innerHTML === ""
  ) {
    alert("No Quote to Copy");
    return;
  }



  const text = `${quote.innerText} ${author.innerText}`;
  navigator.clipboard.writeText(text);
  alert("Quote copied to clipboard!");



  // Add highlight effect
  quote.classList.add("highlight");
  author.classList.add("highlight");
  setTimeout(() => {
    quote.classList.remove("highlight");
    author.classList.remove("highlight");
  }, 5000); // Remove the highlight after 5 seconds



}



function shareonX() {
  // get quote and author
  const quote = document.getElementById("quote");
  const author = document.getElementById("quoteauthor");


  // edge case
  if (
    quote.innerHTML === "Your Quotes Get displayed here" &&
    author.innerHTML === ""
  ) {
    alert("No Quote to Share");
    return;
  }


  // method to tweet
  const twitterurl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;

  
  // open twitter
  window.open(twitterurl, "_blank");
}

function exportquote() {
  // get quote and author
  const quote = document.getElementById("quote");
  const author = document.getElementById("quoteauthor");
  // edge case
  if (
    quote.innerHTML === "Your Quotes Get displayed here" &&
    author.innerHTML === ""
  ) {
    alert("No Quote to Export");
    return;
  }
  // get container
  const container = document.getElementById("quoteDisplay");
  // used this to script and functionality to get screenshot
  html2canvas(container, {
    useCORS: true,
    allowTaint: true,
    logging: true,
    backgroundColor: null,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "quote.png";
    link.click();
  });
}

const newquotebtn = document.getElementById("newquote");
const copyquotebtn = document.getElementById("copy");
const sharetwitterbtn = document.getElementById("twitter");
const exportquotebtn = document.getElementById("export");
newquotebtn.addEventListener("click", fetchqoute);
copyquotebtn.addEventListener("click", copyquote);
sharetwitterbtn.addEventListener("click", shareonX);
exportquotebtn.addEventListener("click", exportquote);
