document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('.buttons button');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === 'AC') {
                input.value = '0';
            } else if (buttonText === 'DE') {
                input.value = input.value.slice(0, -1);
            } else if (buttonText === '=') {
                try {
                input.value = eval(input.value);
                } catch (error) {
                input.value = 'Math error';
                }
            } else {
                if (input.value === '0') {
                    input.value = buttonText;
                } else {
                    input.value += buttonText;
                }
            }
        });
    });
});
