

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




function newText1() {
    var newText = document.getElementById('input-text1').value;
    document.getElementById('text1').innerHTML = newText;
    setDivWidth();
}

function newText2() {
    var newText = document.getElementById('input-text2').value;
    document.getElementById('text2').innerHTML = newText;
    setDivWidth();
}

function newText3() {
    var newText = document.getElementById('input-text3').value;
    document.getElementById('text3').innerHTML = newText;
    setDivWidth();
}

function newText4() {
    var newText = document.getElementById('input-text4').value;
    document.getElementById('text4').innerHTML = newText;
    setDivWidth();
}

function newText5() {
    var newText = document.getElementById('input-text5').value;
    document.getElementById('text5').innerHTML = newText;
    setDivWidth();
}


function updateImages() {
    const selectedOption = document.querySelector('input[name="imageSelect"]:checked').value;
    const darkup = document.getElementById('darkup');
    const darkdown = document.getElementById('darkdown');
    
    if (selectedOption === 'showFirst') {
        darkup.style.display = 'block';
        darkdown.style.display = 'none';
    } else if (selectedOption === 'showSecond') {
        darkup.style.display = 'none';
        darkdown.style.display = 'block';
    } else {
        darkup.style.display = 'none';
        darkdown.style.display = 'none';
    }
}



