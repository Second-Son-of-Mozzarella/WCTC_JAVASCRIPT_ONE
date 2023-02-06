$(function(){
    $('#slideElement').on('click', function(e){

        $('#slideMe').slideToggle(500, function(){
        alert('effect complete');
        });

    });
})