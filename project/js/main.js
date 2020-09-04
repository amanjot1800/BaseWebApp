function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/

  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");
  $("#new").html("This is really great that i just have to make changes in editor and everything is live.")
  $("#new2").html("This is for the timing check...")


  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}