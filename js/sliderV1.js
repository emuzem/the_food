const offerSliderPrev = document.querySelector('.offer__slider-prev');
const currentSlideIndex = document.querySelector('#current');
const offerSliderNext = document.querySelector('.offer__slider-next');
const offerSlide = document.querySelectorAll('.offer__slide');
const offerSliderWrapper = document.querySelector('.offer__slider-wrapper');
const slidesFields = document.querySelector('.offer__slider-inner');
const width = window.getComputedStyle(offerSliderWrapper).width;
const slider = document.querySelector('.offer__slider');
console.log('hello');
let index = 0;
let offset = 0;

slidesFields.style.width = 100 * offerSlide.length + '%';
slidesFields.style.display = 'flex';
slidesFields.style.transition = '0.5s all';

offerSliderWrapper.style.overflow = 'hidden';
offerSlide.forEach(el => {
    el.style.width = width;
});

slider.style.position = 'relative';

const indicators = document.createElement('ol');
const dots = [];
indicators.classList.add('carousel-indicators');
slider.append(indicators);
for (let i = 0; i < offerSlide.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', `${i + 1}`);
    dot.classList.add('dot');
    indicators.appendChild(dot);
    dots.push(dot);
    if (i === 0){
        dot.style.opacity = '1';
    }
}

const addZero = (n) => n < 10 ? `0${n}` : n;
offerSliderNext.addEventListener('click', ()=> {
    if (index === offerSlide.length-1){
        index = 0;
    } else {
        index++;
    }
    if (offset === +width.slice(0, width.length - 2) * (offerSlide.length - 1)) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesFields.style.transform = `translateX(-${offset}px)`;
    currentSlideIndex.textContent = addZero(index+1);
    dots.forEach(el => {
        el.style.opacity = '0.5';
    });
    dots[index].style.opacity = '1';
});

offerSliderPrev.addEventListener('click', ()=> {
    console.log('hello');
    if (index === 0){
        index = offerSlide.length-1;
    } else {
        index--;
    }
    if (offset === 0) {
        offset = +width.slice(0, width.length - 2) * (offerSlide.length - 1)
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    currentSlideIndex.textContent = addZero(index+1);
    slidesFields.style.transform = `translateX(-${offset}px)`;
    dots.forEach(el => {
        el.style.opacity = '0.5';
    });
    dots[index].style.opacity = '1';
});

dots.forEach(el => {
    el.addEventListener('click', (ev)=> {
        const slideTo = ev.target.getAttribute('data-slide-to');
        index = slideTo - 1;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        slidesFields.style.transform = `translateX(-${offset}px)`;
        dots.forEach(el => {
            el.style.opacity = '0.5';
        });
        dots[index].style.opacity = '1';

        currentSlideIndex.textContent = addZero(index+1);
    });
});


/*
let index = 0;
const addZero = (n) => n < 10 ? `0${n}` : n;
const showNextSlide = () => {
    offerSlide[index].classList.remove('show', 'fade');
    offerSlide[index].classList.add('hide');
    if (index === offerSlide.length-1){
        index = 0;
    } else {
        index++;
    }
    offerSlide[index].classList.add('show', 'fade');
    offerSlide[index].classList.remove('hide');
    console.log(addZero(index+1));
    currentSlideIndex.textContent = addZero(index+1);
}
const showPrevSlide = () => {
    offerSlide[index].classList.remove('show', 'fade');
    offerSlide[index].classList.add('hide');
    if (index === 0){
        index = offerSlide.length-1;
    } else {
        index--;
    }
    offerSlide[index].classList.add('show', 'fade');
    offerSlide[index].classList.remove('hide');
    currentSlideIndex.textContent = addZero(index+1);
}
offerSliderWrapper.addEventListener('click', showNextSlide);
offerSliderNext.addEventListener('click', showNextSlide);
offerSliderPrev.addEventListener('click', showPrevSlide);
*/
