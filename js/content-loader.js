$(document).ready(function(){

	var topic = 'Pride'
	
	var q = 'esv';
	
	var verseVersion = "ESV";
	
	console.log(verse['Pride'].location);
	
	// Loads verse into the modal
	function loadVerses() {
		$('.verseContent').html("<p>" + verse[topic][q] + "</p>" + "<p>" + "— "  + verse[topic].location + " " + verseVersion + "</p>");
		$('.verseHeader').html("<h1 class='modal-title' id='prideModalLabel'>" + topic + "</h1>");
	};
	
	loadVerses();
	
	// Switches translation
	$('label').click(function() {
		
		switch ( $(this).attr('id') ) {
						case "esv" :
								q = 'esv';
								verseVersion = "ESV";
								break;
						case "kjv" :
								q = 'kjv';
								verseVersion = "KJV";
				      break;
            case "nlt" :
								q = 'nlt';
								verseVersion = "NLT";
                break;	
		};
		
		loadVerses();
		
	});
	
	

	
	
// So instead, this works. While tedious, at least it works.	
	
$('.topics').on ('click', '.topic', function() {
	topic = $(this).attr('id');
	loadVerses();
	$('#verseModal').modal();
});
						 	
});