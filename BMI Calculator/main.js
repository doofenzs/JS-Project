const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height.`;
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>Your BMI is ${bmi}. You are `;

        if (bmi < 18.6) {
            message += `underweight.`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message += `in the normal range.`;
        } else {
            message += `overweight.`;
        }
        message += `</span>`;
        result.innerHTML = message;
    }
});
