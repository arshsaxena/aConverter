function lengthConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var inputLightYears = document.getElementById("inputLightYears");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMeters = document.getElementById("inputMeters");
    var inputDecimeters = document.getElementById("inputDecimeters");
    var inputCentimeters = document.getElementById("inputCentimeters");
    var inputMillimeters = document.getElementById("inputMillimeters");
    var inputMicrometers = document.getElementById("inputMicrometers");
    var inputNanometers = document.getElementById("inputNanometers");
    var inputMiles = document.getElementById("inputMiles");
    var inputYards = document.getElementById("inputYards");
    var inputFeet = document.getElementById("inputFeet");
    var inputInches = document.getElementById("inputInches");
    var inputNauticalMiles = document.getElementById("inputNauticalMiles");

    if (source == "inputLightYears") {
        inputLightYears.value = (valNum / 1);
        inputKilometers.value = (valNum * 9461000000000);
        inputMeters.value = (valNum * 9461000000000000);
        inputDecimeters.value = (valNum * 94610000000000000);
        inputCentimeters.value = (valNum * 946100000000000000);
        inputMillimeters.value = (valNum * 9461000000000000000);
        inputMicrometers.value = (valNum * 9461000000000000000000);
        inputNanometers.value = (valNum * 9461000000000000000000000);
        inputMiles.value = (valNum * 5879000000000);
        inputYards.value = (valNum * 10350000000000000);
        inputFeet.value = (valNum * 31040000000000000);
        inputInches.value = (valNum * 372500000000000000);
        inputNauticalMiles.value = (valNum * 5108000000000);
    }
    if (source == "inputKilometers") {
        inputLightYears.value = (valNum / 9461000000000);
        inputKilometers.value = (valNum / 1);
        inputMeters.value = (valNum * 1000);
        inputDecimeters.value = (valNum * 10000);
        inputCentimeters.value = (valNum * 100000);
        inputMillimeters.value = (valNum * 1000000);
        inputMicrometers.value = (valNum * 1000000000);
        inputNanometers.value = (valNum * 1000000000000);
        inputMiles.value = (valNum * 0.62137);
        inputYards.value = (valNum * 1093.6);
        inputFeet.value = (valNum * 3280.8);
        inputInches.value = (valNum * 39370);
        inputNauticalMiles.value = (valNum / 1.852);
    }
    if (source == "inputMeters") {
        inputLightYears.value = (valNum / 9461000000000000);
        inputKilometers.value = (valNum / 1000);
        inputMeters.value = (valNum / 1);
        inputDecimeters.value = (valNum * 10);
        inputCentimeters.value = (valNum * 100);
        inputMillimeters.value = (valNum * 1000);
        inputMicrometers.value = (valNum * 1000000);
        inputNanometers.value = (valNum * 1000000000);
        inputMiles.value = (valNum * 0.00062137);
        inputYards.value = (valNum * 1.0936);
        inputFeet.value = (valNum * 3.2808);
        inputInches.value = (valNum * 39.370);
        inputNauticalMiles.value = (valNum / 1852);
    }
    if (source == "inputDecimeters") {
        inputLightYears.value = (valNum / 94610000000000000);
        inputKilometers.value = (valNum / 10000);
        inputMeters.value = (valNum / 10);
        inputDecimeters.value = (valNum / 1);
        inputCentimeters.value = (valNum * 10);
        inputMillimeters.value = (valNum * 100);
        inputMicrometers.value = (valNum * 100000);
        inputNanometers.value = (valNum * 100000000);
        inputMiles.value = (valNum * 0.000062137);
        inputYards.value = (valNum * 0.10936);
        inputFeet.value = (valNum * 0.32808);
        inputInches.value = (valNum * 3.9370);
        inputNauticalMiles.value = (valNum / 18520);
    }
    if (source == "inputCentimeters") {
        inputLightYears.value = (valNum / 946100000000000000);
        inputKilometers.value = (valNum / 100000);
        inputMeters.value = (valNum / 100);
        inputDecimeters.value = (valNum / 10);
        inputCentimeters.value = (valNum / 1);
        inputMillimeters.value = (valNum * 10);
        inputMicrometers.value = (valNum * 10000);
        inputNanometers.value = (valNum * 10000000);
        inputMiles.value = (valNum * 0.0000062137);
        inputYards.value = (valNum * 0.010936); 
        inputFeet.value = (valNum * 0.032808);
        inputInches.value = (valNum * 0.39370);
        inputNauticalMiles.value = (valNum / 185200);
    }
    if (source == "inputMillimeters") {
        inputLightYears.value = (valNum / 9461000000000000000);
        inputKilometers.value = (valNum / 1000000);
        inputMeters.value = (valNum / 1000);
        inputDecimeters.value = (valNum / 100);
        inputCentimeters.value = (valNum / 10);
        inputMillimeters.value = (valNum / 1);
        inputMicrometers.value = (valNum * 1000);
        inputNanometers.value = (valNum * 1000000);
        inputMiles.value = (valNum * 0.00000062137);
        inputYards.value = (valNum / 914);
        inputFeet.value = (valNum / 304.8);
        inputInches.value = (valNum / 25.4);
        inputNauticalMiles.value = (valNum / 1852000);
    }
    if (source == "inputMicrometers") {
        inputLightYears.value = (valNum / 9461000000000000000000);
        inputKilometers.value = (valNum / 1000000000);
        inputMeters.value = (valNum / 1000);
        inputDecimeters.value = (valNum / 100000);
        inputCentimeters.value = (valNum / 10000);
        inputMillimeters.value = (valNum / 100);
        inputMicrometers.value = (valNum * 1);
        inputNanometers.value = (valNum * 1000);
        inputMiles.value = (valNum * 0.00000000062137);
        inputYards.value = (valNum / 914400); 
        inputFeet.value = (valNum * 0.0000032808);
        inputInches.value = (valNum / 25400);
        inputNauticalMiles.value = (valNum / 1852000000);
    }
    if (source == "inputNanometers") {
        inputLightYears.value = (valNum / 9461000000000000000000);
        inputKilometers.value = (valNum / 1000000000000);
        inputMeters.value = (valNum * 1000000000);
        inputDecimeters.value = (valNum / 10000000);
        inputCentimeters.value = (valNum / 10000000);
        inputMillimeters.value = (valNum / 1000000);
        inputMicrometers.value = (valNum * 1000);
        inputNanometers.value = (valNum / 1);
        inputMiles.value = (valNum *  0.00000000000062137);
        inputYards.value = (valNum * 0.0000000010936); 
        inputFeet.value = (valNum * 0.0000000032808);
        inputInches.value = (valNum * 0.0000000393696);
        inputNauticalMiles.value = (valNum / 1852000000000);
    }
    if (source == "inputMiles") {
        inputLightYears.value = (valNum / 5879000000000);
        inputKilometers.value = (valNum / 0.62137);
        inputMeters.value = (valNum / 0.00062137);
        inputDecimeters.value = (valNum / 0.000062137);
        inputCentimeters.value = (valNum / 0.0000062137);
        inputMillimeters.value = (valNum / 0.00000062137);
        inputMicrometers.value = (valNum / 0.000000062137);
        inputNanometers.value = (valNum / 0.00000000000062137);
        inputMiles.value = (valNum / 1);
        inputYards.value = (valNum * 1760);
        inputFeet.value = (valNum * 5280);
        inputInches.value = (valNum * 63360);
        inputNauticalMiles.value = (valNum / 1.15078);
    }
    if (source == "inputYards") {
        inputLightYears.value = (valNum / 10350000000000000);
        inputKilometers.value = (valNum / 1093.6);
        inputMeters.value = (valNum / 1.0936);
        inputDecimeters.value = (valNum / 0.10936);
        inputCentimeters.value = (valNum / 0.010936);
        inputMillimeters.value = (valNum * 914.4);
        inputMicrometers.value = (valNum / 914400);
        inputNanometers.value = (valNum / 914400000);
        inputMiles.value = (valNum * 0.00056818);
        inputYards.value = (valNum /1);
        inputFeet.value = (valNum * 3);
        inputInches.value = (valNum * 36);
        inputNauticalMiles.value = (valNum / 2025.37);
    }
    if (source == "inputFeet") {
        inputLightYears.value = (valNum / 31040000000000000);
        inputKilometers.value = (valNum / 3280.8); 
        inputMeters.value = (valNum / 3.2808);
        inputDecimeters.value = (valNum / 0.32808);
        inputCentimeters.value = (valNum / 0.032808);
        inputMillimeters.value = (valNum * 304.8);
        inputMicrometers.value = (valNum / 304800);
        inputNanometers.value = (valNum / 304800000);
        inputMiles.value = (valNum * 0.00018939);
        inputYards.value = (valNum * 0.33333);
        inputFeet.value = (valNum / 1);
        inputInches.value = (valNum * 12);
        inputNauticalMiles.value = (valNum / 6076.12);
    }
    if (source == "inputInches") {
        inputLightYears.value = (valNum / 372500000000000000);
        inputKilometers.value = (valNum / 39370);
        inputMeters.value = (valNum / 39.370);
        inputDecimeters.value = (valNum / 3.9730);
        inputCentimeters.value = (valNum / 0.39370);
        inputMillimeters.value = (valNum * 25.4);
        inputMicrometers.value = (valNum * 25400);
        inputNanometers.value = (valNum * 25400000);
        inputMiles.value = (valNum * 0.000015783);
        inputYards.value = (valNum * 0.027778); 
        inputFeet.value = (valNum / 12);
        inputInches.value = (valNum / 1);
        inputNauticalMiles.value = (valNum / 72193.4);
    }
    if (source == "inputNauticalMiles") {
        inputLightYears.value = (valNum / 5108000000000);
        inputKilometers.value = (valNum * 1.852);
        inputMeters.value = (valNum * 1852);
        inputDecimeters.value = (valNum * 18520);
        inputCentimeters.value = (valNum * 185200);
        inputMillimeters.value = (valNum * 1852000);
        inputMicrometers.value = (valNum * 1852000000);
        inputNanometers.value = (valNum * 1852000000000);
        inputMiles.value = (valNum * 1.15078);
        inputYards.value = (valNum * 2025.37); 
        inputFeet.value = (valNum * 6076.12);
        inputInches.value = (valNum * 72193.4);
        inputNauticalMiles.value = (valNum * 1)
    }
}

$(document).ready(function(){
    $(".kilometers").fadeIn(450);
    $(".meters").fadeIn(650);
    $(".centimeters").fadeIn(850);
    $(".millimeters").fadeIn(1050);
    $(".miles").fadeIn(1250);
    $(".feet").fadeIn(1450);
    $(".inches").fadeIn(1650);
});