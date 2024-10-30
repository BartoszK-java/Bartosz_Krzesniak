$(document).ready(function() {
    $('.thumbnail').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.5)');
            $(this).find('.description').text($(this).data('desc')).css('opacity', '1');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
            $(this).find('.description').css('opacity', '0');
        }
    );
});
