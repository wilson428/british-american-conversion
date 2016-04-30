var fs = require("fs");

var words = fs.readFileSync("words.txt", "UTF8").split("\n").map(function(d) { return d.split(", ") });

var british_to_english = {},
	english_to_british = {};

words.forEach(function(pair) {
	british_to_english[pair[0]] = pair[1];
	english_to_british[pair[1]] = pair[0];
});

fs.writeFileSync("british_to_english.json", JSON.stringify(british_to_english, null, 2));
fs.writeFileSync("english_to_british.json", JSON.stringify(english_to_british, null, 2));
