function temperatureConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputFahrenheit = document.getElementById("inputFahrenheit");
    var inputCelsius = document.getElementById("inputCelsius");
    var inputKelvin = document.getElementById("inputKelvin");

    if (source == "inputFahrenheit") {
        inputCelsius.value = ((valNum-32) / 1.8);
        inputKelvin.value = (((valNum-32) / 1.8)+273.15);
    }
    if (source == "inputCelsius") {
        inputFahrenheit.value = ((valNum * 1.8)+32);
        inputKelvin.value = ((valNum)+273.15);
    }
    if (source == "inputKelvin") {
        inputFahrenheit.value = (((valNum-273.15) * 1.8)+32);
        inputCelsius.value = ((valNum)-273.15);
    }
}

$(document).ready(function(){
    $(".celsius").fadeIn(450);
    $(".fahrenheit").fadeIn(650);
    $(".kelvin").fadeIn(850);
});