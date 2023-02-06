var balance = 1000; 
var balanceShow = document.getElementById("balance");
var stavka = document.getElementById("stavka"); 
var koef = document.getElementById("koef"); 
var winShow = document.getElementById("win-show"); 
var playMin = document.getElementById("play-min"); 
var playMax = document.getElementById("play-max");
var x2 = document.getElementById("x2"); 
var del2 = document.getElementById("del2"); 
var max = document.getElementById("max"); 
var sto = document.getElementById("sto"); 
var x2k = document.getElementById("x2k"); 
var del2k = document.getElementById("del2k"); 
var maxk = document.getElementById("maxk"); 
var mink = document.getElementById("mink"); 
var showResult = document.getElementById("show-result"); 

function ShowMabyWin(){
	var x = stavka.value * (100 / koef.value);
winShow.innerHTML = x;
}


playMin.onclick = function(){
		if(stavka.value<=balance){//Если ставка меньше, чем баланс
			var randomInt = Math.round(Math.random(0,100)*100); //рандомное число от 0 до 100

			if(stavka.value >= 1 & koef.value >=1 & koef.value <=99){// проверка допустимости значений
				if( randomInt < koef.value){ //если победа

					var a = koef.value;
					var win = (stavka.value * (100 / a)) - stavka.value;// сумма выигрыша
					win = +win.toFixed(2); //округление до двух знаков после запятой
					var winShowValue = stavka.value * (100 / a); // возможный выигрыш
					winShowValue = +winShowValue.toFixed(2);
					showResult.classList.remove('d-none');
					showResult.innerHTML = 'Выиграли ' + winShowValue; 
					showResult.classList.remove('red');
					showResult.classList.add('green');
					balance = +(balance + win).toFixed(2); // обновление баланса
					balanceShow.innerHTML = "Ваш баланс: " + balance +"р"; //вывод обновленного баланса

				}else{ //если поражение

					showResult.classList.remove('d-none');
					showResult.innerHTML = 'Выпало ' + randomInt; 
					showResult.classList.remove('green');
					showResult.classList.add('red');
					balance = +(balance - stavka.value).toFixed(2); // обновление баланса
					balanceShow.innerHTML = "Ваш баланс: " + balance +"р"  //вывод обновленного баланса

				}
			} else{
				alert('недопустимое значение')
			}

		}else{ //Если ставка больше, чем баланс
			showResult.classList.remove('d-none');
					showResult.innerHTML = 'Недостаточно средств'; 
					showResult.classList.remove('green');
					showResult.classList.add('red');
			//winShow.innerHTML = "<p style='color: red;'>Недостаточно средств</p>"
		}

		/* winShow.classList.add('lineUp');
		winShow.addEventListener("animationend", AnimationHandler, false);
		function AnimationHandler () {
			winShow.classList.remove('lineUp');
		} */
}



playMax.onclick = function(){
	if(stavka.value<=balance){//Если ставка меньше, чем баланс
		var randomInt = Math.round(Math.random(0,100)*100); //рандомное число от 0 до 100
		var koefRevers = 100 - koef.value;

		if(stavka.value >= 1 & koef.value >=1 & koef.value <=99){// проверка допустимости значений
			if( randomInt > koefRevers){ //если победа

				var a = koef.value;
				var win = (stavka.value * (100 / a)) - stavka.value;// сумма выигрыша
				win = +win.toFixed(2); //округление до двух знаков после запятой
				var winShowValue = stavka.value * (100 / a); // возможный выигрыш
				winShowValue = +winShowValue.toFixed(2);
				showResult.classList.remove('d-none');
				showResult.innerHTML = 'Выиграли ' + winShowValue; 
				showResult.classList.remove('red');
				showResult.classList.add('green');
				balance = +(balance + win).toFixed(2); // обновление баланса
				balanceShow.innerHTML = "Ваш баланс: " + balance +"р"; //вывод обновленного баланса

			}else{ //если поражение

				showResult.classList.remove('d-none');
				showResult.innerHTML = 'Выпало ' + randomInt; 
				showResult.classList.remove('green');
				showResult.classList.add('red');
				balance = +(balance - stavka.value).toFixed(2); // обновление баланса
				balanceShow.innerHTML = "Ваш баланс: " + balance +"р"  //вывод обновленного баланса

			}
		} else{
			alert('недопустимое значение')
		}

	}else{ //Если ставка больше, чем баланс
		showResult.classList.remove('d-none');
				showResult.innerHTML = 'Недостаточно средств'; 
				showResult.classList.remove('green');
				showResult.classList.add('red');
		//winShow.innerHTML = "<p style='color: red;'>Недостаточно средств</p>"
	}

	/* winShow.classList.add('lineUp');
	winShow.addEventListener("animationend", AnimationHandler, false);
	function AnimationHandler () {
		winShow.classList.remove('lineUp');
	} */
}




x2.onclick = function(){
	stavka.value = stavka.value * 2;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
	
}

del2.onclick = function(){
	stavka.value = stavka.value / 2;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

max.onclick = function(){
	stavka.value = balance;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

sto.onclick = function(){
	stavka.value = 100;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

x2k.onclick = function(){
	koef.value = koef.value * 2;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

del2k.onclick = function(){
	koef.value = koef.value / 2;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

maxk.onclick = function(){
	koef.value = 99;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}

mink.onclick = function(){
	koef.value = 1;
	var x = stavka.value * (100 / koef.value);
	winShow.innerHTML = x;
	return
}