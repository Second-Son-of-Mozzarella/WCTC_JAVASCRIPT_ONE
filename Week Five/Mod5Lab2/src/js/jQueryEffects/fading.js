$(function(){

    $('#fadeElements').on('click', function(e){
        $('.fading').fadeOut(500, function(){
            $('.fading').fadeIn(500); 
            console.log('done');
        });
    })
});