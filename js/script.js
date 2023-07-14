$(function() {
    $('.gnb > ul > li').on('mouseover',function() {
        $('#hdBg').slideDown(300);
        $('.gnb .depth2').fadeIn(300)
    })
    $('.gnb').on('mouseleave', function() {
        $('#hdBg').slideUp(300);
        $('.gnb .depth2').fadeOut(300);
    })

    $('#familyBtn').on('click', function() {
        $('.siteBox').toggle();
    })
    $('#closeBtn').on('click', function() {
        $('.siteBox').hide();
    })

    $('#menuBtn').on('click', function() {
        $('#mobileGnb').animate({
            right: "0"
        },
        500, "linear",function() {
        })
        $('#mobileBg').fadeIn(300)
    })
    $('#btnGnbHide').on('click', function() {
        $('#mobileGnb').animate({
            right: "-150%"
        },
        500, "linear",function() {
        })
        $('#mobileBg').fadeOut(300)
    })
})