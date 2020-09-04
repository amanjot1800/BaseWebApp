function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/

  $("#image1").append('<img class="rounded-circle" src="images/motta1.png"/>');
  $("#image2").append('<img class="rounded-circle" src="images/motta2.png"/>');
  $("#image3").append('<img class="rounded-circle" src="images/motta3.png"/>');

  $("p").html("High five! You're building your first web app!");
  $("#new").html("You can call me at 819-319-2443")
  $("#new2").html("Here are my delicious snacks...")


  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}