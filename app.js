$(document).ready(function(){



//list of ingredients

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
var html = '';
var random = Math.floor(Math.random() * 3);
var newDrink = new Drink(
	$('.strongDrink input:checked').val(),
	$('.saltyDrink input:checked').val(),
	$('.bitterDrink input:checked').val(),
	$('.sweetDrink input:checked').val(),
	$('.fruityDrink input:checked').val());


$('.display-drinks').empty();

if (newDrink.strong === 'true') {
	$('.display-drinks').append('<li>' + ingredients.strong[random] + '</li>');
	console.log(ingredients.strong[random]);
}
if (newDrink.salty === 'true') {
	$('.display-drinks').append('<li>' + ingredients.salty[random] + '</li>');
	console.log(ingredients.strong[random]);
}
if (newDrink.bitter === 'true') {
	$('.display-drinks').append('<li>' + ingredients.bitter[random] + '</li>');
	console.log(ingredients.strong[random]);
}
if (newDrink.sweet === 'true') {
	$('.display-drinks').append('<li>' + ingredients.sweet[random] + '</li>');
	console.log(ingredients.strong[random]);
}
if (newDrink.fruity === 'true') {
	$('.display-drinks').append('<li>' + ingredients.fruity[random] + '</li>');
	console.log(ingredients.strong[random]);
}








// var trueProperties = [];
// 	for(var prop in newDrink) {
// 		console.log(newDrink[prop]);
// 		if(newDrink[prop] == 'true') {
// 			trueProperties.push(newDrink[prop]);
// 			// console.log(trueProperties);
// 		// var html = '';
//   //       html += '<li>' + rand + '</li>';
//   //       $('.display-drinks').append();
// 		// }
// 	}


});	

//console.log(newDrink);



// };


// var rand = ingredients[ingredientCounter][Math.floor(Math.random() * ingredients[ingredientCounter].length)];

function randomNumber() {
	var random = Math.floor(Math.random() * 3);
	console.log(random);




};
randomNumber();


// $(".yes-button").click(function() {
//           $(".random-drink").empty();
//         //alert(questionList[questionCounter].ingredients);
//         var rand = ingredients.strong[Math.floor(Math.random() * ingredients.strong.length)];
//          var rand = questionList[ingredientCounter].ingredients[Math.floor(Math.random() * questionList[ingredientCounter].ingredients.length)];
//           var html = '';
//           html += '<li>' + rand + '</li>';
//           $('.random-drink').append(html);




});
