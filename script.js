document.addEventListener('DOMContentLoaded', (event) => {
    const screen = document.querySelector('.screen');
    const btns = document.querySelectorAll('.btn');
    let screenValue = '';

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnValue = e.target.dataset.num;

            if (btnValue) {
                screenValue += btnValue;
                screen.value = screenValue;
            }

            if (e.target.classList.contains('btn-equal')) {
                try {
                    screen.value = eval(screenValue);
                    screenValue = screen.value;
                } catch {
                    screen.value = 'Error';
                    screenValue = '';
                }
            }

            if (e.target.classList.contains('btn-clear')) {
                screenValue = '';
                screen.value = screenValue;
            }
        });
    });
});