$(function(){

    $('#clickEventTwo').on('click', function(e){

        console.log('(' + e.pageX + ', ' + e.pageY + ')');
    })

    $('#eventTarget').on('click', function(e){

        if($(e.target).hasClass('high')){

            alert('has a class of High')
        }
    })

    $('#eventClosest').on('click', function(e){
            $(e.target).closest(".low").addClass('high').removeClass('low');
    });

    $('#preventDefault').on('click', function(e){

        e.preventDefault();

    });
})