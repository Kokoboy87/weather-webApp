console.log('Weather App');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageLocation');
const messageTwo = document.querySelector('#messageError');

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	// Get the value we provide at the intup field
	const location = search.value;

	messageOne.textContent = 'Loading...';
	messageTwo.textContent = '';

	// Call the function fetch          // .then method is the second argument to the function
	fetch(`/weather?address=${location}`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = data.location;
				messageTwo.textContent = data.forecast;
			}
		});
	});
});
