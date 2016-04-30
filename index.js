!function() {
	var british_to_english = require("./british_to_english.json");
	var english_to_british = require("./english_to_british.json");

	function substitute(text, opts) {
		var converted = text; 

		opts = opts || {};

		opts.output = opts.output || "American";
		if (!opts.hasOwnProperty("wholewords")) {
			opts.wholewords = true;
		}

		if (opts.output == "American") {
			var json = british_to_english;
		} else {
			var json = english_to_british;
		}

		Object.keys(json).forEach(function(word) {
			//console.log(word);
			if (opts.wholewords) {
				var pattern = new RegExp("\\b" + word + "\\b", "gi");
			} else {
				var pattern = new RegExp(word, "gi");
			}
			converted = converted.replace(pattern, json[word]);
		});
		return converted;
	}

	module.exports = substitute;
}();
