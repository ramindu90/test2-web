/**
 * Created by Ramindu on 6/25/16.
 */
var educationalInfo = [];
var currentItemsInEducationalInfo = 0;


function changeFinderInformationAddView(changingView){
    if('toPersonalInfoDiv' == changingView){
        document.getElementById('personalInformationDiv').style.display = 'block';
        document.getElementById('educationalInfoDiv').style.display = 'none';
        document.getElementById('tab3').style.display = 'none';
    } else if("educationalInfoDiv" == changingView){
        document.getElementById('educationalInfoDiv').style.display = 'block';
        document.getElementById('personalInformationDiv').style.display = 'none';
        document.getElementById('tab3').style.display = 'none';
    }
}



function addEducationalInfo(){
    var item = {};
    var table = document.getElementById("educationInfoTable");
    if(currentItemsInEducationalInfo == 0){
        var headRow = document.createElement("tr");
        headRow.setAttribute("id", "tableHeaderId");
        // headRow.innerHTML = "<th class=\"three columns\"><h5 style=\"text-align:left;float:left;\">School/University</h5></th>" +
        //                     "<th class=\"three columns\"><h5 style=\"text-align:left;float:left;\">Degree Level</h5></th>" +
        //                     "<th class=\"three columns\"><h5 style=\"text-align:left;float:left;\">Year</h5></th>" +
        //                     "<th class=\"three columns\"><h5 style=\"text-align:left;float:left;\">remove</h5></th>";

        headRow.innerHTML = "<th>School/University</th>" +
            "<th>Degree Level</th>" +
            "<th>Year</th>" +
            "<th>remove</th>";
        table.appendChild(headRow);
    }
    currentItemsInEducationalInfo++;
    item["schoolOrUni"] = document.getElementById('schoolOrUniversityName').value;
    item["year"] = document.getElementById('year').value;
    var degreeLevelSelector = document.getElementById("degreeLevel");
    item["degreeLevel"] = degreeLevelSelector.options[degreeLevelSelector.selectedIndex].value;
    item["fieldOfStudy"] = document.getElementById('fieldOfStudy').value;
    item["grade"] = document.getElementById('grade').value;
    item["country"] = document.getElementById('country').value;
    item["key"] = "educationRow_" + currentItemsInEducationalInfo;
    
    var dataRow = document.createElement("tr");
    dataRow.setAttribute("id", "educationRow_" + currentItemsInEducationalInfo);
    // dataRow.innerHTML = "<td class=\"three columns\"><h5 style=\"text-align:center;float:left;\"/>" + item["schoolOrUni"] + "</h5></td>" +
    //                     "<td class=\"three columns\"><h5 style=\"text-align:center;float:left;\">" + item["degreeLevel"] + "</h5></td>" +
    //                     "<td class=\"three columns\"><h5 style=\"text-align:center;float:left;\">" + item["year"] + "</h5></td>";

    dataRow.innerHTML = "<td style=\"text-align:center;\">" + item["schoolOrUni"] + "</td>" +
        "<td style=\"text-align:center;\">" + item["degreeLevel"] + "</td>" +
        "<td style=\"text-align:center;\">" + item["year"] + "</td>";


    var dataCell = document.createElement("td");
    dataCell.setAttribute("style", "text-align:center");
    var img = document.createElement("img");
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("onclick", "return false;");
    img.setAttribute("src", "../resources/images/common/remove_icon.png");
    img.setAttribute("alt", "remove icon");
    img.setAttribute("class", "button");
    img.setAttribute("style", "width:25px;height:25px;float: left;");
    img.setAttribute("onclick", "removeEducationalInfo("+currentItemsInEducationalInfo+")");
    a.appendChild(img);
    dataCell.appendChild(a);
    dataRow.appendChild(dataCell);


    table.appendChild(dataRow);

    educationalInfo.push(item);
    document.getElementById('schoolOrUniversityName').value = "";
    document.getElementById('year').value = "";
    $('#degreeLevel :selected').attr('selected', '');
    document.getElementById('fieldOfStudy').value = "";
    document.getElementById('grade').value = "";
    document.getElementById('country').value = "";

    $('#educationalModal').modal('hide');
}

function removeEducationalInfo(currentItemId){
    currentItemsInEducationalInfo--;
    if(currentItemsInEducationalInfo == 0){
        var el = document.getElementById('tableHeaderId');
        el.parentNode.removeChild(el);
    }
    el = document.getElementById("educationRow_" + currentItemId);
    el.parentNode.removeChild(el);

    for(var i = 0; i < educationalInfo.length; i++) {
        var a = educationalInfo[i];

        if(a.key === "educationRow_" + currentItemId) {
            educationalInfo.splice(i, 1);
            break;
        }
    }
}
