

function newTextTime() {
    var newText = document.getElementById('input-time').value;
    document.getElementById('time').innerHTML = newText;
}

function newTextDate() {
    var newText = document.getElementById('input-date').value;
    document.getElementById('date').innerHTML = newText;
}

function newTextText() {
    var newText = document.getElementById('input-text').value;
    document.getElementById('text').innerHTML = newText;
}

function newTextAuthor() {
    var newText = document.getElementById('input-author').value;
    document.getElementById('author').innerHTML = newText;
}

$(document).ready(function() {
    $('#select-logo').change(function() {
        var selectedImage = $(this).val();
        $('#logo').attr('src', selectedImage);
    });
});