function showMobileMenu()
{
	var menu = document.querySelector('nav.container.flex-box');
	menu.classList.toggle( 'mobile-menu');
	
}
function showCart()
{
	dark.style.display = 'block';
	cart.style.display = 'block';
	return false;
}
function closeCart()
{
	dark.style.display = 'none';
	cart.style.display = 'none';

}
var button = rooms.querySelectorAll('button')
for(var i=0; i<button.length;i++){
	button[i].onclick = addRoomToCart;
}
var index = 1;
 function addRoomToCart(btn)
{
	
	var img = this.parentElement.querySelector('img');
	var name = this.parentElement.querySelector('h4').innerText;
	var price = this.parentElement.querySelector('p.price').innerText;
	

	var tr = document.createElement('tr');

	var td_1 = document.createElement('td');
	td_1.innerText = index;
	index++;
	tr.appendChild(td_1);

	var td_2 = document.createElement('td');
	td_2.appendChild(img.cloneNode(true));
	tr.appendChild(td_2);

	var td_3 = document.createElement('td');
	td_3.innerText = name;
	tr.appendChild(td_3);

	var td_4 = document.createElement('td');
	td_4.innerText = price;
	tr.appendChild(td_4);

	var td_5 = document.createElement('td');
	var amount = document.createElement('input');
	amount.min = 1;
	amount.value = 1;
	amount.max = 10;
	amount.type = 'number';
	amount.onchange = room_price;
	td_5.appendChild(amount);
	tr.appendChild(td_5);

	var td_6 = document.createElement('td');
	td_6.innerText = price ;
	tr.appendChild(td_6);

	var td_7 = document.createElement('td');
	var btn = document.createElement('button');
	btn.onclick = removeRoomFromCart;
	btn.innerText = 'Замовити';
	td_7.appendChild(btn);
	tr.appendChild(td_7);

	
	cart.querySelector('table tbody').appendChild(tr);

	showCart();

//	allSum();
}
function room_price(){
	var persons = this.value;
	var price = this.parentElement.previousElementSibling.innerText;

	price = price.substr(1);

	var sum = persons * price;
	var td_result = this.parentElement.nextElementSibling;
	td_result.innerText = '$' + sum;

//	allSum();
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
//	allSum();
}
}
// function allSum()
// {
// 	var sum = 0;
// 	var td_6 = cart.querySelectorAll('tbody tr td:nth-child(6)');
// for(var i=0; i < td6.length; i++){
// 	var price = td6[i].innerText;
// 	price= price.substr(1);
// 	price = parseInt(price);
// }
// 	all_sum.innerText = ' $ ' + sum;
// }