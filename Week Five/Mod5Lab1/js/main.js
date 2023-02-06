//1 - Document Ready Function
$(function() {
    let activeSection = 0;
    //Sets up a click event on the headers and opens the work area associated to it
    $("div[id^='exercise-']>h2").on('click', function() {
        $(this).siblings('.work-area-container').slideToggle(1000,"swing");
        $(this).toggleClass("selected-exercise");
    });   


    //2 - The jQuery Function
    //activeSection = 2;
    //---select and log the div with the id of "selectMe" using a jQuery function
    console.log($('#selectMe'));
    



    //3 - Basic jQuery Selectors
    activeSection = 3;
    //---select and log the divs with the class of "ex3" using a jQuery function
    console.log($('.ex3'));
    //---select and log the p's in the .ex3-2 class using a jQuery function
    console.log($('.ex3-2>p'));



    //4 - Content Methods
    activeSection = 4;
    //---Select #htmlOne and log the return value of .html

    console.log($('#htmlOne').html())

    //---Select #htmlTwo and use the .html() method to update the content to <h4>Updated HTML Content</h4>

    $('#htmlTwo').html('<h4>Updated HTML Content</h4>');

    //---Select .htmlElements and use the .html method to update the content to <h4><em>More</em> Updated HTML Content</h4>

    $('.htmlElements').html('<h4><em>More</em> Updated HTML Content</h4>');

    //---Select #htmlFour with a document.getElementById method. Update the html to <h4>Does this work?</h4>
    let elementFour = document.getElementById("htmlFour");
    $(elementFour).html('<h4>Does this work?</h4>');

    //---Log the text() content of #textMethodList and append #textMethodParagraph with " updated with the text() method."


    console.log($('#textMethodList').text());
    let myContent = $('#textMethodParagraph').text();
    $('#textMethodParagraph').text(myContent + ' updated with text method');

    //5 - Updating Styling
    activeSection = 5;
    //---Get the background-color of #getMyCss using .css()
    console.log($('#getMyCss').css('background-color'));
    //---Set the background-color of #updateMyCss to #D3D3D3 using .css()
    $('#updateMyCss').css('background-color', '#d3d3d3');
    //---Add the class of "active" to #activateMe using the .addClass() method
    $('#activateMe').addClass('active');
    $('#deactivateMe').removeClass('active');
    //---Remove the class of "active" from  #deactivateMe using the .removeClass() method




    //6 - Simplified Loops
    activeSection = 6;
    //---Use the .each() method to loop through all of the p's inside of the .eachTest divs. Log "The paragraph text is: " plus the paragraph

    $('.eachTest>p').each(function(){

        let myText = "My paragraph text is: " + $(this).text();
        console.log(myText);
    });






    activeSection = 7;
    //This automatically clicks the section I am working on so I dont need to every time I save
    if(activeSection > 0)
    {
        $(`#exercise-${activeSection}>h2`).click();
    }
});