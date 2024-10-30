$(document).ready(function() {
    $('.thumbnail').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.5)');
            $(this).find('.description').text($(this).data('desc')).show();
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
            $(this).find('.description').hide();
        }
    );
});
