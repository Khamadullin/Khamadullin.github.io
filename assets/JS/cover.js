

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



document.addEventListener("DOMContentLoaded", function() {
    var plahaTopRadio = document.getElementById("plaha-top-radio");
    var plahaBottomRadio = document.getElementById("plaha-bottom-radio");
    var plahaTopDiv = document.getElementById("plaha-top");
    var plahaBottomDiv = document.getElementById("plaha-bottom");

    plahaTopRadio.addEventListener("change", function() {
        plahaTopDiv.style.display = "block";
        plahaBottomDiv.style.display = "none";
    });

    plahaBottomRadio.addEventListener("change", function() {
        plahaTopDiv.style.display = "none";
        plahaBottomDiv.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var titleText = document.getElementById("title-text");
    var plahaTopDiv = document.getElementById("plaha-top");
    var plahaBottomDiv = document.getElementById("plaha-bottom");

    function setDivWidth() {
        var titleWidth = document.getElementById('title-text').offsetWidth;
        var titleTextWidth = titleText.offsetWidth;
        plahaTopDiv.style.width = titleTextWidth + "px";
        plahaBottomDiv.style.width = titleTextWidth + "px";
    }

    setDivWidth(); // Устанавливаем ширину div'ов при загрузке страницы

    window.addEventListener("resize", setDivWidth); // Обновляем ширину div'ов при изменении размера окна

});

function newTextTitle() {
    var newText = document.getElementById('input-title-text').value;
    document.getElementById('title-text').innerHTML = newText;
    setDivWidth();
}
