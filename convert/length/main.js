function lengthConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputFeet = document.getElementById("inputFeet");
    var inputMeters = document.getElementById("inputMeters");
    var inputInches = document.getElementById("inputInches");
    var inputcm = document.getElementById("inputcm");
    var inputYards = document.getElementById("inputYards");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMiles = document.getElementById("inputMiles");

    if (source == "inputFeet") {
        inputMeters.value = (valNum / 3.2808);
        inputInches.value = (valNum * 12);
        inputcm.value = (valNum / 0.032808);
        inputYards.value = (valNum * 0.33333);
        inputKilometers.value = (valNum / 3280.8);    
        inputMiles.value = (valNum * 0.00018939);
    }
    if (source == "inputMeters") {
        inputFeet.value = (valNum * 3.2808);
        inputInches.value = (valNum * 39.370);
        inputcm.value = (valNum / 0.01);
        inputYards.value = (valNum * 1.0936);
        inputKilometers.value = (valNum / 1000);    
        inputMiles.value = (valNum * 0.00062137);
    }
    if (source == "inputInches") {
        inputFeet.value = (valNum * 0.083333);
        inputMeters.value = (valNum / 39.370);
        inputcm.value = (valNum / 0.39370);
        inputYards.value = (valNum * 0.027778);    
        inputKilometers.value = (valNum / 39370);
        inputMiles.value = (valNum * 0.000015783);
    }
    if (source == "inputcm") {
        inputFeet.value = (valNum * 0.032808);
        inputMeters.value = (valNum / 100);
        inputInches.value = (valNum * 0.39370);
        inputYards.value = (valNum * 0.010936);    
        inputKilometers.value = (valNum / 100000);
        inputMiles.value = (valNum * 0.0000062137);
    }
    if (source == "inputYards") {
        inputFeet.value = (valNum * 3);
        inputMeters.value = (valNum / 1.0936);
        inputInches.value = (valNum * 36);
        inputcm.value = (valNum / 0.010936);
        inputKilometers.value = (valNum / 1093.6);
        inputMiles.value = (valNum * 0.00056818);
    }
    if (source == "inputKilometers") {
        inputFeet.value = (valNum * 3280.8);
        inputMeters.value = (valNum * 1000);
        inputInches.value = (valNum * 39370);
        inputcm.value = (valNum * 100000);
        inputYards.value = (valNum * 1093.6);
        inputMiles.value = (valNum * 0.62137);    
    }
    if (source == "inputMiles") {
        inputFeet.value = (valNum * 5280);
        inputMeters.value = (valNum / 0.00062137);
        inputInches.value = (valNum * 63360);
        inputcm.value = (valNum / 0.0000062137);
        inputYards.value = (valNum * 1760);
        inputKilometers.value = (valNum / 0.62137);    
    }
}