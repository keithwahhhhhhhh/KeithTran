$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "Mental Health Website"

  })

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const number = urlParams.get('number');
  const disorder = urlParams.get('disorder');
  const hurt = urlParams.get('hurt');
  const reasons = urlParams.get('reason');
  var disorderResult = "You answered: " + disorder;
  var numResult = "Your number was: "+ number;
  var hurtResult = "You answered: "+ hurt;
  var reasonResult = "You answered: "+ reasons;
  
  jQuery(document).ready(function() {
    $("#num").html(numResult); 
  });
  jQuery(document).ready(function() {
    $("#disorder").html(disorderResult); 
  });
  jQuery(document).ready(function() {
    $("#hurts").html(hurtResult); 
  });
  jQuery(document).ready(function() {
    $("#reasons").html(reasonResult); 
  });