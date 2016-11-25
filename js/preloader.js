var currId = 0;

function hmsToSecondsOnly(str) {
	// From StackOverflow: http://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}


$(document).ready(function() {
	// Bind play click events
	playerElements = $(".player")
	console.log(playerElements)
	for (var i = playerElements.length - 1; i >= 0; i--) {
		var el = playerElements[i]
		var innerText = el.textContent.replace("[", "").replace("]", "")
		var startEnds = innerText.split("-")

		var linkEl = document.createElement("a")
		linkEl.innerHTML = "[" + innerText + "]"
		
		var startAttr = document.createAttribute("start")
		var startTime = hmsToSecondsOnly(startEnds[0])
		startAttr.value = startTime

		var endAttr = document.createAttribute("end")
		var endTime = hmsToSecondsOnly(startEnds[1])
		endAttr.value = endTime

		var durationAttr = document.createAttribute("duration")
		var duration = endTime - startTime
		durationAttr.value = duration


		var linkClassAttr = document.createAttribute("class")
		linkClassAttr.value = "innerPlayer"

		linkEl.setAttributeNode(startAttr)
		linkEl.setAttributeNode(endAttr)
		linkEl.setAttributeNode(durationAttr)
		linkEl.setAttributeNode(linkClassAttr)

		el.innerHTML = ""
		el.appendChild(linkEl)
	};



});