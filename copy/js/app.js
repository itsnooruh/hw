let generateHashtag = function (string) {
		string = string
			.replace(/\s+/g, " ") 
		if (string === "") {
			return "";
		} else {
			let capEachWord = (string) =>
					string
						.trim() // trim spaces around str
						//.toLowerCase() // default to lower case (optional)
						.split(" ") // Split str to array of substrings
						// map array and cap first char of each substring
						.map((word) => word[0].toUpperCase() + word.slice(1))
						.join(""), // join array to string
				HashtagIt = (string) => "#" + string; // prepend #

			return HashtagIt(capEachWord(string)); // return hashtag result
		}
	},
	wrapHTMLTemplate = function (template, el, attr = []) {
		return `<${el} ${attr.join(" ")}>${template}</${el}>`;
	},
	addClassToLastChar = function (str, val) {
		let lastEnteredVal = val.slice(-1),
			punctuation =
				"' \" . , \\ / # ! $ % ^ & * ; : { } = - " +
				"_ ` ~ ( ) [ ] | + @ ? < >".split(" "),
			anyPunctuation = punctuation.indexOf(lastEnteredVal) > -1;
		if (lastEnteredVal !== " " && str !== "" && !anyPunctuation) {
			let lastChar = str.slice(-1),
				strBefore = str.slice(0, -1),
				styledChar = wrapHTMLTemplate(lastChar, "span", ["class='new'"]);
			str = strBefore + styledChar;
		}
		return str;
	},
	addClassToFirstChar = function (str) {
		let firstChar = str.charAt(0),
			strAfter = str.substring(1),
			styledChar = wrapHTMLTemplate(firstChar, "span", ["class='tada'"]);
		return styledChar + strAfter;
	},
	$tag = getId("tag"), // get user input element (using dom library)
	$result = getId("result"); // get result element (using dom library)

// Listen for Event
$tag.addEventListener("keyup", function (event) {
	let newStr = $tag.value, // get new string entered by user
		newHashtag = generateHashtag(newStr); // generate new hashtag
	if (newHashtag.length <= LIMIT) {
		if (event.keyCode !== BACKSPACE) {
			newHashtag = addClassToLastChar(newHashtag, newStr);
		}
		newHashtag = addClassToFirstChar(newHashtag);
	} else {
		newHashtag = `Dude, what are you doing? ${newHashtag.length} 
			characters is too long for a hashtag`;
	}
	$result.innerHTML = newHashtag; // show result
});
