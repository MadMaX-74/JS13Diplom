const slider = () => {
    const slide = document.querySelectorAll('.gallery-slider .slide'),
        slider = document.querySelector('.gallery-slider'),
        dotsList = document.querySelector('.slider-dots');

    let currentSlide = 0,
        interval;

    const dotsAdd = () => {
        slide.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            dotsList.append(dot);
        });
    };
    dotsAdd();

    const dot = document.querySelectorAll('.dot');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if (!target.matches('.slider-dots, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.slider-arrow') || event.target.matches('.dot')) {
            stopSlide();
        }
    });

    startSlide(1500);
};

export default slider;
