$('a').on('click', function (event) {
    event.preventDefault()
    $(this).addClass('animated pulse')
        .siblings().addClass('animated fadeOut')
    setTimeout($.proxy(function () {
        location = $(this).attr('href')
    }, this), 512)
});
$('a i').each(function (i) {
    var d = Math.floor(Math.random() * 10 - 5)
    $(this).css({
        MozTransform: 'rotate(' + d + 'deg)',
        WebkitTransform: 'rotate(' + d + 'deg)',
        OTransform: 'rotate(' + d + 'deg)',
        transform: 'rotate(' + d + 'deg)'
    })
    setTimeout($.proxy(function () {
        $(this).parent().toggleClass('hidden animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass('animated bounceIn') })
    }, this), Math.floor(Math.random() * 250))
});