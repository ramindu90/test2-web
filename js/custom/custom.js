/**
 * Created by Ramindu on 6/26/16.
 */

var profileSection = "profile-section";
var resumeSection = "resume-section";
var shortListedJobsSection = "short-listed-jobs-section";
var appliedJobsSection = "applied-jobs-section";
var alertsSection = "alerts-section";
var cvCoverLetterSection = "cv-cover-letter-section";
var changePasswordSection = "change-password-section";

$(document).ready(function() {
    $(".nav-side-menu .sub-menu.collapse li").click(function() {

        $(".nav-side-menu .sub-menu.collapse li").removeClass("active");
        $(this).addClass("active");
        //gives its own ul id
        var menuContentId = $(this).closest("ul").attr("id");

        var ulListOwner = "#" + menuContentId;
        var mainListItems = $("li.menu-list-item");
        console.log(mainListItems.length);

        document.getElementById(profileSection).style.display = 'none';
        document.getElementById(resumeSection).style.display = 'none';
        document.getElementById(shortListedJobsSection).style.display = 'none';
        document.getElementById(appliedJobsSection).style.display = 'none';
        document.getElementById(alertsSection).style.display = 'none';
        document.getElementById(cvCoverLetterSection).style.display = 'none';
        document.getElementById(changePasswordSection).style.display = 'none';

        mainListItems.each(function(idx, li) {
            var attr = $(li).attr('data-target');
            if(ulListOwner === attr){
                $(li).addClass("active");
                if ("#profile" == attr) {
                    document.getElementById(profileSection).style.display = 'block';
                    document.getElementById(resumeSection).style.display = 'none';
                } else if ("#resume" == attr) {
                    document.getElementById(profileSection).style.display = 'none';
                    document.getElementById(resumeSection).style.display = 'block';
                }

            } else {
                $(li).removeClass("active");
            }
        });
    });
});


$(document).ready(function() {
    $("#profile-section-collapse-id").addClass("active");
    $(".nav-side-menu li.menu-list-item").click(function() {
        //only changing the other elements if its a fresh click
        if ($(this).attr("class").toLowerCase().indexOf("active") < 0) {
            //removing active from all other main menus
            $(".nav-side-menu li.menu-list-item").removeClass("active");
            //removing active from all other sub menus
            $(".nav-side-menu .sub-menu.collapse li").removeClass("active");
            //activating its own
            $(this).addClass("active");

            //need to select the first submenu automatically since this is s fresh click on main menu
            console.log($(this).attr("data-target"));

            if ("#profile" == $(this).attr("data-target")) {
                $("#profile-section-personal-info-collapse-id").addClass("active");
                $("#profile-section-contact-info-collapse-id").removeClass("active");

            } else if ("#resume" == $(this).attr("data-target")) {
                $("#resume-section-education-info-collapse-id").addClass("active");
                $("#resume-section-work-info-collapse-id").removeClass("active");
            }
        }




        //TODO: wrote to execute collapse programmatically but doesn't work
        // var ulListOwner = $(this).attr("data-target");
        // var mainListItems = $("li.menu-list-item");
        // mainListItems.each(function(idx, li) {
        //     var attr = $(li).attr('data-target');
        //     if (typeof attr !== typeof undefined && attr !== false && ulListOwner != attr) {
        //         $(li).removeClass("collapsed");
        //         $(li).attr("aria-expanded","false");
        //         $(li).collapse('hide');
        //     }
        // });
        console.log("ha ha");



    });
});

// $(window).scroll(function(){
//     $("#dashboard-nav-side-menu").css("top",Math.max(0,280-$(this).scrollTop()));
// });