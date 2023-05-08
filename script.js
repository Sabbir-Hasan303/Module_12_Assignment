const calculateBMI = (event) => {
	event.preventDefault(); // prevent the form from being submitted
	const weight = parseFloat(document.getElementById('weightInput').value);
	const height = parseFloat(document.getElementById('heightInput').value) / 100;
	let result = document.getElementById('result');

	if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	else if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else {
		let bmi = (weight / (height * height)).toFixed(2);

		if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML = `Normal : <span>${bmi}</span>`;

		else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
	}
};

document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
