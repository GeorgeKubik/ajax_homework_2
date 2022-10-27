//! Input validator
	const inputValue = document.querySelector('input');
	const form = document.querySelector('form');

	const textError = document.createElement('div');
			textError.classList.add('text-error');
			form.append(textError);
			

	inputValue.addEventListener('change', () => {
		try {
			if (inputValue.value === '') {
				throw new SyntaxError('Поле пустое')
			} else if (inputValue.value > 10) {
				throw new SyntaxError('Большое число')
			} else if (inputValue.value < 5) {
				throw new SyntaxError('Маленькое число')
			} else if (!Number(inputValue.value)) {
				throw new SyntaxError('Не число')
			} else {
				textError.innerHTML = '';
			}
			
		} catch (e) {
			if (e.name === 'SyntaxError') {
				textError.innerHTML = e.message;
				console.log(e.message);
			} else {
				throw e;
			}
		}
	})



//! Игра lottery на async awayt

async function lottery() {	
	console.log("Вы начали игру");
	let promise = await new Promise( function (resolve, reject) {
	   setTimeout(function () {
			 Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
	  }, 1000);
	});
	return await promise;
 }
 
 lottery()
	.then(() => console.log("Вы выиграли"))
	.then(() => console.log("Вам заплатили"))
	.catch(() => console.log("Вы проиграли"))
	.finally(() => console.log("Игра закончена"));



