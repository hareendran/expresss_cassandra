var search = document.querySelector('[type=search]');
var code = document.querySelector('pre');

search.addEventListener('keyup', function(){
  var xhr = new XMLHttpRequest;
  xhr.open('GET', '/users/search/' + search.value, true);
  xhr.onreadystatechange = function(){
    if (4 == xhr.readyState) {
      var ajaxResponse = xhr.responseText;
      //code.textContent = xhr.responseText;
      createTable(ajaxResponse);


    }
  };
  xhr.send();
}, false);


function  createTable(data){


var fragment = document.createDocumentFragment();
var response = JSON.parse(data);
console.log('resp',response);
document.getElementById("here_table").innerHTML = '';
for (i = 0; i < response.rows.length; i++) {
    var tr = document.createElement("tr");
//[{"home_id":"H00999943","datetime":"2014-05-23T22:56:23.000Z",
//"code_used":"1245","event":"alarm turned off"}

    var singleRow = response.rows[i];

    var td2 = document.createElement("td");
    td2.innerHTML = singleRow.home_id;
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = singleRow.datetime;
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    td4.innerHTML = singleRow.code_used;
    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.innerHTML = singleRow.event;
    tr.appendChild(td5);
    //does not trigger reflow
    fragment.appendChild(tr);
}

var table = document.createElement("table");
table.border = 1;

table.appendChild(fragment);

document.getElementById("here_table").appendChild(table);
}
