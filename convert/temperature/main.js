function temperatureConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputCelsius = document.getElementById("inputCelsius");
    var inputFahrenheit = document.getElementById("inputFahrenheit");
    var inputKelvin = document.getElementById("inputKelvin");

    if (source == "inputCelsius") {
        inputFahrenheit.value = ((valNum * 1.8) + 32);
        inputKelvin.value = ((valNum) + 273.15);
        inputRankine.value = ((valNum) + 273.15) * 1.8;
        inputReaumur.value = ((valNum) * (4 / 5));
    }
    if (source == "inputFahrenheit") {
        inputCelsius.value = ((valNum - 32) / 1.8);
        inputKelvin.value = (((valNum - 32) / 1.8) + 273.15);
        inputRankine.value = ((valNum) + 459.67);
        inputReaumur.value = ((valNum) - 32) * (4 / 9);
    }
    if (source == "inputKelvin") {
        inputCelsius.value = ((valNum) - 273.15);
        inputFahrenheit.value = (((valNum - 273.15) * 1.8) + 32);
        inputRankine.value = ((valNum) / 0.55);
        inputReaumur.value = ((valNum) - 273.15) * (4 / 5);
    }
    if (source == "inputRankine") {
        inputCelsius.value = ((valNum) - 273.15);
        inputFahrenheit.value = (valNum - 459.67);
        inputKelvin.value = (valNum * 0.55);
        inputReaumur.value = ((valNum) - 491.67) * (4 / 9);
    }
    if (source == "inputReaumur") {
        inputCelsius.value = ((valNum) * (5 / 4));
        inputFahrenheit.value = ((valNum) * (9 / 4)) + 32;
        inputKelvin.value = ((valNum) * (5 / 4)) + 273.15;
        inputRankine.value = ((valNum) * (9 / 4)) + 491.67;
    }
}

$(document).ready(function(){
    $(".celsius").fadeIn(450);
    $(".fahrenheit").fadeIn(650);
    $(".kelvin").fadeIn(850);
});