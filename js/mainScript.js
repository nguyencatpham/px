
$(document).ready(function() {

     $(window).scroll(function(){

        if ($(this).scrollTop() > 100) {
            $('.fixtop').css({
               "position": "fixed",
               "top": 0,
               "left": 0,
               "right": 0
            });
           
        } else {
            $('.fixtop').css({
                "position": "relative",
            });
        }
    });

   


  $('#quote-carousel').carousel({
    pause: true,
    interval: false,
  });
   $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.collapse').on('show.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function() {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-plus"></i>');
    });
});

// $(document).ready(function() {
//   $('select').multiselect({
//     templates: { // Use the Awesome Bootstrap Checkbox structure
//       li: '<li class="checkList"><a tabindex="0"><div class="aweCheckbox aweCheckbox-danger"><label for=""></label></div></a></li>'
//     }
//   });
//   $('.multiselect-container div.aweCheckbox').each(function(index) {

//     var id = 'multiselect-' + index,
//       $input = $(this).find('input');

//     // Associate the label and the input
//     $(this).find('label').attr('for', id);
//     $input.attr('id', id);

//     // Remove the input from the label wrapper
//     $input.detach();

//     // Place the input back in before the label
//     $input.prependTo($(this));

//     $(this).click(function(e) {
//       // Prevents the click from bubbling up and hiding the dropdown
//       e.stopPropagation();
//     });

//   });

// });

// $(document).ready(function(){
//             $('.div-scroll').on('scroll', function(){
//                 if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
//                 {
//                   alert('end reached');
//                 }
//             }); 
//         })


    // /* ------------ FLOATING SIDEBAR ------------ */
    // $(document).ready(function()    {

    //     var $parent = $('.news-details');
    //     var $sideBar = $('#sideBar');
    //     var $floatingBox = $('.floating-menu');


    //     var windowHeight = $(window).height();
    //     var documentHeight = $(document).height();
    //     var headerHeight = $('header').height();

    //     var parentAbsoluteTop = $parent.offset().top; // Distance above $parent
    //     var parentAbsoluteBottom = parentAbsoluteTop + $parent.height() - $floatingBox.height(); // Distance from 'top of window' to 'end of $parent'
    //     var topStop = parentAbsoluteTop + $parent.height(); // Distance from 'top of window' to 'end of $floatingBox'
    //     var bottomStop = parentAbsoluteTop - $parent.height();

        
    //     jQuery(document).ready(function($) {
            
    //         var $parent = $('.news-details');
    //         var $sideBar = $('#sideBar');
            
    //         $sideBar.css({
    //             height: $parent.height() + "px"

    //         });    
    //     });

        
    //     $(window).on("resize", function () {
    //         var $parent = $('.news-details');
    //         var $sideBar = $('#sideBar');
            
    //         $sideBar.css({
    //             height: $parent.height() + "px"

    //         }); 
    //     }).resize();


    //     $(window).scroll(function(event) {

    //         var windowTop = $(window).scrollTop();
    //         var marginTop = headerHeight;

    //         if(windowTop <= parentAbsoluteTop){
    //             $floatingBox.css({
    //                 position: 'absolute',
    //                 top: '0px',
    //                 bottom: 'auto'
    //             });
    //         } else if(windowTop > parentAbsoluteTop && (windowTop - marginTop) <= parentAbsoluteBottom){
    //             $floatingBox.css({
    //                 'position': 'fixed',
    //                 'top': marginTop + 'px',
    //                 'bottom': 'auto'
    //             });

    //         } else {
    //             $floatingBox.css({
    //                 position: 'absolute',
    //                 top: 'auto',
    //                 bottom: '0px'
    //             });


    //         }


    //         if(windowTop <= (parentAbsoluteBottom - 250)){
    //             $('.sticky-panel').show();
    //         } else {
    //             $('.sticky-panel').hide();   
    //         }
    //     }); 
    // });
    // /* ------------ FLOATING SIDEBAR ------------ */

$(window).on("scroll", function() {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop() + $('.div-scroll').height();
   // console.log(scrollHeight,scrollPosition)
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        
        $('.group-right').css({
            'position':'absolute',
        })
    }
    else{
       $('.group-right').css({
            'position':'fixed',
        }) 
    }
});