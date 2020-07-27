import maskPhone from './maskPhone';

const formValidation = (selector, selectorTel) => {
    const form = document.querySelector(selector);

    maskPhone(selectorTel);

    form.addEventListener('input', e => {
        if (e.target.name === `name`) {
            if (!(/^[А-Яа-яёЁ\s]*$/g.test(e.target.value))) {
                e.target.value = e.target.value.slice(0, -1);
            }
            if (!e.target.value.trim()) {
                event.target.classList.add('error-input');
            } else {
                event.target.classList.remove('error-input');
            }
        }
    });
};

export default formValidation;
