$(function() {
	var callback = function(event) {
		event.preventDefault();
		var input = $('input[type=text][name=item]'),
			value = input.val(),
			add = ($(event.target).attr('id') === 'addTask'),
			item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
			list = (add) ? $('ul').first() : $('ul').last();
		
		input.val("");
		input.focus();

		if (value === "") return;

		if (!add) {
			item.find('input').attr('checked', true);
		}
		item.appendTo(list);
	}

	$('#removeTask, #addTask').click(callback);
	
	$('ul').on('click', 'li a', function(event){
		$(event.target).parent('li').remove();
	});

	$('ul').on('click', 'input[type=checkbox]', function(event){
		var listItem = $(event.target).parent('li'),
			list = (event.target.checked) ? $('ul').last() : $('ul').first();
		listItem.appendTo(list);
	});
});


var forDark = document.getElementById("for-dark");
var forLight = document.getElementById("for-light");
function Black() {
	document.body.style.backgroundColor = "white";
	forLight.style.backgroundColor = "#333";
	forDark.style.backgroundColor = "white";
}

function White() {
	document.body.style.backgroundColor = "#333";
	forDark.style.backgroundColor = "#333";
	forLight.style.backgroundColor = "white";
}