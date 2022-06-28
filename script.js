const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quotes');
const loader = document.getElementById('loader');
// let apiQuotes = [];
//show loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//Hide loader
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}


//show new Qoutes
function newQuotes(){
loading();
//pick a random quote from apiQuotes array
const quote =localQuotes[Math.floor(Math.random()*localQuotes.length)];
//check if author field is blank and replace it with 'Unknown'
if(!quote.author){
    authorText.textContent - 'Unknown';
}else{
    authorText.textContent = quote.author; 
}
//Check Quotes length to determine styling
if(quote.text.length > 100){
    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}
//set quotes, hidden loader
// authorText.textContent = quote.author; 
quoteText.textContent = quote.text;
complete();
}
//Get Quotes From API
// async function getQuotes() {
//     const apiUrl='https://type.fit/api/quotes';
//     try {
// const response = await fetch(apiUrl);
// apiQuotes = await response.json(); 
// newQuotes();
//     }  catch (error){
//         //catch error here
        
//     }
// }
loading();
//Tweet Quotes
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
//event listner
newQuoteBtn.addEventListener('click',newQuotes);
twitterBtn.addEventListener('click',tweetQuote);
// //On load
// getQuotes();
newQuotes();
