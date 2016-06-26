/**
 * Created by Ramindu on 6/26/16.
 */
// $(".nav a").on("click", function(){
//     $(".nav").find(".active").removeClass("active");
//     $(this).parent().addClass("active");
// });

$('#login-modal .nav.nav-tabs li a').click(function(e) {
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});
