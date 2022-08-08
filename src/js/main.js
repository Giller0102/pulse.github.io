const sliderBtnRight = document.querySelector('.production_slider_right');
const sliderBtnLeft = document.querySelector('.production_slider_left');
const images = document.querySelectorAll('.slider_line img');

let offset = 0;
const sliderLine = document.querySelector('.slider_line');
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);
    sliderLine.style.width = width*3 + 'px';

    images.forEach(item => 
        {
            item.style.width = width + 'px';
            //item.style.height = 'auto';
        });
}

init();

window.addEventListener('resize', init);
init();



sliderBtnRight.addEventListener('click', function() {
    offset = offset - 750;
    if(offset < -1500) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});


sliderBtnLeft.addEventListener('click', function() {
    offset = offset + 750;
    if(offset > 0) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});





