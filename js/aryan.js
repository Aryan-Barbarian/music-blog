// GLOBAL VARIABLES
var sound;
var currId = 0;
var sprites = new Object();

function hmsToSecondsOnly(str) {
	// From StackOverflow: http://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s*1000;
}

function preprocessTags() {
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
		
		// Start, End, Durations
		var startAttr = document.createAttribute("start")
		var startTime = hmsToSecondsOnly(startEnds[0])
		startAttr.value = startTime
		var endAttr = document.createAttribute("end")
		var endTime = hmsToSecondsOnly(startEnds[1])
		endAttr.value = endTime
		var durationAttr = document.createAttribute("duration")
		var duration = endTime - startTime
		durationAttr.value = duration

		// Get sprite name
		var spriteName = "sprite" + currId
		currId++;
		sprites[spriteName] = [startTime, duration]
		var spriteNameAttr = document.createAttribute("spriteName")
		spriteNameAttr.value = spriteName

		// HTML Class Name
		var linkClassAttr = document.createAttribute("class")
		linkClassAttr.value = "innerPlayer"

		// Set Attributes
		linkEl.setAttributeNode(startAttr)
		linkEl.setAttributeNode(endAttr)
		linkEl.setAttributeNode(durationAttr)
		linkEl.setAttributeNode(linkClassAttr)
		linkEl.setAttributeNode(spriteNameAttr)

		el.innerHTML = ""
		el.appendChild(linkEl)
	};
}

function initMusic() {
	sound = new Howl({
		src: ['soundfile.mp3'],
		html5 : true,
		sprite : sprites
	});
}

function bindClickEvents() {
	$(".innerPlayer").click( function(evt) {
		sound.pause()
		el = evt.toElement
		console.log(el)
		var spriteName = el.getAttribute("spriteName")
		console.log(spriteName)
		// var currSprite = sprites[spriteName]
		sound.play(spriteName)
	});

}

function playSegment(startTimeTxt, endTimeTxt) {

}


$(document).ready(function() {
	preprocessTags();
	initMusic();
	bindClickEvents();
	
});