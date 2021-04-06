$('#celsiusCheck').change(function(){
    if (this.checked) {
        $('#celsius').fadeIn(250);
    } else {
        $('#celsius').fadeOut(250);
    }                   
});

$('#fahrenheitCheck').change(function(){
    if (this.checked) {
        $('#fahrenheit').fadeIn(250);
    } else {
        $('#fahrenheit').fadeOut(250);
    }                   
});

$('#kelvinCheck').change(function(){
    if (this.checked) {
        $('#kelvin').fadeIn(250);
    } else {
        $('#kelvin').fadeOut(250);
    }                   
});