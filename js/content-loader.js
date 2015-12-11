$(document).ready(function(){

	var i = 0
	
	var q = 'esv'
	
	var verseVersion = "ESV"

	// Loads verse into the modal
	function loadVerses() {
		$('.verseContent').html("<p>" + verse[i][q] + "</p>" + "<p>" + "— "  + verse[i].location + " " + verseVersion + "</p>");
		$('.verseHeader').html("<h1 class='modal-title' id='prideModalLabel'>" + verse[i].topic + "</h1>");
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
$('.pride-topic').click (function() {
	i = 0;
	loadVerses();
	$('#verseModal').modal();
});	
	
	
$('.faith-topic').click (function() {
	i = 1;
	loadVerses();
	$('#verseModal').modal();
});
	
$('.hope-topic').click(function() {
	i = 2;
	loadVerses();
	$('#verseModal').modal();
});
							 	
});