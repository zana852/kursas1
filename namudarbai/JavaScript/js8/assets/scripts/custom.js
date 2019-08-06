//alert ("all well!"); //message for checking JS
var k;
function duokManSavaitesDienaPagalSkaiciu(index){
  let savaiteDienos=["Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis","Sekmadienis"];
  let k=prompt("Įveskite savaitės diena-sveiką skaičių nuo 1 iki 7");
  alert (savaiteDienos[k-1]);
  return k;
}
duokManSavaitesDienaPagalSkaiciu()
