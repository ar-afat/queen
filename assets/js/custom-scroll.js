	// custom video post scroll animation 

	function scrollAnimFunc() {
		let selectBoxx = document.querySelector('.counterup');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('scrolllefttoright');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc);

	function scrollAnimFunc2() {
		let selectBoxx = document.querySelector('.category-highlight');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('showcat');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc2);


	function scrollAnimFunc3() {
		let selectBoxx = document.querySelector('.add-1');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('scrolllefttoright');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc3);
	
	function scrollAnimFunc4() {
		let selectBoxx = document.querySelector('.icon-1');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('showcat');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc4);


	function scrollAnimFunc5() {
		let selectBoxx = document.querySelector('.icon-2');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('showcat');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc5);
	
	function scrollAnimFunc6() {
		let selectBoxx = document.querySelector('.add-2');
		let position = selectBoxx.getBoundingClientRect().top;
		console.log(position)
		let screenposition = window.innerHeight / 2;

		if (position < screenposition) {
			selectBoxx.classList.add('scrolllefttoright');
		}
	}
	window.addEventListener('scroll', scrollAnimFunc6);