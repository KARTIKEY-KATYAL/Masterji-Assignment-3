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
  
  const text =`${quote.innerText} + ${" "}${author.innerText}`
  navigator.clipboard.writeText(text);

   quote.classList.add("highlight");
   author.classList.add("highlight");
   setTimeout(() => {
     quote.classList.remove("highlight");
        author.classList.remove("highlight");
   }, 5000);
  alert("Quote copied to clipboard!");
}

const newquotebtn = document.getElementById("newquote");
const copyquotebtn = document.getElementById("copy");
newquotebtn.addEventListener("click", fetchqoute);
copyquotebtn.addEventListener("click", copyquote);
