/**
 * Created by Ramindu on 7/3/16.
 */

var cvDetails = [];
var noOfItems = 0;


//todo: this has to be deleted when theres a working backend
$(document).ready(function () {
    initializeItemsInCVList();
});

function initializeItemsInCVList() {
    var singleItem = {};
    singleItem["file-path"] = "afwefwe/wefwef/wefwef/wefwef.pdf";
    singleItem["cvName"] = "CVName";
    singleItem["cvDescription"] = "This is regarding Software Engineering";
    singleItem["coverLetter"] = "Hello my name is Mark William Connor and I’m a Web Designer & Web Developer from Melbourne, Australia. In pharetra ornaci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit.re ipsum sed sem condimentum, et pulvinar tortor luctus.";
    cvDetails.push(singleItem);
    singleItem["file-path"] = "afwefwe/wefwef/wefwef/wefwef22.pdf";
    singleItem["cvName"] = "CVName2";
    singleItem["cvDescription"] = "This is regarding Mechanical Engineering";
    singleItem["coverLetter"] = "Hello my name is Mark William Connor and I’m a Web Designer & Web Developer from Melbourne, Australia. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie.";
    cvDetails.push(singleItem);


    if (cvDetails.length < 1) {
        document.getElementById("no-cv-detail-notification").style.display = 'block';
    } else {
        document.getElementById("no-cv-detail-notification").style.display = 'none';
        for (var i = 0; i < cvDetails.length; i++) {
            addTableRowData(cvDetails[i]);
        }
    }
}

function addNewCVInformation() {
    var item = {};
    //TODO: check if the cv-file-name and pop-up an error message
    item["file-path"] = document.getElementById('cv-browse-notification').value;
    item["cvName"] = document.getElementById('cv-name').value;
    item["cvDescription"] = document.getElementById("cv-description").value;
    item["coverLetter"] = document.getElementById('cover-letter-description').value;
    addTableRowData(item);
    makeViewDisplay('add-new-cv-details', 'cv-info-editing-area');
}

function addTableRowData(singleItem) {
    var tableBody = document.getElementById("cv-and-cover-letter-table-body");
    noOfItems++;
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", "cvId_" + singleItem.cvName);
    if (currentItemsInWorkInfo % 2 == 1) {
        dataRow.setAttribute("class", "odd col-md-12");
    } else {
        dataRow.setAttribute("class", "even col-md-12");
    }
    dataRow.innerHTML = "<td class=\"tbl-title col-md-9\"><h4>" + singleItem.cvName + "</h4><p>" + singleItem.cvDescription + "</p></td>" +
        "<td class=\"tbl-title col-md-1\"><a class=\"job-type-btn job-type-green clickable-anchor\" onclick='viewCVInfo(" + singleItem.cvName + ")'>View</a></td>" +
        "<td class=\"tbl-title col-md-1\"><a class=\"job-type-btn job-type-blue clickable-anchor\" onclick='updateCVInfo(" + singleItem.cvName + ")'>Update</a></td>" +
        "<td class=\"tbl-title col-md-1\"><a class=\"job-type-btn job-type-red clickable-anchor\" onclick='deleteCVInfo(" + singleItem.cvName + ")'>Delete</a></td>";

    tableBody.appendChild(dataRow);
}

function viewCVInfo(cvName) {

}

function updateCVInfo(cvName) {
    console.log(cvName);
    makeViewDisplay('cv-info-editing-area', 'add-new-cv-details');
    for (var i = 0; i < cvDetails.length; i++) {
        if (cvDetails[i].cvName == cvName) {
            $(document.getElementById('cv-browse-notification')).text(cvDetails[i].file);
            $(document.getElementById('cv-name')).text(cvDetails[i].cvName);
            $(document.getElementById("cv-description")).text(cvDetails[i].cvDescription);
            $(document.getElementById('cover-letter-description')).text(cvDetails[i].coverLetter);
        }
    }
}

function deleteCVInfo(cvName) {
    console.log(cvName);
    //TODO message box for confirm
    console.log(cvName);
    for (var i = 0; i < cvDetails.length; i++) {
        var cv = cvDetails[i];
        if (cv.cvName == cvName) {
            cvDetails.splice(i, 1);
        }
    }
    var el = document.getElementById("cvId_" + cv.cvName);
    el.parentNode.removeChild(el);
}

function makeViewDisplay(showDiv, hideDiv) {
    document.getElementById(showDiv).style.display = 'block';
    document.getElementById(hideDiv).style.display = 'none';
}

function handleBrowseClick() {
    var fileInput = document.getElementById("browse");
    fileInput.click();
}

function handleChange() {
    var fileInput = document.getElementById("browse");
    var textInput = document.getElementById("cv-browse-notification");
    textInput.value = fileInput.value;
    $(textInput).text(fileInput.value);
}


