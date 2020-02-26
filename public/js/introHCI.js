// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
    $(function () {
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapholdHandler(e) {
			var targetIDprefix = e.target.id;
			console.log("got prefix: "+targetIDprefix);
			$("#"+targetIDprefix+"-bio").show();
		}
	})
}

// init RSVP form submit listener
function initRSVPForm() {
    $('#rsvpForm').submit(function (e) {
		e.preventDefault();
		console.log("submitting form");
		var rsvpEmail = $("#rsvpEmail").val();
		$.post('/addRSVP', {rsvpEmail: rsvpEmail}, function (res) {
			alert("RSVP formsuccessfully submitted!");
			$('#rsvpEmail').val('');
		})
	})
}