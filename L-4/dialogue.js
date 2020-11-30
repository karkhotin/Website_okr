  let user = {
	name: 'Карина',
	age: 18,
	favPlace: 'море'
};
function next(){
	let count = +prompt("Скільки разів ти подоржував в цьому році (введи число)?");
	let sum = 0;
	if (count >=0){
		while(count>0){
			let val = +prompt("Введіть скільки днів тривала мандрівка", '');
			if(!val) break;
			sum += val;
			count -= 1;
		}
		alert(`Загальна ваша кількість днів у мандрівках - ${sum}`);
		next1();
	}
	else{ 
	bye();}
}
function stop(){
	if (confirm('Ви точно не хочете продовжити спілкування?')) bye()
		else next();
}
function bye() {
 alert( "Гароного дня" );
};
function next1(){
	let place = prompt("Куди тобі найбільше подобається їздити?");
	if(place.length > 0) alert (`Вау. Вам подабається відвідувати ${place} `);
	else alert(`Вау. Вам подабається їздити на ${user.favPlace} `)
	bye();
}
function dial (hi, yes, no){
	 if (confirm('Привіт!')) yes()
 else no();
}
dial('', next, stop);