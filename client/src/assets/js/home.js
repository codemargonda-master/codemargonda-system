$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#transparent-limit');
    var offset = startchange.offset();

    if ($('#transparent-limit').hasClass('codemargonda-eventform')) {
        $(".navbar-default").css('background-color', '#c51c1c');
    } else {
        $('.navbar-default').css('background-color', 'transparent');
    }

    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            console.log(scroll_start);
            console.log(offset.top);
            if ($('#transparent-limit').hasClass('codemargonda-eventform')) {
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
            $('#dropdownMenuFacilities').text(facilitiesEventBook);
            console.log(facilitiesEventBook);
        } else {
            if ((index = facilitiesEventBook.indexOf($(this).val())) !== -1) {
                facilitiesEventBook.splice(index, 1);
                $('#dropdownMenuFacilities').text(facilitiesEventBook);
            }
            console.log(facilitiesEventBook);
        }
    });

    $('#btnEventBook').click(function() {
        console.log("Test");
        console.log(facilitiesEventBook);
    });

    $('#inputTanggal, #inputDurasiMulai').css('cursor', 'pointer');
    $('#inputTanggal').click(function() {
        $("#inputTanggal").flatpickr({
            minDate: "today",
            dateFormat: "d-m-Y"
        });
    });

    function getstarttime() {
        if (moment().format('HH') >= 20 || moment().format('HH') <= 08) {
            var minTime = '08:00';
            var maxTime = '20:00';
            $("#inputDurasiMulai").timepicker({
                'minTime': minTime,
                'maxTime': maxTime,
                'disableTextInput': true,
                'timeFormat': 'H:i',
                'step': 60
            });
        } else {
            var now = moment().add(1, 'hours').format('h:00 a');
            $("#inputDurasiMulai").timepicker({
                'minTime': now,
                'maxTime': '20:00',
                'disableTextInput': true,
                'timeFormat': 'H:i',
                'step': 60
            });
        }
    }

    function getendtime() {
        var timestart = $('#inputDurasiMulai').timepicker('getTime');
        var starttime = moment(timestart).format('h:00 a');
        var mintimeend = moment(timestart).add(1, 'hours').format('h:00 a');
        console.log(timestart);
        console.log(moment(timestart).format('HH'));
        if (moment(timestart).format('HH') >= 20 || moment().format('HH') < 8) {
            var minTime = '08:00';
            var maxTime = '20:00';
            $("#inputDurasiSelesai").timepicker({
                'minTime': minTime,
                'maxTime': maxTime,
                'disableTextInput': true,
                'timeFormat': 'H:i',
                'step': 60
            });
        } else {
            if (mintimeend > starttime) {

                $("#inputDurasiSelesai").timepicker({
                    'minTime': mintimeend,
                    'maxTime': '20:00',
                    'disableTextInput': true,
                    'timeFormat': 'H:i',
                    'step': 60
                });
            } else {
                $("#inputDurasiSelesai").timepicker({
                    'minTime': mintimeend,
                    'maxTime': '20:00',
                    'disableTextInput': true,
                    'timeFormat': 'H:i',
                    'step': 60
                });
            }
        }


    }
    $('#inputDurasiMulai').click(function() {

        $("#inputDurasiMulai").val(getstarttime())
    });

    $('#inputDurasiSelesai').click(function() {
        $("#inputDurasiSelesai").val(getendtime())
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