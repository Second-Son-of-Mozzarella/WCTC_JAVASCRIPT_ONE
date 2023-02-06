$(function(){
    $('#testForm').on('submit', function(e){
        e.preventDefault();
        
        let $myValue = $('#testInput').val();
        
        $('#results').append($myValue);

        this.reset();
        
    });
})