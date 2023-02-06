$(function(){


        let $aniEle = $('.animation>h1');

        $('body').on('click', function(){

            myAnimation();
            $('body').off('click');
        })


    function myAnimation(){
        $aniEle.animate({
            opacity: 1,
            fontSize:"+=50px" 
        },
        {
            duration: 2000,
            easing: "easeInExpo",
            complete: function(){
               $aniEle.draggable();
            }
        })
}





})