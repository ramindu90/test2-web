/**
 * Created by Ramindu on 6/26/16.
 */

// $(document).ready(function() {
//     $(".nav-side-menu li").click(function() {
//         $(".nav-side-menu li").removeClass("active");
//         $(this).addClass("active");
//     });
// });

$(document).ready(function() {
    $(".nav-side-menu .sub-menu.collapse li").click(function() {

        $(".nav-side-menu .sub-menu.collapse li").removeClass("active");
        $(this).addClass("active");
        //gives its own ul id
        var menuContentId = $(this).closest("ul").attr("id");

        var ulListOwner = "#" + menuContentId;
        var mainListItems = $("li.menu-list-item");
        console.log(mainListItems.length);

        mainListItems.each(function(idx, li) {
            var attr = $(li).attr('data-target');
            if(ulListOwner === attr){
                $(li).addClass("active");
            } else {
                $(li).removeClass("active");
            }
        });
    });
});

$(document).ready(function() {
    $(".nav-side-menu li.menu-list-item").click(function() {
        $(".nav-side-menu li.menu-list-item").removeClass("active");
        $(".nav-side-menu .sub-menu.collapse li").removeClass("active");

        //activating its own ul
        $(this).addClass("active");
        var ulListOwner = $(this).attr("data-target");

        var mainListItems = $("li.menu-list-item");
        mainListItems.each(function(idx, li) {
            var attr = $(li).attr('data-target');
            if (typeof attr !== typeof undefined && attr !== false && ulListOwner != attr) {
                $(li).removeClass("collapsed");
                $(li).attr("aria-expanded","false");
                $(li).collapse('hide');
                console.log("collapsing: "+li.outerHTML);

            }
        });
        console.log("ha ha");
    });
});