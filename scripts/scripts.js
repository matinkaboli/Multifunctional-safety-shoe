$(function () {
    var $shoeColors = $("ul.shoe-colors"),
        $largeImage = $(".large-image img"),
        $wnd = $(window);

    $largeImage.data("original", $largeImage.attr("src"));

    $shoeColors.find("img").on({
        mouseenter: function() {
            $largeImage.attr("src", $(this).attr("src"));
        },

    })

    if ($("html.no-touch").length > 0) {
        $shoeColors.on({
            mouseleave: function() {
                $largeImage.attr("src", $largeImage.data("original"));
            }
        });
    }

    var functionScaleSVG = function($parent, ratio, scale) {
        var maxSize = { width: $parent.width(), height: $parent.outerHeight() },
            size = { width: 0, height: 0 };

        size.width = maxSize.width * scale;
        size.height = size.width * ratio;

        if (size.height > maxSize.height) {
            ratio = maxSize.height / size.height;

            size.width = size.width * ratio;
            size.height = size.height * ratio;
        }

        return size;
    };

    $("section.technical-features, section.recyclable").each(function() {
        $wnd.bind("resize.svg-icons", function() {
            $("section.technical-features, section.recyclable").find("svg").each(function() {
                var $svg = $(this);

                $svg.css(functionScaleSVG($svg.parent(), parseFloat($svg.data("ratio")), parseFloat($svg.data("scale"))));
            });
        }).resize();

        $("section.technical-features, section.recyclable").each(function() {
            var $section = $(this);

            if ($section.data("visible") == undefined) {
                var timer = 500;

                $section.find("svg").each(function() {
                    var $svg = $(this);

                    setTimeout(function() {
                        $svg.parent().parent().addClass("visible");
                    }, timer);

                    timer += 75;
                });

                $section.data("visible", true);
            }
        });
    });

    $("section.video a").fancybox({
        padding: 0,
        type: 'iframe',
        width: 853,
        height: 480,
        aspectRatio: true,
        scrolling: 'no'
    });
});

/*
Developed by MojiTMJ - mojitmj.tk
Telefon: +39 380 260 7080 - E-mail: mojitmj@mojitmj.tk
*/
