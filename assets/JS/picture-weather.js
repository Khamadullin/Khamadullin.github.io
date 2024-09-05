


// ПОГОДА СЕЙЧАС


function newTextTempNow() {
    var newText = document.getElementById('text-input-temperature-now').value;
    document.getElementById('temperature-now').innerHTML = newText;
}

function newTextWindNow() {
    var newText = document.getElementById('text-input-wind-now').value;
    document.getElementById('windy-speed').innerHTML = newText;
}

function newTextPressureNow() {
    var newText = document.getElementById('text-input-pressure-now').value;
    document.getElementById('pressure').innerHTML = newText;
}

function newTextHumidityNow() {
    var newText = document.getElementById('text-input-humidity-now').value;
    document.getElementById('humidity').innerHTML = newText;
}


$(document).ready(function() {
    $('#select-icon-now').change(function() {
        var selectedImage = $(this).val();
        $('#icon-now').attr('src', selectedImage);
    });
});



// ПРОГНОЗ

function newTextTempAfternoon() {
    var newText = document.getElementById('text-input-temperature-forecast-temperature-afternoon').value;
    document.getElementById('forecast-temperature-afternoon').innerHTML = newText;
}

function newTextTempEvening() {
    var newText = document.getElementById('text-input-temperature-forecast-temperature-evening').value;
    document.getElementById('forecast-temperature-evening').innerHTML = newText;
}

function newTextTempNight() {
    var newText = document.getElementById('text-input-temperature-forecast-temperature-night').value;
    document.getElementById('forecast-temperature-night').innerHTML = newText;
}

$(document).ready(function() {
    $('#select-icon-afternoon').change(function() {
        var selectedImage = $(this).val();
        $('#icon-afternoon').attr('src', selectedImage);
    });
});

$(document).ready(function() {
    $('#select-icon-evening').change(function() {
        var selectedImage = $(this).val();
        $('#icon-evening').attr('src', selectedImage);
    });
});

$(document).ready(function() {
    $('#select-icon-night').change(function() {
        var selectedImage = $(this).val();
        $('#icon-night').attr('src', selectedImage);
    });
});


