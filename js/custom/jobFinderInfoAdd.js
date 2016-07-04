/**
 * Created by Ramindu on 6/25/16.
 */
var educationalInfo = [];
var workInfo = [];
var currentItemsInEducationalInfo = 0;
var currentItemsInCVList = 0;
var map;

var profileSection = "profile-section";
var resumeSection = "resume-section";
var shortListedJobsSection = "short-listed-jobs-section";
var appliedJobsSection = "applied-jobs-section";
var alertsSection = "alerts-section";
var cvCoverLetterSection = "cv-cover-letter-section";
var changePasswordSection = "change-password-section";


function changeFinderInformationAddView(changingView) {
    if ('toPersonalInfoDiv' == changingView) {
        document.getElementById('personalInformationDiv').style.display = 'block';
        document.getElementById('educationalInfoDiv').style.display = 'none';
        document.getElementById('tab3').style.display = 'none';
    } else if ("educationalInfoDiv" == changingView) {
        document.getElementById('educationalInfoDiv').style.display = 'block';
        document.getElementById('personalInformationDiv').style.display = 'none';
        document.getElementById('tab3').style.display = 'none';
    }
}


function addEducationalInfo() {
    var item = {};
    var table = document.getElementById("educationInfoTable");
    var tableBody;
    if (currentItemsInEducationalInfo == 0) {
        tableBody = document.createElement("tbody");
        tableBody.setAttribute("id", "educationTableBody");
        var container = document.getElementById("educationalInfoDiv");
        container.style.display = 'inline';
        table.appendChild(tableBody);

        var headRow = document.createElement("tr");
        headRow.setAttribute("id", "eduTableHeaderId");
        headRow.innerHTML = "<th>School/University</th>" +
            "<th>Degree Level</th>" +
            "<th>Year</th>" +
            "<th class='action'>Action</th>";
        tableBody.appendChild(headRow);
    } else {
        tableBody = document.getElementById("educationTableBody");
    }
    currentItemsInEducationalInfo++;
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", "educationRow_" + currentItemsInEducationalInfo);

    console.log(currentItemsInEducationalInfo);

    if (currentItemsInEducationalInfo % 2 == 1) {
        dataRow.setAttribute("class", "odd");
    } else {
        dataRow.setAttribute("class", "even");
    }
    item["schoolOrUni"] = document.getElementById('school-university').value;
    item["year"] = document.getElementById('school-uni-year').value;
    var degreeLevelSelector = document.getElementById("degree-level");
    item["degreeLevel"] = degreeLevelSelector.options[degreeLevelSelector.selectedIndex].value;
    item["fieldOfStudy"] = document.getElementById('field-of-study').value;
    item["grade"] = document.getElementById('grade-s').value;
    item["key"] = "educationRow_" + currentItemsInEducationalInfo;

    dataRow.innerHTML = "<td><p>" + item["schoolOrUni"] + "</p></td>" +
        "<td><p>" + item["degreeLevel"] + "</p></td>" +
        "<td><p>" + item["year"] + "</p></td>" +
        "<td class=\"action\"><a class=\"clickable-anchor\" " +
                                                "onclick='removeEducationalInfo(" + currentItemsInEducationalInfo + ")'>" +
                                                    "<i class=\"fa fa-times\"></i>" +
                                                "remove</a></td>";

    tableBody.appendChild(dataRow);

    educationalInfo.push(item);
    document.getElementById('school-university').value = "";
    document.getElementById('school-uni-year').value = "";
    $('#degreeLevel :selected').attr('selected', '');
    document.getElementById('field-of-study').value = "";
    document.getElementById('grade-s').value = "";

    container = document.getElementById("educationalInfoDiv");
    container.style.display = 'block';

}

function removeEducationalInfo(currentItemId) {
    currentItemsInEducationalInfo--;
    if (currentItemsInEducationalInfo == 0) {
        var el = document.getElementById('eduTableHeaderId');
        el.parentNode.removeChild(el);
        var container = document.getElementById("educationalInfoDiv");
        container.style.display = 'none';
    }
    el = document.getElementById("educationRow_" + currentItemId);
    el.parentNode.removeChild(el);

    for (var i = 0; i < educationalInfo.length; i++) {
        var a = educationalInfo[i];

        if (a.key === "educationRow_" + currentItemId) {
            educationalInfo.splice(i, 1);
            break;
        }
    }
}

function addWorkInfo() {
    var item = {};
    var table = document.getElementById("workInfoTable");
    var tableBody;
    if (currentItemsInCVList == 0) {
        tableBody = document.createElement("tbody");
        tableBody.setAttribute("id", "workTableBody");
        var container = document.getElementById("workInfoDiv");
        container.style.display = 'inline';
        table.appendChild(tableBody);

        var headRow = document.createElement("tr");
        headRow.setAttribute("id", "workTableHeaderId");
        headRow.innerHTML = "<th>Work Place</th>" +
            "<th>Designation</th>" +
            "<th>No of Years</th>" +
            "<th class=\"action\">Action</th>";
        tableBody.appendChild(headRow);
    } else {
        tableBody = document.getElementById("workTableBody");
    }
    currentItemsInCVList++;
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", "workRow_" + currentItemsInCVList);

    console.log(currentItemsInCVList);

    if (currentItemsInCVList % 2 == 1) {
        dataRow.setAttribute("class", "odd");
    } else {
        dataRow.setAttribute("class", "even");
    }
    item["work-place"] = document.getElementById('work-place').value;
    item["number-of-years"] = document.getElementById('number-of-years').value;
    item["designation"] = document.getElementById("designation").value;
    item["work-description"] = document.getElementById('work-description').value;
    item["key"] = "workRow_" + currentItemsInCVList;

    dataRow.innerHTML = "<td><p>" + item["work-place"] + "</p></td>" +
        "<td><p>" + item["designation"] + "</p></td>" +
        "<td><p>" + item["number-of-years"] + "</p></td>" +
        "<td class=\"action\"><a class=\"clickable-anchor\" " +
                "onclick='removeWorkInfo(" + currentItemsInCVList + ")'>" +
                "<i class=\"fa fa-times\"></i>" +
                "remove</a></td>";


    tableBody.appendChild(dataRow);

    workInfo.push(item);
    document.getElementById('work-place').value = "";
    document.getElementById('number-of-years').value = "";
    document.getElementById('designation').value = "";
    document.getElementById('work-description').value = "";


    container = document.getElementById("workInfoDiv");
    container.style.display = 'block';

}

function removeWorkInfo(currentItemId) {
    currentItemsInEducationalInfo--;
    if (currentItemsInEducationalInfo == 0) {
        var el = document.getElementById('workTableHeaderId');
        el.parentNode.removeChild(el);

        var container = document.getElementById("workInfoDiv");
        container.style.display = 'none';
    }
    el = document.getElementById("workRow_" + currentItemId);
    el.parentNode.removeChild(el);

    for (var i = 0; i < educationalInfo.length; i++) {
        var a = educationalInfo[i];
        if (a.key === "workRow_" + currentItemId) {
            educationalInfo.splice(i, 1);
            break;
        }
    }
}

function changeMainView(section){
    var sectionElement = document.getElementById(section);

    document.getElementById(profileSection).style.display = 'none';
    document.getElementById(resumeSection).style.display = 'none';
    document.getElementById(shortListedJobsSection).style.display = 'none';
    document.getElementById(appliedJobsSection).style.display = 'none';
    document.getElementById(alertsSection).style.display = 'none';
    document.getElementById(cvCoverLetterSection).style.display = 'none';
    document.getElementById(changePasswordSection).style.display = 'none';

    if(sectionElement){
        sectionElement.style.display = 'block';
    } 
}

function changeSubView(section, subSection) {
    if('block' != document.getElementById(section).style.display) {
        document.getElementById(profileSection).style.display = 'none';
        document.getElementById(resumeSection).style.display = 'none';
        document.getElementById(shortListedJobsSection).style.display = 'none';
        document.getElementById(appliedJobsSection).style.display = 'none';
        document.getElementById(alertsSection).style.display = 'none';
        document.getElementById(cvCoverLetterSection).style.display = 'none';
        document.getElementById(changePasswordSection).style.display = 'none';

        document.getElementById(section).style.display = 'block';
    }

    document.getElementById(profileSection + "-personal-info").style.display = 'none';
    document.getElementById(profileSection + "-contact-info").style.display = 'none';
    document.getElementById(resumeSection + "-education-info").style.display = 'none';
    document.getElementById(resumeSection + "-work-info").style.display = 'none';

    if(profileSection == section) {
        if(profileSection + "-personal-info" == subSection) {
            document.getElementById(profileSection + "-personal-info").style.display = 'block';
        } else {
            document.getElementById(profileSection + "-contact-info").style.display = 'block';
        }
    }
    else if(resumeSection == section) {
        if(resumeSection + "-education-info" == subSection) {
            document.getElementById(resumeSection + "-education-info").style.display = 'block';
        } else {
            document.getElementById(resumeSection + "-work-info").style.display = 'block';
        }
    } else if (shortListedJobsSection == section) {

    } else if (appliedJobsSection == section) {

    } else if (alertsSection == section) {

    } else if (cvCoverLetterSection == section) {

    } else if (changePasswordSection == section) {

    }

}

$(document).ready(function() {
    initializeMap();
});

function initializeMap(){
    var defaultOSM = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });

    if (typeof(map) !== 'undefined'){
        map.remove();
    }

    map = L.map("finder-map", {
        zoom: 13,
        center: [6.9218386,79.8562055],
        layers: [defaultOSM],
        zoomControl: false,
        attributionControl: true,
        maxZoom: 20,
        maxNativeZoom: 20
    });

    if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }


}



function success(position) {
    var browserLatitude = position.coords.latitude;
    var browserLongitude = position.coords.longitude;
    map.setView([browserLatitude, browserLongitude]);
    map.setZoom(13);
    //
    //
    // $.UIkit.notify({
    //     message: "Map view set to browser's location",
    //     status: 'info',
    //     timeout: 2000,
    //     pos: 'top-center'
    // });
}

function error(e) {
    console.log('Error occurred. Error code: ' + e.code);
     // $.UIkit.notify({
     //     message: "Unable to find browser location!",
     //     status: 'warning',
     //     timeout: 2000,
     //     pos: 'top-center'
     // });
 }


