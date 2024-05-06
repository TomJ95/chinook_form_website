var markPrice = [];
markPrice["HC5"] = 65;
markPrice["HC6a"] = 58;
markPrice["HC6"] = 62;


function getAircraftMarkPrice() {
  var aircraftMarkPrice = 0;
  var theForm = document.forms["chinookForm"];
  var selectedMark = theForm.elements["aircraftMark"];
  for(var i = 0; i < selectedMark.length; i++)
    {
      if(selectedMark[i].checked)
        {
          aircraftMarkPrice = markPrice[selectedMark[i].value];
          break;
        }
    }
  return aircraftMarkPrice;
}

var roleEquipment = [];
roleEquipment.minigun = 3;
roleEquipment.M60 = 0.5;
roleEquipment.DAS = 5;
roleEquipment.ballistic = 1;
roleEquipment.winch = 0.5;
roleEquipment.hoist = 0.5;
roleEquipment.husle = 0.2;
roleEquipment.MS10 = 0.1;

function getRoleEquipmentPrice() {
  var roleEquipmentPrice = 0;
  var theForm = document.forms["chinookForm"];
  var selectedExtras = theForm.elements.selectedExtras;
  
  for (var i = 0; i < selectedExtras.length; i++) {
    if(selectedExtras[i].checked) {
      roleEquipmentPrice += roleEquipment[selectedExtras[i].id];
    }
  }
  return roleEquipmentPrice;
}

function calculateTotal() {
  var chinookPrice = getAircraftMarkPrice() + getRoleEquipmentPrice();
  
  var divobj = document.getElementById("totalCost");
  divobj.style.display="block";
  divobj.innerHTML = "Chinook Total Cost £" + chinookPrice + " " + "Million";
}

function hideTotal() {
  var divobj = document.getElementById("totalCost");
  divobj.style.display="none";
}