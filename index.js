const quotes = [
    {
        quote: "I'm going to make him an offer he can't refuse.",
        movie: "The Godfather, 1972"
    },
    {
        quote: "May the Force be with you.",
        movie: "Star Wars, 1977"
    },
    {
        quote: "I love the smell of napalm in the morning.",
        movie: "Apocalypse Now, 1979"
    },
    {
        quote: "E.T. phone home.",
        movie: "E.T. The Extra-Terrestrial, 1982"
    },
    {
        quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
        movie: "Forrest Gump, 1994"
    },
    {
        quote: "My precious.",
        movie: "The Lord of the Rings: Two Towers, 2002"
    },
    {
        quote: "I'm king of the world!",
        movie: "Titanic, 1997"
    },
    {
        quote: "Hasta la vista, baby.",
        movie: "Terminator 2: Judgment Day, 1991"
    },
    {
        quote: "Here’s Johnny!",
        movie: "The Shining, 1980"
    },
    {
        quote: "The first rule of Fight Club is: You do not talk about Fight Club",
        movie: "Fight Club, 1999"
    },
    {
        quote: "Bond. James Bond.",
        movie: "Dr. No, 1963"
    },
]

const fonts = [
  'Lobster',
  'cursive',
  'Bangers',
  'Josefin Sans',
  'Dancing Script',
  'Amatic SC',
  'Righteous',
  'Handlee',
]

const colors = [
  "#778899",
  "#006400",
  "#000080",
  "#B8860B",
  "#F4A460",
  "#6B8E23",
  "#008B8B",
  "#BC8F8F",
  "#DC143C",
]

let currentQuote = "";
let currentMovie = "";
let currentFont = "";

function getRandomQuote(){
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = randomQuote.quote;
  currentMovie = randomQuote.movie;
    //get a random quote
  $(".text").text(randomQuote.quote);
    //with the corresponding movie  
  $(".whatMovie").animate(
    { opacity: 0}, 
    250, function(){
      $(this).animate({ opacity: 1}, 250);
      $("#movie").text(randomQuote.movie);
    });  
}
    
function getRandomColor(){
  let randomColor = Math.floor(Math.random() * colors.length);
  $("html body").css(
    {
      backgroundColor: colors[randomColor],
    });
  $("#new").css(
    {
      color: colors[randomColor]
    }); 
  $(".text").css(
    {
      color: colors[randomColor]
    });
  $("#movie").css(
    {
      color: colors[randomColor]
    });
}

function getRandomFont(){
  let randomFont = Math.floor(Math.random() * fonts.length);
  currentFont = randomFont;
  $(".quote").css(
    {
      fontFamily: fonts[randomFont],
    }
  )
}

//by pressing button New Quote get a new quote, font and color
$("#new").on("click", function(){
  getRandomQuote();
  getRandomFont();
  getRandomColor();
});