$(function(){

    $('#clearList').hide();
    $('#clearChecked').hide();

    $('#groceryForm').on('submit', function(e){

        e.preventDefault();

        let $itemName = $('#itemName').val();
        let $itemQuanVal = $('#itemQuantity').val();
        let $itemQuanUnit = $('#itemUnit').val();
        let $itemCat = $('#itemCategory').val();
                

        let groceryFull = `

        <div id='groceryItem' class='groceryItem unbought'>
        <h3> ${$itemName} </h3>
        <p>${$itemQuanVal} ${$itemQuanUnit}<p>
        </div>
        `;

        $('#' + $itemCat).append(groceryFull);
        
        $('#clearList').show()

});

    $('.listCategory').on('click', function(e){
        console.log($(e.target).closest('.groceryItem'));
        if($(e.target).closest('.groceryItem').hasClass('unbought')){
            $(e.target).closest('.groceryItem').addClass('bought').removeClass('unbought');
            $('#clearChecked').show();
        }else if($(e.target).closest('.groceryItem').hasClass('bought')){
            $(e.target).closest('.groceryItem').addClass('unbought').removeClass('bought');
        }
    });

    
        $('#clearList').on('click', function(){
            $('.groceryItem').slideUp(500,function(){
                $('.groceryItem').remove();
            
            });

            $('#clearList').hide();
            $('#clearChecked').hide();

            
        });
            

        $('#clearChecked').on('click', function(){
            $('.bought').slideUp(500,function(){
                $('.bought').remove();
                if($('.groceryItem').length = 0){

                    $('#clearList').hide();
                    
                }
            
            });
    
            $('#clearChecked').hide();

            
            
        });
})