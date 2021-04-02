function massConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputPounds = document.getElementById("inputPounds");
    var inputKilograms = document.getElementById("inputKilograms");
    var inputOunces = document.getElementById("inputOunces");
    var inputGrams = document.getElementById("inputGrams");
    var inputStones = document.getElementById("inputStones");
    var inputTonnes = document.getElementById("inputTonnes");
    var inputMilligrams = document.getElementById("inputMilligrams");

    if (source == "inputPounds") {
        inputKilograms.value = (valNum / 2.2046);
        inputOunces.value = (valNum * 16);
        inputGrams.value = (valNum / 0.0022046);
        inputStones.value = (valNum * 0.071429);
        inputTonnes.value = (valNum / 2205);
        inputMilligrams.value = (valNum * 453592);
    }
    if (source == "inputKilograms") {
        inputPounds.value = (valNum * 2.2046);
        inputOunces.value = (valNum * 35.274);
        inputGrams.value = (valNum * 1000);
        inputStones.value = (valNum * 0.1574);
        inputTonnes.value = (valNum / 1000);
        inputMilligrams.value = (valNum * 1000000);
    }
    if (source == "inputOunces") {
        inputPounds.value = (valNum * 0.062500);
        inputKilograms.value = (valNum / 35.274);
        inputGrams.value = (valNum / 0.035274);
        inputStones.value = (valNum * 0.0044643);
        inputTonnes.value = (valNum / 35247);
        inputMilligrams.value = (valNum * 28350);
    }
    if (source == "inputGrams") {
        inputPounds.value = (valNum * 0.0022046);
        inputKilograms.value = (valNum / 1000);
        inputOunces.value = (valNum * 0.035274);
        inputStones.value = (valNum * 0.00015747);
        inputTonnes.value = (valNum / 1000000);
        inputMilligrams.value = (valNum * 1000);
    }
    if (source == "inputStones") {
        inputPounds.value = (valNum * 14);
        inputKilograms.value = (valNum / 0.15747);
        inputOunces.value = (valNum * 224);
        inputGrams.value = (valNum / 0.00015747);
        inputTonnes.value = (valNum / 15747);
        inputMilligrams.value = (valNum * 6350000);
    }
    if (source == "inputTonnes") {
        inputPounds.value = (valNum * 2205);
        inputKilograms.value = (valNum * 1000);
        inputOunces.value = (valNum * 35247);
        inputStones.value = (valNum * 157.473);
        inputGrams.value = (valNum * 1000000);
        inputMilligrams.value = (valNum * 1000000000);
    }
    if (source == "inputMilligrams") {
        inputPounds.value = (valNum / 453592);
        inputKilograms.value = (valNum / 1000000);
        inputOunces.value = (valNum / 28350);
        inputStones.value = (valNum / 6350000);
        inputGrams.value = (valNum / 1000);
        inputTonnes.value = (valNum / 1000000000);
    }
}

$(document).ready(function(){
    $(".tonne").fadeIn(450);
    $(".kilogram").fadeIn(650);
    $(".gram").fadeIn(850);
    $(".milligram").fadeIn(1050);
    $(".stone").fadeIn(1250);
    $(".pound").fadeIn(1450);
    $(".ounce").fadeIn(1650);
});