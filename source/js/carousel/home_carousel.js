// ----------------------
// Carousel on Home page
//-----------------------
function Carousel(className, timeout, arrows, dotNav) {
    var sliderBlock = document.querySelector(className);
    sliderBlock.querySelector('.item').classList.add('is_active');

    // ------------------------------------
    // Adding attributes to slides items
    // ------------------------------------
    var slides = sliderBlock.querySelectorAll('.item');
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('item-' + (1 + i));
        slides[i].setAttribute('data-id', (1 + i))
    }

    // ------------------------------------
    // Handle slide change
    // ------------------------------------
    function handleSlideChange(action, e) {
        var activeSlide = sliderBlock.querySelector('.item.is_active');
        var activeDot = dotNav ? sliderBlock.querySelector('.slider__dots-item.is_active') : null;
        var activeID = activeSlide.dataset.id;
        var newID = 1;

        switch (action) {
            case 'next':
                newID = (+activeID + 1) <= slides.length ? (+activeID + 1) : 1;
                break;
            case 'prev':
                newID = (+activeID - 1) > 0 ? (+activeID - 1) : slides.length;
                break;
            case 'dot':
                newID = e.target.dataset.id;
                break;
            default:
                console.log('Sorry, no such type: ' + action + '.')
        }

        activeSlide.classList.remove('is_active');
        dotNav ? activeDot.classList.remove('is_active') : null;
        sliderBlock.querySelector('.item-' + newID).classList.add('is_active');
        dotNav ? sliderBlock.querySelector('.slider__dots-item-' + newID).classList.add('is_active') : null
    }

    // ------------------------------------
    // Create nav block
    // ------------------------------------
    if (arrows) {
        var nav = document.createElement('div');
        nav.classList.add('controls');
        nav.innerHTML = '<div class="slider__prev left carousel-control"><i class="fa fa-angle-left"></i></div><div ' +
            'class="slider__next right carousel-control"><i class="fa fa-angle-right"></i></div>';
        sliderBlock.appendChild(nav);

        sliderBlock.querySelector('.slider__next').addEventListener('click', function () {
            handleSlideChange('next')
        })

        sliderBlock.querySelector('.slider__prev').addEventListener('click', function () {
            handleSlideChange('prev')
        })
    }

    // ------------------------------------
    // Handle swipe events
    // ------------------------------------
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;
    var gestureZone = sliderBlock;

    gestureZone.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY
    }, false);

    gestureZone.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture()
    }, false);

    function handleGesture() {
        if (touchendX < touchstartX) {
            handleSlideChange('next')
        }
        if (touchendX > touchstartX) {
            handleSlideChange('prev')
        }
        if (touchendY === touchstartY) {
            clearInterval(sliderInterval)
        }
    }

    // ------------------------------------
    // Handle mouse events
    // ------------------------------------
    sliderBlock.addEventListener('mouseover', function () {
        clearInterval(sliderInterval)
    });

    sliderBlock.addEventListener('mouseout', function () {
        startSlider()
    });

    // ------------------------------------
    // Start slides
    // ------------------------------------
    function startSlider() {
        sliderInterval = setInterval(function () {
            handleSlideChange('next')
        }, timeout)
    }

    startSlider()
}

var hero__carousel = new Carousel('.hero_carousel', 500000, true);