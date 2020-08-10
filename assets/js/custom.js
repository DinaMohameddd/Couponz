(function ($) {
    'use strict';
    $(function () {


        $(document).ready(function ($) {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 100,
                values: [0, 100],
                slide: function (event, ui) {
                    $("#amount1").val(ui.values[0] + " - " + ui.values[1]);
                }
            });
            $("#amount1").val($("#slider-range").slider("values", 0) +
                " - " + $("#slider-range").slider("values", 1));
        });

        $('.cate li').on('click', function () {
            var $dropdown = $('.m1');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $('.country li').on('click', function () {
            var $dropdown = $('.m2');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $('.city li').on('click', function () {
            var $dropdown = $('.m3');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        //deals select
        $('.cate_deal li').on('click', function () {
            var $dropdown = $('.m4');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $('.comp_deal li').on('click', function () {
            var $dropdown = $('.m5');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $('.country_deal li').on('click', function () {
            var $dropdown = $('.m6');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $('.city_deal li').on('click', function () {
            var $dropdown = $('.m7');
            var text = $(this).text();
            var $span = $dropdown.find('span');

            $dropdown.text(text).append($span);
        });
        $("#sub-com").click(function () {
            $("#hidden").css('display', 'block');
        });
        $("#cancle-reply").click(function () {
            $("#hidden").css('display', 'none');
        });
        $("#submitt").click(function () {
            $("#recent-comment").css('display', 'block');
        });
        $("#sub-com").click(function () {
            $("#leave-com").css('display', 'none');
        });
        $("#cancle-reply").click(function () {
            $("#leave-com").css('display', 'block');
        });
        //   $("#submitt").click(function(){
        //     $("#leave-com").css('display', 'none');
        //   });
        // Set the date we're counting down to
        var countDownDate = new Date("feb 5, 2020 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("time").innerHTML = days + '\xa0\xa0' +"Days "+'\xa0\xa0\xa0\xa0' + hours + " :"
                + minutes + ":" + seconds ;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("time").innerHTML = "EXPIRED";
            }
        }, 1000);
    }); //end DOM ready

})(jQuery);

