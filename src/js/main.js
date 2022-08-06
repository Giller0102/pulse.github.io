const sliderBtnRight = document.querySelector('.production_slider_right');
const sliderBtnLeft = document.querySelector('.production_slider_left');


let offset = 0;
const sliderLine = document.querySelector('.slider_line');


sliderBtnRight.addEventListener('click', function() {
    offset = offset - 750;
    if(offset < -1500) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});


sliderBtnLeft.addEventListener('click', function() {
    offset = offset + 750;
    if(offset > 1500) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});
