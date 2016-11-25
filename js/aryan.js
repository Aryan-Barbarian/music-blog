var sound
function initMusic() {
	var sound = new Howl({
		urls: ['soundfile.mp3'],
		autoplay: false,
		loop: false,
		volume: 1,
		onend: function() {
			alert('Finished!');
		}
	});
}

function playSegment(startTimeTxt, endTimeTxt) {

}

$(document).ready(function() {
	// Bind play click events
	$(".innerPlayer").click( function(evt) {
		el = evt.toElement
		console.log(el)
	});



});