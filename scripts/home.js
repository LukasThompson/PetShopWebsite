function HomeIndex() {
    /* Properties */
    const heightFromTop = 300;
    /* Methods */
    this.initialiseScrollToTopButton = function () {
        /* Window Scroll Event Handler */
        $(window).scroll(function () {
            /* Show or Hide Scroll to Top button based on scroll distance */
            var verticalHeight = $(this).scrollTop();
            if (verticalHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });
        /* Scroll to Top Click Event Handler */
        $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0}, "slow");
        });
    }
    $(document).ready(function (){
        /* Instantiate new Home Class */
        app.homeIndex = new HomeIndex();
        /* Instantiate Scroll to Top button */
        app.homeIndex.initialiseScrollToTopButton();
    });
}