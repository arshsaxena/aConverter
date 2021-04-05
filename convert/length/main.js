function lengthConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMeters = document.getElementById("inputMeters");
    var inputCentimeters = document.getElementById("inputCentimeters");
    var inputMillimeters = document.getElementById("inputMillimeters");
    var inputMicrometers = document.getElementById("inputMicrometers");
    var inputNanometers = document.getElementById("inputNanometers");
    var inputMiles = document.getElementById("inputMiles");
    var inputYards = document.getElementById("inputYards");
    var inputFeet = document.getElementById("inputFeet");
    var inputInches = document.getElementById("inputInches");

    if (source == "inputKilometers") {
        inputKilometers.value = (valNum / 1);
        inputMeters.value = (valNum * 1000);
        inputCentimeters.value = (valNum * 100000);
        inputMillimeters.value = (valNum * 1000000);
        inputMicrometers.value = (valNum * 1000000000);
        inputNanometers.value = (valNum / 0.000000000001);
        inputMiles.value = (valNum * 0.62137);
        inputYards.value = (valNum * 1093.6);
        inputFeet.value = (valNum * 3280.8);
        inputInches.value = (valNum * 39370);
    }
    if (source == "inputMeters") {
        inputKilometers.value = (valNum / 1000);
        inputMeters.value = (valNum / 1);   
        inputCentimeters.value = (valNum * 100);
        inputMillimeters.value = (valNum * 1000);
        inputMicrometers.value = (valNum * 1000000);
        inputNanometers.value = (valNum * 1000000000);
        inputMiles.value = (valNum * 0.00062137);
        inputYards.value = (valNum * 1.0936);
        inputFeet.value = (valNum * 3.2808);
        inputInches.value = (valNum * 39.370);
    }
    if (source == "inputCentimeters") {
        inputKilometers.value = (valNum / 100000);
        inputMeters.value = (valNum / 100);
        inputCentimeters.value = (valNum / 1);
        inputMillimeters.value = (valNum * 10);
        inputMicrometers.value = (valNum * 10000);
        inputNanometers.value = (valNum / 0.0000001);
        inputMiles.value = (valNum * 0.0000062137);
        inputYards.value = (valNum * 0.010936);    
        inputFeet.value = (valNum * 0.032808);
        inputInches.value = (valNum * 0.39370);
    }
    if (source == "inputMillimeters") {
        inputKilometers.value = (valNum / 1000000);
        inputMeters.value = (valNum / 1000);
        inputCentimeters.value = (valNum / 10);
        inputMillimeters.value = (valNum / 1);
        inputMicrometers.value = (valNum * 1000);
        inputNanometers.value = (valNum / 0.000001);
        inputMiles.value = (valNum * 0.00000062137);
        inputYards.value = (valNum / 914);    
        inputFeet.value = (valNum / 304.8);
        inputInches.value = (valNum / 25.4);
    }
    if (source == "inputMicrometers") {
        inputKilometers.value = (valNum / 1000000000);
        inputMeters.value = (valNum / 1000);
        inputCentimeters.value = (valNum / 10000);
        inputMillimeters.value = (valNum / 100);
        inputMicrometers.value = (valNum * 1);
        inputNanometers.value = (valNum * 1000);
        inputMiles.value = (valNum * 0.00000000062137);
        inputYards.value = (valNum / 914400);    
        inputFeet.value = (valNum * 0.0000032808);
        inputInches.value = (valNum / 25400);
    }
    if (source == "inputNanometers") {
        inputKilometers.value = (valNum * 0.000000000001);
        inputMeters.value = (valNum * 0.000000001);
        inputCentimeters.value = (valNum * 0.0000001);
        inputMillimeters.value = (valNum * 0.000001);
        inputMicrometers.value = (valNum * 1000);
        inputNanometers.value = (valNum / 1);
        inputMiles.value = (valNum *  0.00000000000062137);
        inputYards.value = (valNum * 0.0000000010936);    
        inputFeet.value = (valNum * 0.0000000032808);
        inputInches.value = (valNum * 0.0000000393696);
    }
    if (source == "inputMiles") {
        inputKilometers.value = (valNum / 0.62137);    
        inputMeters.value = (valNum / 0.00062137);
        inputCentimeters.value = (valNum / 0.0000062137);
        inputMillimeters.value = (valNum / 0.00000062137);
        inputMicrometers.value = (valNum * 1609000000);
        inputNanometers.value = (valNum * 0.00000000000062137);
        inputMiles.value = (valNum / 1);
        inputYards.value = (valNum * 1760);
        inputFeet.value = (valNum * 5280);
        inputInches.value = (valNum * 63360);
    }
    if (source == "inputYards") {
        inputKilometers.value = (valNum / 1093.6);
        inputMeters.value = (valNum / 1.0936);
        inputCentimeters.value = (valNum / 0.010936);
        inputMillimeters.value = (valNum * 914.4);
        inputMicrometers.value = (valNum / 914400);
        inputNanometers.value = (valNum / 914400000);
        inputMiles.value = (valNum * 0.00056818);
        inputYards.value = (valNum /1);
        inputFeet.value = (valNum * 3);
        inputInches.value = (valNum * 36);
    }
    if (source == "inputFeet") {
        inputKilometers.value = (valNum / 3280.8);    
        inputMeters.value = (valNum / 3.2808);
        inputCentimeters.value = (valNum / 0.032808);
        inputMillimeters.value = (valNum * 304.8);
        inputMicrometers.value = (valNum / 304800);
        inputNanometers.value = (valNum / 304800000);
        inputMiles.value = (valNum * 0.00018939);
        inputYards.value = (valNum * 0.33333);
        inputFeet.value = (valNum / 1);
        inputInches.value = (valNum * 12);
    }
    if (source == "inputInches") {
        inputKilometers.value = (valNum / 39370);
        inputMeters.value = (valNum / 39.370);
        inputCentimeters.value = (valNum / 0.39370);
        inputMillimeters.value = (valNum * 25.4);
        inputMicrometers.value = (valNum * 25400);
        inputNanometers.value = (valNum * 25400000);
        inputMiles.value = (valNum * 0.000015783);
        inputYards.value = (valNum * 0.027778);    
        inputFeet.value = (valNum * 0.083333);
        inputInches.value = (valNum / 1);
    }
}

$(document).ready(function(){
    $(".kilometers").fadeIn(450);
    $(".meters").fadeIn(650);
    $(".centimeters").fadeIn(850);
    $(".millimeters").fadeIn(1050);
    $(".micrometers").fadeIn(1250);
    $(".nanometers").fadeIn(1450);
    $(".miles").fadeIn(1650);
    $(".yards").fadeIn(1850);
    $(".feet").fadeIn(2050);
    $(".inches").fadeIn(2250);
});