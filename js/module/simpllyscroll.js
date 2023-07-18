export default function SimplyScroll() {

    (function($) {
        $(function() {
            $("#news_scroll").simplyScroll({
                orientation: 'vertical',
                speed: 0.5
            });
        });
    })(jQuery);
}