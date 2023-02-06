$(function(){

    $('#clickEvent').on('click', function()
        {
            alert('I have been clicked');
        });
    

    $('.clickEvent').on('click', function()
        {
            console.log(this);
        });


    $('#mouseEnter').on('mouseenter', function()
        {
            console.log('mouse has entered');
        });

    $('#mouseEnter').on('mouseleave', function()
        {
            console.log('mouse has left');
        });    
        

});
