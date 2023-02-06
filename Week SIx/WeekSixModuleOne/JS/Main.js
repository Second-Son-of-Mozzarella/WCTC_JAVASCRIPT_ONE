$(function(){

    let students = []; //creating an array to store student data

    function Student(){
        this.id = id;
        this.usrName = userName;
        this.fstName = fstName;
        this.lstName = lstName;
        this.email = email;
        this.dob = dob;
    }

    // submiting the fomr and checking if everything is valid
    $('#studentForm').on('submit', function(e){ 

        e.preventDefault();

        if(validateID($('#studentID'))  &&  validateUsr($('#studentUsrName')) && validateFirst($('#studentFstName')) && validateLast($('#studentLstName')) && validateBday()){


            this.reset();
        }

    });


    //Validating ID

    $('#studentID').on('keyup blur', function(){

        let isValidId = validateID($(this));

        if(!isValidId){

            $(this).addClass('invalid');
            $('#studentIDLabel').text(' ID (use fivenumbers)')
        }else{

            $(this).removeClass('invalid');
            $('#studentIDLabel').text(' ID: ')

        }

    });


    function validateID($element){

        const numbRegex = new RegExp('^[0-9]{5}$'); // looks for 5 numbers with in 0-9 from begining to end

        let sID = $element.val();

        return numbRegex.test(sID);

    }


    //Validating Username


    $('#studentUsrName').on('keyup blur', function(){

        
        let isValidUsr = validateUsr($(this));

        if(!isValidUsr){

            $(this).addClass('invalid');
            $('#studentUsrNameLabel').text(' Username (use six letters and two numbers)')
        }else{

            $(this).removeClass('invalid');
            $('#studentUsrNameLabel').text(' Username: ')

        }

    })

    function validateUsr($element){

        const usrRegex = new RegExp('^[a-z]{6}[0-9]{2}$'); 

        let studUsr = $element.val();

        return usrRegex.test(studUsr);

    }


    //validating firstname

    


    $('#studentFstName').on('keyup blur', function(){

        
        let isValidFirst = validateFirst($(this));

        if(!isValidFirst){

            $(this).addClass('invalid');
            $('#studentFstNameLabel').text(' FirstName (How)')
        }else{

            $(this).removeClass('invalid');
            $('#studentFstNameLabel').text(' Firstname: ')

        }

    })

    function validateFirst($element){

        const FirstRegex = new RegExp('^[a-zA-Z]*$'); 

        let studFirst = $element.val();

        return FirstRegex.test(studFirst);

    }




    //validating lastname

    

    $('#studentLstName').on('keyup blur', function(){

        
        let isValidLast = validateLast($(this));

        if(!isValidLast){

            $(this).addClass('invalid');
            $('#studentLstNameLabel').text(' Lastname (How)')
        }else{

            $(this).removeClass('invalid');
            $('#studentLstNameLabel').text(' Lastname: ')

        }

    })

    function validateLast($element){

        const LastRegex = new RegExp('^[a-zA-Z]*$'); 

        let studLast = $element.val();

        return LastRegex.test(studLast);

    }



   // validating birthday

   
   $('#studentBirthDay').on('keyup blur', function(){


    let isValidBday = validateBday($(this));

    if(!isValidBday){

        $(this).addClass('invalid');
        $('#studentBirthDayLabel').text(' Date of Birth (your to young)')
    }else{

        $(this).removeClass('invalid');
        $('#studentBirthDayLabel').text(' Date of Birth: ')

    }


})

function validateBday(){

    let eightteenYearsAgo = new Date();

    let inputAge = document.getElementById('studentBirthDay').valueAsDate;

    eightteenYearsAgo.setFullYear(eightteenYearsAgo.getFullYear() - 18);
    
    if( inputAge < eightteenYearsAgo){

        return true;

    }else{

        return false
    }

    }



    /*

    
    */

    


});