$(function(){

    $('#removeDone').hide()



    $('#toDoForm').on('submit', function(e){

            e.preventDefault();

            let $taskName = $('#toDoTask').val();
            

            let $taskDes = $('#toDoTaskDescription').val();

            let taskFull = `

            <div id='taskValues' class='task low'>
            <h3> ${$taskName} </h3>
            <p> ${$taskDes} </p>
            </div>
            `;

            $('.tasks').append(taskFull);
            
           

    });


    $('.tasks').on('click', function(e){
        console.log(e.target);
        if($(e.target).closest(".task").hasClass('low')){
            $(e.target).closest(".task").addClass('high').removeClass('low');
        }else if($(e.target).closest(".task").hasClass('high')){
            $(e.target).closest(".task").addClass('done').removeClass('high');
        }else if($(e.target).closest(".task").hasClass('done')){
            $(e.target).closest(".task").addClass('low').removeClass('done');
        }


        if($('.done').length != 0){

            $('#removeDone').show();
        }else{

            $('#removeDone').hide();
        }
    });


    $('#removeDone').on('click', function(){
        $('.done').slideUp(500,function(){
            $('.done').remove();
            console.log($('.task').length);
        
        });

        $('#removeDone').hide();
        
    });


 

   
});