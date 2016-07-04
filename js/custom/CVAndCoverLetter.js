/**
 * Created by Ramindu on 7/3/16.
 */

var cvDetails = [];
var noOfItems = 0;


//todo: this has to be deleted when there's a working backend
$(document).ready(function () {
    initializeItemsInCVList();
});

//todo: this has to be deleted when there's a working backend
function initializeItemsInCVList() {
    var singleItem = {};
    var singleItem2 = {};
    var date = new Date();
    singleItem["key"] = "cvId_" + Date.UTC(date.getFullYear(), date.getDate(), date.getDay(), date.getHours(), date.getMinutes(), 11);
    console.log(singleItem["key"]);
    singleItem["filePath"] = "afwefwe/wefwef/wefwef/wefwef.pdf";
    singleItem["cvName"] = "CVName";
    singleItem["cvDescription"] = "This is regarding Software Engineering";
    singleItem["coverLetter"] = "Hello my name is Mark William Connor and I’m a Web Designer & Web Developer from Melbourne, Australia. In pharetra ornaci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit.re ipsum sed sem condimentum, et pulvinar tortor luctus.";
    cvDetails.push(singleItem);
    singleItem2["key"] = "cvId_" + Date.UTC(date.getFullYear(), date.getDate(), date.getDay(), date.getHours(), date.getMinutes(), 13);
    console.log(singleItem2["key"]);
    singleItem2["filePath"] = "afwefwe/wefwef/wefwef/wefwef22.pdf";
    singleItem2["cvName"] = "CVName2";
    singleItem2["cvDescription"] = "This is regarding Mechanical Engineering";
    singleItem2["coverLetter"] = "Hello my name is Mark William Connor and I’m a Web Designer & Web Developer from Melbourne, Australia. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie.";
    cvDetails.push(singleItem2);


    if (cvDetails.length < 1) {
        document.getElementById("no-cv-detail-notification").style.display = 'block';
    } else {
        document.getElementById("no-cv-detail-notification").style.display = 'none';
        for (var i = 0; i < cvDetails.length; i++) {
            addTableRowData(cvDetails[i]);
            console.log(cvDetails[i]);
        }
    }
}

function addTableRowData(singleItem) {
    var tableBody = document.getElementById("cv-and-cover-letter-table-body");
    noOfItems++;
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", singleItem.key);
    if (currentItemsInCVList % 2 == 1) {
        dataRow.setAttribute("class", "even col-md-12");
    } else {
        dataRow.setAttribute("class", "odd col-md-12");
    }
    currentItemsInCVList++;
    dataRow.innerHTML = "<td class=\"tbl-title col-md-9\"><h4>" + singleItem.cvName + "</h4><p>" + singleItem.cvDescription + "</p></td>" +
        "<td class=\"tbl-title col-md-1\"><a class=\"job-type-btn job-type-green clickable-anchor\" onclick=\"viewCVInfo(\'" + singleItem.key + "\')\">View</a></td>" +
        "<td class=\"tbl-title col-md-1\"><a class=\"job-type-btn job-type-blue clickable-anchor\" onclick=\"updateCVInfo(\'" + singleItem.key + "\')\">Update</a></td>" +
        "<td class=\"tbl-title col-md-1 action\"><a class=\"job-type-btn job-type-red clickable-anchor\" onclick=\"deleteCVInfo(\'" + singleItem.key + "\')\">Delete</a></td>";
    tableBody.appendChild(dataRow);
}

function showAddNewCVInformationView() {
    makeViewDisplay('cv-info-editing-area','add-new-cv-details');
    showButton("add-cv-info-button");
    $(document.getElementById('cv-browse-notification')).text("Browse for the cv and select!");
}

function addNewCVInformation() {
    var item = {};
    //TODO: check if the cv-file-name and pop-up an error message
    var date = new Date();
    item["key"] = "cvId_" + Date.UTC(date.getFullYear(), date.getDate(), date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds());
    item["filePath"] = document.getElementById('cv-browse-notification').value;
    item["cvName"] = document.getElementById('cv-name').value;
    item["cvDescription"] = document.getElementById("cv-description").value;
    item["coverLetter"] = document.getElementById('cover-letter-description').value;
    cvDetails.push(item);
    addTableRowData(item);
    clearInputs();
    makeViewDisplay('add-new-cv-details', 'cv-info-editing-area');
}

function viewCVInfo(cvkey) {
    makeViewDisplay('cv-info-editing-area', 'add-new-cv-details');
    showButton("done-show-cv-info-button");
    console.log(cvkey);
    for (var i = 0; i < cvDetails.length; i++) {
        if (cvDetails[i].key == cvkey) {
            updatingCVKey = cvkey;
            $(document.getElementById('cv-browse-notification')).text(cvDetails[i].filePath);
            $('#cv-name').attr('value', cvDetails[i].cvName);
            $('#cv-description').attr('value', cvDetails[i].cvDescription);
            $(document.getElementById('cover-letter-description')).text(cvDetails[i].coverLetter);

            document.getElementById('done-show-cv-info-button').style.display = 'block';
            document.getElementById('update-cv-info-button').style.display = 'none';
            document.getElementById('add-cv-info-button').style.display = 'none';
        }
    }
}

function doneShowCVInformation() {
    makeViewDisplay('add-new-cv-details', 'cv-info-editing-area');
    document.getElementById('done-show-cv-info-button').style.display = 'none';
    document.getElementById('update-cv-info-button').style.display = 'none';
    document.getElementById('add-cv-info-button').style.display = 'none';

    clearInputs();
}

var updatingCVKey = null;
//calls when update button clicked in the table row
function updateCVInfo(cvkey) {
    console.log(cvkey);
    makeViewDisplay('cv-info-editing-area', 'add-new-cv-details');
    showButton('update-cv-info-button');
    for (var i = 0; i < cvDetails.length; i++) {
        if (cvDetails[i].key == cvkey) {
            console.log(" the updating key setted: " + cvkey);
            updatingCVKey = cvkey;
            $(document.getElementById('cv-browse-notification')).text(cvDetails[i].filePath);
            $('#cv-name').attr('value', cvDetails[i].cvName);
            $('#cv-description').attr('value', cvDetails[i].cvDescription);
            $(document.getElementById('cover-letter-description')).text(cvDetails[i].coverLetter);
        }
    }
}

//calls when the actual information is updated
function updateCVInformation() {
    var item = {};
    item["key"] = updatingCVKey;
    item["filePath"] = document.getElementById('cv-browse-notification').value;
    item["cvName"] = document.getElementById('cv-name').value;
    item["cvDescription"] = document.getElementById("cv-description").value;
    item["coverLetter"] = document.getElementById('cover-letter-description').value;

    cvDetails.push(item);
    deleteCVInfo(updatingCVKey);
    addTableRowData(item);
    makeViewDisplay('add-new-cv-details', 'cv-info-editing-area');
    clearInputs();
}

function deleteCVInfo(cvkey) {
    //TODO message box for confirm
    for (var i = 0; i < cvDetails.length; i++) {
        console.log(cvDetails.length);
        if (cvDetails[i].key == cvkey) {
            console.log("found the updating key: " + cvkey);
            cvDetails.splice(i, 1);
            currentItemsInCVList--;
            break;
        }
    }
    console.log(cvDetails.length);
    var el = document.getElementById(cvkey);
    el.parentNode.removeChild(el);
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

function makeViewDisplay(showDiv, hideDiv) {
    document.getElementById(showDiv).style.display = 'block';
    document.getElementById(hideDiv).style.display = 'none';
}

function clearInputs(){
    console.log("clearing elements !!");
    $(document.getElementById('cv-browse-notification')).text("Browse for the cv and select!");
    $('#cv-name').attr('value', '');
    $('#cv-description').attr('value', '');
    $(document.getElementById('cover-letter-description')).text('');
}

function showButton(buttonName) {
    console.log(buttonName);
    document.getElementById('done-show-cv-info-button').style.display = 'none';
    document.getElementById('update-cv-info-button').style.display = 'none';
    document.getElementById('add-cv-info-button').style.display = 'none';
    document.getElementById(buttonName).style.display = 'block';
}


