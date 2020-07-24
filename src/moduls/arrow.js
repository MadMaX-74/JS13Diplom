

// Появление стрелки в правом ниже углу
const arrow = () => {
    const arrowUp = document.getElementById('totop');
    arrowUp.style.display = 'none';
    const headerMain = document.querySelector('.header-main');

    document.addEventListener('scroll', () => {

        if (window.pageYOffset > headerMain.getBoundingClientRect().height) {

            arrowUp.style.display = 'block';

        } else {
            arrowUp.style.display = 'none';
        }
    });
};

export default arrow;
