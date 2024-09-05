$(document).ready(function() {
    $('#select-cover').change(function() {
        var selectedImage = $(this).val();
        $('#source').attr('src', selectedImage);
    });
});

// $(document).ready(function() {
//     $('#select-cover').change(function() {
//         var selectedImage = $(this).val();
//         var selectedText = $(this).find('option:selected').text();

//         $('#source').attr('src', selectedImage);

//         if (selectedText.includes('итоги')) {
//             $('#text').css('background', 'linear-gradient(to right, #FF8A35 0%, #1941FF 49%, #0F2799 100%)');
//             $('#text').css('-webkit-background-clip', 'text');
//             $('#text').css('color', 'transparent');
//         } else {
//             $('#text').css('background', 'none');
//             $('#text').css('-webkit-background-clip', 'unset');
//             $('#text').css('color', '#0F2799');
//         }
//     });
// });