var wage = 15.00;
var overtimewage = wage * 1.5;
var hoursStr = window.prompt("Please enter the hours worked by the employee","");
var hours = parseInt(hoursStr);
var hoursStored = [];
var amountPaid = [];
while(hours != -1){
  if(isNaN(hours)){
    alert("Please enter a number");
  }
  else{
    pay = 0.0;
    if(hours <= 40){
      pay = hours*wage;
    }
    else {
      overtimeHours = hours-40;
      pay = 40*wage + overtimeHours*overtimewage;
    }
    hoursStored.push(hours);
    amountPaid.push(pay);
  }
  hoursStr = window.prompt("Please enter the hours worked by the employee. Press -1 to stop","");
  hours = parseInt(hoursStr);
}
var table = document.getElementById("workTable");
var i;
var totalPay = 0.0;
for(i = 0; i<hoursStored.length;i++){
  var tRow = table.insertRow(-1);
  var cell1 = tRow.insertCell(0);
  var cell2 = tRow.insertCell(1);
  var cell3 = tRow.insertCell(2);
  var newText = document.createTextNode(i+1);
  cell1.appendChild(newText);
  newText = document.createTextNode(hoursStored[i]);
  cell2.appendChild(newText);
  newText = document.createTextNode(amountPaid[i]);
  cell3.appendChild(newText);
  totalPay += amountPaid[i];
}
var total = document.createElement("H3");
var t = document.createTextNode("Total pay: $"+ totalPay);
total.appendChild(t);
document.body.appendChild(total);
