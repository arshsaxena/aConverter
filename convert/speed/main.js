function speedConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputMPH = document.getElementById("inputMPH");
    var inputKPH = document.getElementById("inputKPH");
    var inputKnots = document.getElementById("inputKnots");
    var inputMPS = document.getElementById("inputMPS");

    if (source == "inputMPH") {
        inputKPH.value = (valNum * 1.609344);
        inputKnots.value = (valNum / 1.150779);
        inputMPS.value = (valNum / 2.237);
    }
    if (source == "inputKPH") {
        inputMPH.value = (valNum / 1.609344);
        inputKnots.value = (valNum / 1.852);
        inputMPS.value = (valNum / 3.6);
    }
    if (source == "inputKnots") {
        inputMPH.value = (valNum * 1.150779);
        inputKPH.value = (valNum * 1.852);
        inputMPS.value = (valNum / 1.944);
    }
    if (source == "inputMPS") {
        inputMPH.value = (valNum * 2.237);
        inputKPH.value = (valNum * 3.6);
        inputKnots.value = (valNum * 1.944);
    }
}