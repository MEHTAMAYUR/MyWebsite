
$(document).ready(function() {

	

	function clearHome(delay) {
    	$('#links').hide(delay);
    	$('#menu').hide(delay);
    	$('#backbutton').show(delay);
	}

	function clearDeveloper(delay) {
		
	    $('#developing').hide(delay);
	}

	function showDeveloper(delay) {
		$('html').animate({
          backgroundColor: "#ffce00",
        }, delay );
        $('#developing').show(delay);
	}

	function showHomeItems(delay) {
		$('html').animate({
          backgroundColor: "#F7B733",
        }, delay);
        $('#links').show(delay);
    	$('#menu').show(delay);
       	$('#backbutton').hide(delay);
	}



	clearDeveloper(0);
	showHomeItems(0);

	$('#name').click(function(){
    	clearDeveloper(500);    	
        showHomeItems(500);
	});

	$('#backbutton').click(function(){
    	clearDeveloper(500);    	
        showHomeItems(500);
	});

	$('#developer').click(function(){
    	clearHome(500);    	
    	showDeveloper(500);
	});


	
});