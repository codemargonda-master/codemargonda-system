$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#transparent-limit');
    var offset = startchange.offset();
    $('.navbar-default').css('background-color', 'transparent');


    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            console.log(scroll_start);
            console.log(offset.top);
            if ($('#transparent-limit').hasClass('codemargonda-eventbooking')) {
                $(".navbar-default").css('background-color', '#c51c1c');
            } else if (scroll_start > offset.top) {
                $(".navbar-default").css('background-color', '#c51c1c');
            } else {
                $('.navbar-default').css('background-color', 'transparent');
            }
        });
    }
    sliderslick()
    $('#event-menu').click(function() {
        setTimeout(function() {
            sliderslick()
        }, 10);
    });

    var facilitiesEventBook = [];

    $('input[name="eventfacilities"]').click(function() {
        if (this.checked) {
            facilitiesEventBook.push(this.value);
            console.log(facilitiesEventBook);
        } else {
            if ((index = facilitiesEventBook.indexOf($(this).val())) !== -1) {
                facilitiesEventBook.splice(index, 1);
            }
            console.log(facilitiesEventBook);
        }
    });

    $('#btnEventBook').click(function() {
        console.log("Test");
        console.log(facilitiesEventBook);
    });
});

function sliderslick() {
    $('#slider-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
}

window.onload = function() {
    // your code 
    document.getElementById('links').onclick = function(event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {
                index: link,
                event: event
            },
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
};