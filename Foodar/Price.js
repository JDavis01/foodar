//checks price below

debugger;

var requestBtn = document.getElementById("price");

function getRadioValTreatment(name) {
    var val = "";
    var radios = name;
    
    for (var i=0; i<radios.length; i++) {
        if (radios[i].checked) { 
            val = radios[i].value;
            val = parseFloat(val); 
            break; 
        }
        if (i==radios.length-1 && !radios[i].checked) {
            return 0;
        }
    }
    return val; 
}

function getRadioValTip(name) {
    var val = "";
    var radios = name;
    
    for (var i=0; i<radios.length; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            val = parseFloat(val); 
            val /= 100;
            break; 
        }
        if (i==radios.length-1 && !radios[i].checked) {
            return 0;
        }
    }
    return val; 
}

var treatmentAmt = document.getElementsByName("treatment");
var tipAmt = document.getElementsByName("tipAmt");

for (var i = 0; i < treatmentAmt.length; i++) {
    treatmentAmt[i].addEventListener("change", getCharge);
}

for (var i = 0; i < treatmentAmt.length; i++) {
    tipAmt[i].addEventListener("change", getCharge);
}

function getCharge() {
    var treatmentAmt = getRadioValTreatment(document.getElementsByName("treatment"));
    var tipAmt = getRadioValTip(document.getElementsByName("tipAmt"));
    var total = treatmentAmt * tipAmt + treatmentAmt;
    document.getElementById("info").innerHTML = "Total: " + "$" + total;
}