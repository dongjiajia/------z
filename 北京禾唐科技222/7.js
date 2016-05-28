function addrowmy(){
	var oTr = document.getElementById("example").insertRow(2);	//≤Â»Î“ª––
	var aText = new Array();
	aText[0] = document.createTextNode("");
	aText[1] = document.createTextNode("");
	aText[2] = document.createTextNode("");
	aText[3] = document.createTextNode("");
	aText[4] = document.createTextNode("");
	for(var i=0;i<aText.length;i++){
		var oTd = oTr.insertCell(i);
		oTd.appendChild(aText[i]);
	}
}

function delrow(){
var i=example.rows.length;
example.deleteRow(i-1);
}