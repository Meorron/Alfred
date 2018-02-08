$(document).ready(function () {

		var superhero = {
			name: 'Batman',
			age: 'no information',
			gender: 'man',

			params:{
				height:188,
				weight:102,
				strength: 60,
				intellegence: 90,
				agility:80
			},
			power: {
				main: 'technoprogress',
				secondary:'batarangs'			
			}
		};
		
		$('.js-superhero').click(function(){
			showBubble('name:' + superhero.name);
		});
		$('.js-change').click(function(){
			superhero.params.height = getFirstWord();
			showBubble('height of new Robin:' + superhero.params.height + 'm');
		});

		var fruits = ['apple', 'mango', 'pineapple'];
		console.log(fruits[2]);
		$('.js-addElem').click(function(){
			fruits.push(getSecondWord());
			showBubble(fruits);
		});


 		for (let i = 0; i < fruits.length; i++) {
			$('.test-array').append('<div class="test-item">'+ fruits[i] + '</div>')
		};



















		$('.js-plus').click(function() {
			if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord())); 
						} else {
				if (checkInputData().empty) {
					showBubble('пачему ты эта делать?');
				} else {
					showBubble(getFirstWord() + ' ' + getSecondWord());
				}
			}
		});

		$('.js-multiply').click(function() {
			if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord())); 
						} else {
				if (checkInputData().empty) {
					showBubble('пачему ты эта делать?');
				} else {
					showBubble(getFirstWord() + ' ' + getSecondWord());
				}
			}
		});


		$('.js-minus').click(function() {
			if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
			} else {
				if (checkInputData().empty) {
					showBubble('пачему ты эта делать?');
				} else {
					showBubble(getFirstWord() + ' ' + getSecondWord());
				}
			}
			

		});


		$('.js-divide').click(function() {
			if (checkInputData().isNumber) {
				if (getSecondWord() === "0") {
					showBubble ("так умер первый Робин");
				}
				
			} else {
				if (checkInputData().empty) {
					showBubble('пачему ты эта делать?');
				} else {
					showBubble(getFirstWord() + ' ' + getSecondWord());
				}
			}
			
		});

		function checkInputData(){
			if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
				return {
					isNumber: true
				};
			}else if (getFirstWord() === '' && getSecondWord() === '') {
				return {
					isNumber: false,
					empty: true
					

				};
			}else {
				return {
					isNumber: false,
					empty: false

				};
			}
		}



	function getFirstWord() {
		return $('.js-firstNumber').val();
	}

	function getSecondWord() {
		return $('.js-secondNumber').val();
	}

	function showFirstInput(){
		if (inputText == "") {
		showBubble("чего молчим?");	
		} else{ 
			showBubble(inputText);
 		}
	}

	function showBubble(text) {
		$('.bubble').text(text); 
		$('.bubble').addClass('-visible');
		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		},2200);
 
	}
});