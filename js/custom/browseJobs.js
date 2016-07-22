/**
 * Created by ramindu on 7/9/16.
 */

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/JobFind/browse-jobs",
        method: "GET",
        dataType: 'json',
        // contentType: 'application/json',
        // data: JSON.stringify(bc.filters),
        success: function (response) {
            if (Object.prototype.toString.call(response) === '[object Array]' && response.length === 1) {
                console.log(response);
            } else {
                console.error("Invalid response structure found: " + JSON.stringify(response));
            }
        },
        // complete: function (jqXHR, status) {
        //     if (status !== "success") console.warn("Error accessing source for : ");
        // }
    });

});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return "unavailable";
}


