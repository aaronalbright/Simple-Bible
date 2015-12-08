$(document).ready(function(){

	var i = 0
	
	var selectedVersion = verse[i].esv
	
	var verseVersion = ""

	
	function loadVerses() {
		$('.verseContent').html("<p>" + selectedVersion + "</p>" + "<p>" + "— "  + verse[i].location + " " + verseVersion + "</p>");
	};
	
	loadVerses();
	
	$('label').click(function() {
		
		switch ( $(this).attr('id') ) {
						case "esv" :
								selectedVersion = verse[0].esv;
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
		
		loadVerses();
		
	});
	
	
	
	
	
$('.pride-topic').click (function() {
	i = 0;
	loadVerses;
	$('#prideModal').modal();
});
	
$('.faith-topic').click (function() {
	i = 1;
	loadVerses;
	$('#faithModal').modal();
});
	
$('.hope-topic').click(function() {
	$('#hopeModal').modal();
	i = 2;
	loadVerses();
});
											 
											 
	
	
	
	
	
	
});