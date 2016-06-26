/**
 * Created by Ramindu on 6/26/16.
 */

//to enable the active tab in tabs nav in login
$("#login-modal .nav.nav-tabs li a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});



