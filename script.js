const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.  Franklin D. Roosevelt",
  "Do one thing every day that scares you.  Eleanor Roosevelt",
  "In the middle of every difficulty lies opportunity.  Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.  Winston Churchill",
  "What we think, we become.  Buddha",
  "If youre going through hell, keep going.  Winston Churchill",
  "Whether you think you can or you think you cant, youre right. Henry Ford",
  "The best way to predict your future is to create it.  Abraham Lincoln",
  "Believe you can and you're halfway there.  Theodore Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking.  William Butler Yeats",
  "Hardships often prepare ordinary people for an extraordinary destiny.  C.S. Lewis",
  "Act as if what you do makes a difference. It does.  William James",
  "Life is 10% what happens to us and 90% how we react to it.  Charles R. Swindoll",
  "You miss 100% of the shots you don't take.  Wayne Gretzky",
  "Opportunities don't happen, you create them.  Chris Grosser",
  "Only those who dare to fail greatly can ever achieve greatly. Robert F. Kennedy",
  "The harder you work for something, the greater youll feel when you achieve it.  Unknown",
  "Dont watch the clock; do what it does. Keep going.  Sam Levenson",
  "If something is important enough, even if the odds are stacked against you, you should still do it.  Elon Musk",
  "Push yourself, because no one else is going to do it for you.  Unknown",
  "A person who never made a mistake never tried anything new.  Albert Einstein",
  "It always seems impossible until its done.  Nelson Mandela",
  "The secret of getting ahead is getting started.  Mark Twain",
  "Work hard in silence, let success make the noise.  Frank Ocean",
  "Dream big and dare to fail.  Norman Vaughan",
  "You dont have to be great to start, but you have to start to be great.  Zig Ziglar",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.  Eleanor Roosevelt",
  "If you want to lift yourself up, lift up someone else.  Booker T. Washington",
  "Start where you are. Use what you have. Do what you can.  Arthur Ashe",
  "Success usually comes to those who are too busy to be looking for it.  Henry David Thoreau",
];

const showQuote = document.getElementById("Quote");
function generateQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQuote];
  showQuote.innerHTML = quote;
}
