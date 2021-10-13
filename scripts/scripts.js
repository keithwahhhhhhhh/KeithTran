$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })

    document.title = "Mental Health Quiz"

  })

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get('email');
  const pickanum = urlParams.get('pickanum');
  const colors = urlParams.getAll('colors')
  const writestuff = urlParams.get('writestuff');
  var output = "Your email is: " + email + " <br> The number you picked is: " + pickanum + "<br> the colors you picked were: " + colors + "<br> and you wrote the following: <br>" + writestuff;

  jQuery(document).ready(function() {
    $("#results").html(output); 
  });
