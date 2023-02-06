$(function() {

    //Tab button functionality

    const $form = $('#veiwForm');
    const $list = $('#veiwList');
    
    $('#viewFormBtn').on('click', function(){
            if($list.is(':visible')){
                $list.fadeOut(200, function(){
                    $form.fadeIn(200);
                })
            }
    });

    $('#viewStudentsBtn').on('click', function(){
            if($form.is(':visible')){
                $form.fadeOut(200, function(){
                    $list.fadeIn(200);
                })
            }
    });



    //Constructor function for a student (parameters are spaced for legibility)
    function Student(id, 
                    username, 
                    firstName,
                    lastName,
                    email,
                    birthday)
    {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
    }

    //Array to keep students in
    let students = [
        new Student(12345, "pgerbe23", "Patrick", "Gerber", "pgerber1@wctc.edu", "1950-10-05"),
        new Student(54321, "rgerbe23", "Ratrick", "Gerber", "rgerber1@wctc.edu", "1953-10-05"),
        new Student(19601, "jkendy60", "John", "Kennedy", "jkennedy60@wctc.edu", "1963-11-22"),
        new Student(20161, "dtrump16", "Donald", "Trump", "dtrump16@wctc.edu", "2016-01-20"),
        new Student(20201, "jbiden20", "Joe", "Biden", "jbiden20@wctc.edu", "2020-01-20"),
        new Student(20081, "bobama08", "Barack", "Obama", "bobama08@wctc.edu", "2008-01-20")
    ];


    displayStudents(students);

    function displayStudents(studentList){
        
        const $studentList = $('.student-list__students');
        $studentList.html(' ');
        $(studentList).each(function(){
            
            $studentList.append(

                `
                <div class='student'>
                
                    ${this.id} <br>
                    ${this.username} <br>
                    ${this.lastName}, ${this.firstName}  <br>
                    ${this.email}  <br>
                    ${getAge(this.birthday)}
                </div>
                
                `
                               );
    
        });
    }

    function getAge(birthday){
        var currentDate = new Date().getFullYear()
        const studentBirthYear = new Date(birthday).getFullYear();
        const studentAge = currentDate - studentBirthYear;

        return studentAge;
        
    }
    // filtering the students

    $('#filterKeyword, #filterSort').on('keyup blur change', function(){
        filterStudents(students);
    });

    function filterStudents(studentList)
    {
        const keywordValue = $('#filterKeyword').val().toLowerCase();
        
        let filteredArray = studentList.filter(function(student){
          
            let testOne = student.username.toLowerCase().indexOf(keywordValue) >= 0;
            let testtwo = student.firstName.toLowerCase().indexOf(keywordValue) >= 0;
            let testThree = student.lastName.toLowerCase().indexOf(keywordValue) >= 0;
            let testFour = student.email.toLowerCase().indexOf(keywordValue) >= 0;
            let testFive = student.birthday.toLowerCase().indexOf(keywordValue) >= 0;
            return testOne || testtwo || testThree || testFour || testFive;
        });

        var sortBy = $('#filterSort').val().toLowerCase();
        
        // switch to select which sort you want

        switch(sortBy){

            case 'username':
                
                filteredArray = filteredArray.sort(sortUsername)
                
            break;
            case 'id':
                
                filteredArray = filteredArray.sort(sortId)
                
            break;
            case 'firstName':
                
                filteredArray = filteredArray.sort(sortFName)
                
            break;
            case 'lastName':
                
                filteredArray = filteredArray.sort(sortLName)
                
            break;
            case 'email':
                
                filteredArray = filteredArray.sort(sortEmail)
                
            break;
            case 'age':
                
                filteredArray = filteredArray.sort(sortAge)
                
            break;
        }
        displayStudents(filteredArray);
    }

// sorting functions 

    function sortUsername(a,b){
        
        const aUname = a.username.toLowerCase();
        const bUname = b.username.toLowerCase();
        if(aUname > bUname)
        {
            return 1;

        }else if(aUname < bUname){

            return -1;

        }else{

            return 0;
        }
    }

    function sortId(a,b){
        
        if(a.id > b.id)
        {
            return 1;

        }else if(a.id < b.id){

            return -1;

        }else{

            return 0;
        }
    }

    function sortFName(a,b){
        
        const aFName = a.firstName.toLowerCase();
        const bFName = b.firstName.toLowerCase();
        if(aFName > bFName)
        {
            return 1;

        }else if(aFName < bFName){

            return -1;

        }else{

            return 0;
        }
    }

    function sortLName(a,b){
        
        const aLName = a.lastName.toLowerCase();
        const bLName = b.lastName.toLowerCase();
        if(aLName > bLName)
        {
            return 1;

        }else if(aLName < bLName){

            return -1;

        }else{

            return 0;
        }
    }

    function sortEmail(a,b){
        
        const aEmail = a.email.toLowerCase();
        const bEmail = b.email.toLowerCase();
        if(aEmail > bEmail)
        {
            return 1;

        }else if(aEmail < bEmail){

            return -1;

        }else{

            return 0;
        }
    }

    function sortAge(a,b){
        const aBdate = new Date(a.birthday).getFullYear()
        const bBdate = new Date(b.birthday).getFullYear()
        const todaysDate = new Date().getFullYear()
        const aAge = todaysDate - aBdate;
        const bAge = todaysDate - bBdate;
        if(aAge > bAge)
        {
            return 1;

        }else if(aAge < bAge){

            return -1;

        }else{

            return 0;
        }
    }
    
    
 
 
    //Listening for form submission on the form element
    $('#studentForm').on('submit', function(e){
        e.preventDefault();
        debugger
        //Storing the elements for use
        $id = $('#studentId');
        $username = $('#studentUsername');
        $firstName = $('#studentFirstName');
        $lastName = $('#studentLastName');
        $email = $('#studentEmail');
        $birthday = $('#studentBirthday');

        //Checks for any additional validation (other than required)
        if( 
            validateId($id) &&
            validateUsername($username) &&
            validateName($firstName) &&
            validateName($lastName) &&
            validateAge($birthday)  
            )
        {
            students.push( new Student( 
                                        $id.val(), 
                                        $username.val(),
                                        $firstName.val(),
                                        $lastName.val(),
                                        $email.val(),
                                        $birthday.val()
                                    ));
            this.reset();
            console.log(students);
        }
    });
    
    $('#studentId').on('keyup blur', function() {
        let isValidId = validateId($(this));

        if(!isValidId)
        {
            $(this).addClass("invalid");
            $('#studentIdLabel').text("Id (Use five numbers)");
        } else {
            $(this).removeClass("invalid");
            $('#studentIdLabel').text("Id");
        }
    });

    $('#studentUsername').on('keyup blur', function() {
        let isValidUsername = validateUsername($(this));
        debugger
        if(!isValidUsername)
        {
            $(this).addClass("invalid");
            $('#studentUsernameLabel').text("Username (Use six letters followed by two numbers)");
        } else {
            $(this).removeClass("invalid");
            $('#studentUsernameLabel').text("Username");
        }
    });

    $('#studentFirstName').on('keyup blur', function() {
        let isValidFirstName = validateName($(this));

        if(!isValidFirstName)
        {
            $(this).addClass("invalid");
            $('#studentFirstNameLabel').text("First Name (Use letters)");
        } else {
            $(this).removeClass("invalid");
            $('#studentFirstNameLabel').text("First Name");
        }
    });

    
    $('#studentLastName').on('keyup blur', function() {
        let isValidLastName = validateName($(this));

        if(!isValidLastName)
        {
            $(this).addClass("invalid");
            $('#studentLastNameLabel').text("Last Name (Use letters)");
        } else {
            $(this).removeClass("invalid");
            $('#studentLastNameLabel').text("Last Name");
        }
    });

    $('#studentBirthday').on('keyup change blur', function() {
        let isValidAge = validateAge($(this));

        if(!isValidAge)
        {
            $(this).addClass("invalid");
            $('#studentBirthdayLabel').text("Birthday (must be 18 or older)");
        } else {
            $(this).removeClass("invalid");
            $('#studentBirthdayLabel').text("Birthday");
        }
    });

    //Validates for 5 numbers
    function validateId($element)
    {
        let idRegex = new RegExp('^[0-9]{5}$');
        return idRegex.test($element.val());
    }

    //Validates for 6 letters then 2 numbers
    function validateUsername($element)
    {
        let usernameRegex = new RegExp('^[a-zA-Z]{6}[0-9]{2}$');
        return usernameRegex.test($element.val());
    }

    //Validates for only letters
    function validateName($element)
    {
        let usernameRegex = new RegExp('^[a-zA-Z]*$');
        return usernameRegex.test($element.val());
    }

    //Validates for over 18 years old
    function validateAge($element)
    {
        let eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

        let userDate = new Date($element.val());

        return userDate < eighteenYearsAgo
    }

});