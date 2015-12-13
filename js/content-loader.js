$(document).ready(function(){

	var topic = 'Pride';
	var version = 'esv';
	var versionTitle = "ESV";
	
	// Loads verse into the modal
	function loadVerse() {
		$('.verseContent').html("<p>" + verses[topic][version] + "</p>" + "<p>" + "— "  + verses[topic].location + " " + versionTitle + "</p>");
		$('.verseHeader').html("<h1 class='modal-title' id='prideModalLabel'>" + topic + "</h1>");
	};
	
	// Switches translation
	$('label').click(function() {
		
		switch ( $(this).attr('id') ) {
						case "esv" :
								version = 'esv';
								versionTitle = "ESV";
								break;
						case "kjv" :
								version = 'kjv';
								versionTitle = "KJV";
				      break;
            case "nlt" :
								version = 'nlt';
								versionTitle = "NLT";
                break;	
		};
		
	});
	

// Calls modal after defining user-selected topic. OH SNAP, it's so simple.
$('.topics').on ('click', '.topic', function() {
	topic = $(this).attr('id');
	loadVerse();
	$('#verseModal').modal();
});
						 	
});