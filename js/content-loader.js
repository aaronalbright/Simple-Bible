$(document).ready(function(){

	var i = 0
	
	var selectedVersion = verse[i].esv
	
	var verseVersion = ""

	
	function loadVerses() {
		$('#pride').html("<p>" + selectedVersion + "</p>" + "<p>" + "— "  + verse[i].location + " " + verseVersion + "</p>");
		$('#faith').html("<p>" + selectedVersion + "</p>" + "<p>" + "— "  + verse[i].location + " " + verseVersion + "</p>");
	};
	
	loadVerses();
	
	$('label').click(function() {
		
		switch ( $(this).attr('id') ) {
						case "esv" :
								selectedVersion = verse[i].esv;
								verseVersion = "ESV";
								break;
						case "kjv" :
								selectedVersion = verse[i].kjv;
								verseVersion = "KJV";
				      break;
            case "nlt" :
								selectedVersion = verse[i].nlt;
								verseVersion = "NLT";
                break;	
		};
		
	});
	
	
	
	
	
$('.pride-topic').click (function() {
	$('#prideModal').modal();
	i = 0;
	loadVerses();
});
	
$('.faith-topic').click (function() {
	$('#faithModal').modal();
	i = 1;
	loadVerses();
});
	
	
	
	
	
	
});