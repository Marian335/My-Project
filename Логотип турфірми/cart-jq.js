$("nav.container.flex-box button.mobile").click(function(){
	$('nav.container.flex-box').toggleClass('mobile-menu');
	if($('nav.container.flex-box').hasClass('mobile-menu'))
	$(this).html('<i class="fas fa-times"></i>');
	else{
		$(this).html('<i class="fas fa-bars"></i>');
	}
});

$('#showCart').click(function () {
	$( '#dark, #cart' ).slideDown();
});
var index = 1;
$('#rooms button').click(function () {
	var img = $(this).closest('article').find('img');
	var name = $(this).closest('article').find('h4').text();
	var price = $(this).parent().find('p.price').text();
	//alert(name + ' ' + price);

	var tr = $('<tr/>');

	 $('<td/>').text(index++).appendTo(tr);

	 $('<td/>').append($(img).clone()).appendTo(tr);

	  $('<td/>').text(name).appendTo(tr);
	  $('<td/>').text(price).appendTo(tr);
	
		var amount = $('<input/',{
			min : 1,
			max : 10,
			value : 1,
			type : 'number',
			click : room_price
		});
	  $('<td/>').append(amount).appendTo(tr);
	 $('<td/>').text(price).appendTo(tr);
	var btn = $('<button/>',{
			text: 'x',
			click: removeRoomFromCart
		})
		$('<td/>').append(btn).appendTo(tr);  
	 tr.appendTo('#cart table tbody');
	 allSum();
	 $('#showCart').click();
});

function room_price(){
	var persons = this.value;
	var price = this.parentElement.previousElementSibling.innerText;

	price = price.substr(1);

	var sum = persons * price;
	var td_result = this.parentElement.nextElementSibling;
	td_result.innerText = '$' + sum;

	allSum();
}

function removeRoomFromCart(){
	if(confirm('Видалити номер з корзини?'))
	{
		var tr = this.closest('tr');
		var tbody = this.closest('tbody');
		tbody.removeChild(tr);
		index--;
		var td_1 = cart.querySelectorAll('tbody tr td:first-child');
for(var i=0; i < td1.length; i++){
	td1[i].innerText = i + 1; 
	}
	allSum();
}
}
function allSum()
{
	var sum = 0;
	var td6 = cart.querySelectorAll('tbody tr td:nth-child(6)');
for(var i=0; i < td6.length; i++){
	var price = td6[i].innerText;
	price= price.substr(1);
	price = parseInt(price);
}
	all_sum.innerText = ' $ ' + sum;
}
