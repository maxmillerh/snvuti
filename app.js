var balance = 1000; 
var balanceShow = document.getElementById("balance");
var stavka = document.getElementById("stavka"); 
var koef = document.getElementById("koef"); 
var winShow = document.getElementById("win-show"); 
var play = document.getElementById("play"); 
var x2 = document.getElementById("x2"); 
var del2 = document.getElementById("del2"); 
var max = document.getElementById("max"); 
var sto = document.getElementById("sto"); 
var x2k = document.getElementById("x2k"); 
var del2k = document.getElementById("del2k"); 
var maxk = document.getElementById("maxk"); 
var mink = document.getElementById("mink"); 


play.onclick = function(){
		if(stavka.value<=balance){//Если ставка меньше, чем баланс
			var randomInt = Math.round(Math.random(0,100)*100); //рандомное число от 0 до 100

			if(stavka.value >= 1 & koef.value >=1 & koef.value <=99){// проверка допустимости значений
				if(koef.value > randomInt){ //если победа
					var a = koef.value;
					var win = (stavka.value * (100 / a)) - stavka.value;// сумма выигрыша
					win = +win.toFixed(2); //округление до двух знаков после запятой
					var winShowValue = stavka.value * (100 / a); // возможный выигрыш
					winShowValue = +winShowValue.toFixed(2);
					winShow.innerHTML = "<p style='color: green;'>Вы выиграли: +" + winShowValue + "</p>"; //вывод суммы выигрыша
					balance = +(balance + win).toFixed(2); // обновление баланса
					balanceShow.innerHTML = "Ваш баланс: " + balance +"р"; //вывод обновленного баланса
				}else{ //если поражение
					winShow.innerHTML = "<p style='color: red;'>Вы проиграли: -" + stavka.value + "</p>" //вывод суммы проигрыша
					balance = +(balance - stavka.value).toFixed(2); // обновление баланса
					balanceShow.innerHTML = "Ваш баланс: " + balance +"р"  //вывод обновленного баланса
				}
			} else{
				alert('недопустимое значение')
			}

			
		}else{ //Если ставка больше, чем баланс
			winShow.innerHTML = "<p style='color: red;'>Недостаточно средств</p>"
		}

		/* winShow.classList.add('lineUp');
		winShow.addEventListener("animationend", AnimationHandler, false);
		function AnimationHandler () {
			winShow.classList.remove('lineUp');
		} */
}


x2.onclick = function(){
	stavka.value = stavka.value * 2;
	return
}

del2.onclick = function(){
	stavka.value = stavka.value / 2;
	return
}

max.onclick = function(){
	stavka.value = balance;
	return
}

sto.onclick = function(){
	stavka.value = 100;
	return
}

x2k.onclick = function(){
	koef.value = koef.value * 2;
	return
}

del2k.onclick = function(){
	koef.value = koef.value / 2;
	return
}

maxk.onclick = function(){
	koef.value = 99;
	return
}

mink.onclick = function(){
	koef.value = 1;
	return
}