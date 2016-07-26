$(document).ready(function(){



//List of ingredients

var ingredients = {
    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}

//Constructor function that gets users values

var Drink = function(strong, salty, bitter, sweet, fruity) {
    this.strong = strong;
    this.salty = salty;
    this.bitter = bitter;
    this.sweet = sweet;
    this.fruity = fruity;
};



//When order button is clicked get values.  

$('.orderButton').click(function(event) {
	event.preventDefault();
var random = Math.floor(Math.random() * 3);
var newDrink = new Drink(
	$('.strongDrink input:checked').val(),
	$('.saltyDrink input:checked').val(),
	$('.bitterDrink input:checked').val(),
	$('.sweetDrink input:checked').val(),
	$('.fruityDrink input:checked').val());

//Clear drinks
$('.display-drinks').empty();


//If user selected yes - display random drink by user preference
if (newDrink.strong === 'true') {
	$('.display-drinks').append('<li>' + ingredients.strong[random] + '</li>');

}
if (newDrink.salty === 'true') {
	$('.display-drinks').append('<li>' + ingredients.salty[random] + '</li>');
}
if (newDrink.bitter === 'true') {
	$('.display-drinks').append('<li>' + ingredients.bitter[random] + '</li>');
}
if (newDrink.sweet === 'true') {
	$('.display-drinks').append('<li>' + ingredients.sweet[random] + '</li>');
}
if (newDrink.fruity === 'true') {
	$('.display-drinks').append('<li>' + ingredients.fruity[random] + '</li>');
}



});	



});
