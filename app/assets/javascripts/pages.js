// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function changeColors() {
  setTimeout(function(){
    document.getElementById('first').style.color = "red";
    setTimeout(function(){
      document.getElementById('second').style.color = "blue";
    }, 1000);
  }, 1000);
  
}

function getData(){
  var divFoodtrucks = document.getElementById('foodtrucks');
  divFoodtrucks.innerHTML = "Loading...";
  $.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response){
    var text = '';
    for (var i = 0; i < response.length; i++) {
      var foodtruck = response[i];
      text += '<div class="foodtruck" onclick="changeFoodtruck(this)">';
      text += '<h3>' + foodtruck.applicant + '</h3>';
      text += '<p>' + foodtruck.dayofweekstr + '</p>';
      text += '<p>' + foodtruck.location + '</p>';
      text += '</div>';
    }
    divFoodtrucks.innerHTML = text;
  });
}

function changeFoodtruck(divFoodtruck) {
  divFoodtruck.classList.toggle('purple');
}

function showWednesdays(){
  var foodtrucks = document.querySelectorAll('.foodtruck');
  for(var i = 0; i < foodtrucks.length; i++) {
    var foodtruck = foodtrucks[i];
    // if we find the word "Wednesday" inside our div inner html
    if (foodtruck.innerHTML.indexOf("<p>Wednesday") !== -1) {
      foodtruck.style.display = '';
    } else {
      foodtruck.style.display = 'none';
    }
  }
}

function showAll(){
  var foodtrucks = document.querySelectorAll('.foodtruck');
  for(var i = 0; i < foodtrucks.length; i++) {
    var foodtruck = foodtrucks[i];
    foodtruck.style.display = '';
  }
}


















