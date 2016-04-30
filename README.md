# British-American-conversion

v.0.0.1

Simple find and replace to Anglify on de-Anglify some text

The list of words comes [straight from Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:List_of_spelling_variants).

	npm install deanglify

	var british_test = "My favourite colour is whisky brown, which I enjoy on a wintry evening in my pyjamas while watching my favorite programmes."

	var to_american = deanglify(british_test, { wholewords: false, output: "American" });
	// My favorite color is whiskey brown, which I enjoy on a wintry evening in my pajamas while watching my favorite programs.

	var american_test = "I apologize for my love of archeology, and please don't inquire as to my side-gig as a flutist.";

	var to_british = deanglify(american_test, { wholewords: false, output: "British" });
	// I apologise for my love of archaeology, and please don't enquire as to my side-gig as a flautist.

Try it out with `npm test`

## Options
+ output: "American" or "British"
+ wholewords: Ignore plurals, etc.

## Ways to improve

+ Capitalization
+ Plurals
+ Stems (civilise, civilize, etc.);