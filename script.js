async function fetchqoute(params) {
    try {
       const response =  await fetch(
          "https://api.freeapi.app/api/v1/public/quotes/quote/random"
        )
        const data = await response.json();
        // console.log(data.data.author);

        const quote = document.getElementById('quote')
        const author = document.getElementById("quoteauthor");
        quote.innerHTML = `"${data.data.content}"`
        author.innerHTML = `Author : ${data.data.author}`;
    } catch (error) {
        document.getElementById('quote').innerHTML = 'Error: ' + error;
    }
}

const newquotebtn = document.getElementById("newquote");
newquotebtn.addEventListener("click", fetchqoute);