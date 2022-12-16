const progress1 = document.querySelector('#progress1 .progress');
const clickCount = document.querySelector('#clickCount');
let count = 0;
let loader = false;

startProgress1 = () => {
	count++;
	let progress = 0;
	console.log(count);
	clickCount.innerText = count;
	const interval = setInterval(() => {
		progress++;
		progress1.style.width = `${progress}%`;

		if (progress >= 100) {
			clearInterval(interval);
			progress1.style.width = 0;
			progress = 0;
			clickCount.innerText = count - 1;
			count--;
		}
	}, 30);
};
