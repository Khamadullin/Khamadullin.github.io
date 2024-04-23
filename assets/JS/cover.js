function newTextTitle() {
    var newText = document.getElementById('input-title-text').value;
    document.getElementById('title-text').innerHTML = newText;
}

function newTextSubtitle() {
    var newText = document.getElementById('input-subtitle-text').value;
    document.getElementById('subtitle-text').innerHTML = newText;
}

$(document).ready(function() {
    $('#select-cover').change(function() {
        var selectedImage = $(this).val();
        $('#cover').attr('src', selectedImage);
    });
});