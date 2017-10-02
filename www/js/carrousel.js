jQuery(document).ready(function($) {
    $('#bk-content-outer-wrap').append('<div id="thumb-tray" class="load-item"><div id="thumb-back"></div><div id="thumb-forward"></div></div><ul id="supersized"></ul>');
    $('#bk-fullscreen-background-wrap').append('<div id="supersized-overlay"></div><div id="supersized-loader"></div><a id="prevslide" class="load-item"></a><a id="nextslide" class="load-item"></a><div id="slidecaption"></div>');
});

jQuery(function($) {
    $.supersized({

        // Functionality
        slideshow: 1, // Slideshow on/off
        autoplay: 1, // Slideshow starts playing automatically
        start_slide: 1, // Start slide (0 is random)
        stop_loop: 0, // Pauses slideshow on last slide
        random: 0, // Randomize slide order (Ignores start slide)
        slide_interval: 3000, // Length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 1000, // Speed of transition
        new_window: 0, // Image links open in new window/tab
        pause_hover: 1, // Pause slideshow on hover
        keyboard_nav: 1, // Keyboard navigation on/off
        performance: 1, // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
        image_protect: 1, // Disables image dragging and right click with Javascript

        // Size & Position						   
        min_width: 0, // Min width allowed (in pixels)
        min_height: 400, // Min height allowed (in pixels)
        vertical_center: 1, // Vertically center background
        horizontal_center: 1, // Horizontally center background
        fit_always: 0, // Image will never exceed browser width or height (Ignores min. dimensions)
        fit_portrait: 1, // Portrait images will not exceed browser height
        fit_landscape: 0, // Landscape images will not exceed browser width

        // Components							
        slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
        thumb_links: 1, // Individual thumb links for each slide
        thumbnail_navigation: 0, // Thumbnail navigation
        slides: [{
            image: "img/001.jpg",
            thumb: "img/001.jpg",
            url: "",
            title: ""
        }, {
            image: "img/02.jpg",
            thumb: "img/02.jpg",
            url: "",
            title: ""
        }, {
            image: "img/03.jpg",
            thumb: "img/03.jpg",
            url: "",
            title: ""
        }, {
            image: "img/04.jpg",
            thumb: "img/04.jpg",
            url: "",
            title: ""
        }, {
            image: "img/05.jpg",
            thumb: "img/05.jpg",
            url: "",
            title: ""
        }, {
            image: "img/06.jpg",
            thumb: "img/06.jpg",
            url: "",
            title: ""
        }, {
            image: "img/07.jpg",
            thumb: "img/07.jpg",
            url: "",
            title: ""
        }, {
            image: "img/09.jpg",
            thumb: "img/09.jpg",
            url: "",
            title: ""
        }, {
            image: "img/10.jpg",
            thumb: "img/10.jpg",
            url: "",
            title: ""
        }, {
            image: "img/11.jpg",
            thumb: "img/11.jpg",
            url: "",
            title: ""
        }],

        // Theme Options			   
        progress_bar: 0, // Timer for each slide							
        mouse_scrub: 1
    });
});

Shadowbox.init(shadowbox_conf);