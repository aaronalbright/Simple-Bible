$(document).ready(function(){

	
	var selectedVersion = verse[0].ESV
	
	var verseVersion = ""
	
	function loadGrace() {
		$('#grace').html("<p>" + selectedVersion + "</p>" + "<p>" + "— "  + verse[0].Location + " " + verseVersion + "</p>");
	};
	
	$('input').click(function() {
		
		switch ( $('input').attr("id") ) {
						case "esv" :
								selectedVersion = verse[0].ESV;
								verseVersion = "ESV";
                break;
						case "kjv" :
								selectedVersion = verse[0].KJV;
								verseVersion = "KJV";
				      break;
            case "nlt" :
								selectedVersion = verse[0].NLT;
								verseVersion = "NLT";
                break;	
		};
		
		$('#grace').html("<p>" + selectedVersion + "</p>" + "<p>" + "— "  + verse[0].Location + " " + verseVersion + "</p>");
		
	});
	
	
	
	
	
$('.grace-topic').click (function() {
	$('#graceModal').modal();
});
	
	
	
	
	
	
	
});