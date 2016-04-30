var deanglification = require("../index")

var british_test = "My favourite colour is whisky brown, which I enjoy on a wintry evening in my pyjamas while watching my favorite programmes."

console.log(british_test);

var to_american = deanglification(british_test, { wholewords: false, output: "American" });

console.log(to_american);

var american_test = "I apologize for my love of archeology, and please don't inquire as to my side-gig as a flutist.";

console.log(american_test);

var to_british = deanglification(american_test, { wholewords: false, output: "British" });

console.log(to_british);