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
	
	
/* This is supposed to activate and switch each i var dependening the button click, denoated by its class. I figured this was be easier than making and writing out indiviual .click fuctions for each button. For some reason, it's not working.	

$('button').click( function() { 
	
	switch ( $(this).attr('class') ) {
		case "pride-topic" :
			alert(i);
			break;
		case "faith-topic" :
			alert(i);
			break;
	};
	
});
*/	
	
	
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