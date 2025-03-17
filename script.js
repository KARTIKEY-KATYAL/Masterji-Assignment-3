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
    document.body.style.backgroundImage = `url(https://picsum.photos/2000/1000?blur=2&random=${Math.floor(
      Math.random() * 100
    )})`;
  } catch (error) {
    document.getElementById("quote").innerHTML = "Error: " + error;
  }
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
  const quote = document.getElementById("quote");
  const author = document.getElementById("quoteauthor");
  if (
    quote.innerHTML === "Your Quotes Get displayed here" &&
    author.innerHTML === ""
  ) {
    alert("No Quote to Share");
    return;
  }
  const twitterurl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
  window.open(twitterurl, "_blank");
}

function exportquote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("quoteauthor");
  if (
    quote.innerHTML === "Your Quotes Get displayed here" &&
    author.innerHTML === ""
  ) {
    alert("No Quote to Export");
    return;
  }
  const container = document.getElementById("quoteDisplay");
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
