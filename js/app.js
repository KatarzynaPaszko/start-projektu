document.addEventListener('DOMContentLoaded', function() {

// w widoku mobilnym pokaż/ukryj menu po kliknięciu na ikonkę
  $('.hide').prev().click(function(){
    var menu = $(this).next();
    $(".hide").not(menu).css('visibility', 'hidden');
    if ( menu.css('visibility') == 'hidden'){
      menu.css('visibility', 'visible');
    } else {
      menu.css('visibility', 'hidden');
    }
	});



});
