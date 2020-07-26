const slider = () => {
    const sliderGallery = document.querySelector('.gallery-slider'),
        slide = document.querySelectorAll('.gallery-slider .slide'),
        galleryWrap = document.querySelector('.gallery-wrapper');

    const prev = document.createElement('span');
    const next = document.createElement('span');


    prev.className = 'slider-arrow__span slider-arrow__prev ';
    next.className = 'slider-arrow__span  slider-arrow__next ';

    prev.textContent = '<';
    next.textContent = '>';

    galleryWrap.style.position = 'relative';
    galleryWrap.appendChild(prev);
    galleryWrap.appendChild(next);


    let slideIndex = 0;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        let i;
        if (n > slide.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slide.length;
        }
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        /* for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        } */
        slide[slideIndex - 1].style.display = "block";
        /* dots[slideIndex - 1].className += " active"; */
    }

    prev.addEventListener('click', minusSlide);
    next.addEventListener('click', plusSlide);

};

export default slider;
