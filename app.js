function getGenerate(){
    var quotes = {
        "- Deepack Chopra ": " “The truly free man is the one who can turn down an invitation to dinner without giving an excuse.” ",
        "- Pierce Brown " : " “Man cannot be freed by the same injustice that enslaved it.” ",
        "- Madeline Miller " : " “Bury us, and mark our names above. Let us be free.” "
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}