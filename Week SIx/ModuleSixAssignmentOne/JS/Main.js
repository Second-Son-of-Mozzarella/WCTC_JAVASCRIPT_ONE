$(function(){
    //tab button function

    const $form = $('#viewForm');
    const $list = $('#viewMembers');
    
    $('#viewFormBtn').on('click', function(){
            if($list.is(':visible')){
                $list.fadeOut(200, function(){
                    $form.fadeIn(200);
                })
            }
    });

    $('#viewMembersBtn').on('click', function(){
            if($form.is(':visible')){
                $form.fadeOut(200, function(){
                    $list.fadeIn(200);
                })
            }
    });


//constructer function for members

function Member(

        id,
        username, 
        firstName,
        lastName,
        enroll,
        birthday
        
    ){

        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enroll = enroll;
        this.birthday = birthday;

    }


    // Array for prefill members

    let members = [


        new Member(0000, 'jBiden20', 'Joe', 'Biden', '2020-01-20', '1940-05-02'), // will not accept the letter 8 as a predone ID number for some reason unknown to God
        new Member(0001, 'dTrump16', 'Donald', 'Trump', '2016-01-20', '1942-05-18'), // so I started at 0
        new Member(0002, 'bObama08', 'Barack', 'Obama', '2008-01-20', '1965-03-22'),
        new Member(0003, 'gBush00', 'George', 'Bush', '2000-01-20', '1940-02-19'),
        new Member(0004, 'bClinton92', 'William', 'Clinton', '1992-01-20', '1945-12-12'),
        new Member(0005, 'hwBush88', 'George', 'Bush', '1988-01-20', '1930-12-12'),
        new Member(0006, 'rRegean80', 'George', 'Bush', '1980-01-20', '1922-12-12'),
        new Member(0007, 'jCarter76', 'James', 'Carter', '1976-01-20', '1932-12-12')

    ];
  
    displayMembers(members);
 
    function displayMembers(memberlist){
 
        const $memberList = $('.member-list__students');
        $memberList.html('');
        $(memberlist).each(function(){
            
            $memberList.append(

                `
                <div class='member remain'>
                
                    <p> <strong> ID: </strong>${this.id} </p>
                    <p>  <strong> Username: </strong>${this.username} </p>
                    <p> <strong> Full Name: </strong>${this.lastName}, ${this.firstName}  </p>
                    <p> <strong> Enroll Date: </strong>  ${new Date(this.enroll).getFullYear()} </p>
                    <p> <strong> Age: </strong>${getAge(this.birthday)}</p>
                    <input type="button" class="deleteBtn" value="delete">
                </div>
                
                `
                               );
    
        });

    }

    function getAge(birthInput){

        var currentDate = new Date().getFullYear();
        const memberBirthYear = new Date(birthInput).getFullYear();
        const age = currentDate - memberBirthYear;
    
        return age;
    }

    //Filters 

    
    $('#filterKeyword, #filterSort').on('keyup blur change', function(){
        filtermembers(members);
    });


    function filtermembers(memberList)
    {
        
        const keywordValue = $('#filterKeyword').val().toLowerCase();
        
        let filteredArray = memberList.filter(function(member){
          
            let testOne = member.username.toLowerCase().indexOf(keywordValue) >= 0;
            let testtwo = member.firstName.toLowerCase().indexOf(keywordValue) >= 0;
            let testThree = member.lastName.toLowerCase().indexOf(keywordValue) >= 0;
            return testOne || testtwo || testThree;
        });

        var sortBy = $('#filterSort').val().toLowerCase();

        //switch to select sort
        
        switch(sortBy){
            case 'usernameasc':
                
                filteredArray = filteredArray.sort(sortUsernameAsc)
                
            break;
            case 'usernamedec':
                
                filteredArray = filteredArray.sort(sortUsernameDec)
                
            break;
            case 'idasc':
                
                filteredArray = filteredArray.sort(sortIdAsc)
                
            break;
            case 'iddec':
                
                filteredArray = filteredArray.sort(sortIdDec)
                
            break;
            case 'firstnameasc':
                
                filteredArray = filteredArray.sort(sortFNameAsc)
                
            break;
            case 'firstnamedec':
                
                filteredArray = filteredArray.sort(sortFNameDec)
                
            break;
            case 'lastnameasc':
                
                filteredArray = filteredArray.sort(sortLNameAsc)
                
            break;
            case 'lastnamedec':
                
                filteredArray = filteredArray.sort(sortLNameDec)
                
            break;
            case 'enrollasc':
                
                filteredArray = filteredArray.sort(sortEnrollAsc)
                
            break;
            case 'enrolldec':
                
                filteredArray = filteredArray.sort(sortEnrollDec)
                
            break;
            case 'ageasc':
                
                filteredArray = filteredArray.sort(sortAgeAsc)
                
            break;
            case 'agedec':
                
                filteredArray = filteredArray.sort(sortAgeDec)
                
            break;
        }
        displayMembers(filteredArray);

    }

// sorting functions



function sortUsernameAsc(a,b){
        
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

function sortUsernameDec(a,b){
        
    const aUname = b.username.toLowerCase();
    const bUname = a.username.toLowerCase();
    if(aUname > bUname)
    {
        return 1;

    }else if(aUname < bUname){

        return -1;

    }else{

        return 0;
    }
}

function sortIdAsc(a,b){
    
    if(a.id > b.id)
    {
        return 1;

    }else if(a.id < b.id){

        return -1;

    }else{

        return 0;
    }
}

function sortIdDec(a,b){
    
    if(a.id < b.id)
    {
        return 1;

    }else if(a.id > b.id){

        return -1;

    }else{

        return 0;
    }
}

function sortFNameAsc(a,b){
    
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


function sortFNameDec(a,b){
    
    const aFName = b.firstName.toLowerCase();
    const bFName = a.firstName.toLowerCase();
    if(aFName > bFName)
    {
        return 1;

    }else if(aFName < bFName){

        return -1;

    }else{

        return 0;
    }
}

function sortLNameAsc(a,b){
    
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

function sortLNameDec(a,b){
    
    const aLName = b.lastName.toLowerCase();
    const bLName = a.lastName.toLowerCase();
    if(aLName > bLName)
    {
        return 1;

    }else if(aLName < bLName){

        return -1;

    }else{

        return 0;
    }
}


function sortAgeAsc(a,b){
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

function sortAgeDec(a,b){
    const aBdate = new Date(a.birthday).getFullYear()
    const bBdate = new Date(b.birthday).getFullYear()
    const todaysDate = new Date().getFullYear()
    const aAge = todaysDate - aBdate;
    const bAge = todaysDate - bBdate;
    if(aAge < bAge)
    {
        return 1;

    }else if(aAge > bAge){

        return -1;

    }else{

        return 0;
    }

    
}

function sortEnrollAsc(a,b){ // by default its in order of enrollment as thats just how I made the preentered values
    const aBdate = new Date(a.enroll).getFullYear()
    const bBdate = new Date(b.enroll).getFullYear()
    if(aBdate > bBdate)
    {
        return 1;

    }else if(aBdate < bBdate){

        return -1;

    }else{

        return 0;
    }

    
}

function sortEnrollDec(a,b){
    const aBdate = new Date(a.enroll).getFullYear()
    const bBdate = new Date(b.enroll).getFullYear()
    if(aBdate < bBdate)
    {
        return 1;

    }else if(aBdate > bBdate){

        return -1;

    }else{

        return 0;
    }

    
}


//listening for Form Submissions

$('#memberForm').on('submit', function(e){
    e.preventDefault();
    
    //Storing the elements for use
    $id = members.length + 1; // I am sure there is a much better way to do this but I'm tired, if I was motivated I would use a 8 diget randomly generated number which I would check with regnex to see if has already been done
    $username = $('#memberUsername');
    $firstName = $('#memberFirstName');
    $lastName = $('#memberLastName');
    $enroll = $('#memberEnroll');
    $birthday = $('#memberBirthday');

    //Checks for any additional validation (other than required)
    if( 
        validateUsername($username) &&
        validateName($firstName) &&
        validateName($lastName) &&
        validateAge($birthday) &&
        validateEnroll($enroll)
        )
    {
        members.push( new Member( 
                                    $id, 
                                    $username.val(),
                                    $firstName.val(),
                                    $lastName.val(),
                                    $enroll.val(),
                                    $birthday.val()
                                ));
        this.reset();
        console.log(members);
    }
    displayMembers(members);
    

    
});


$('#memberUsername').on('keyup blur', function() {
    let isValidUsername = validateUsername($(this));
    
    if(!isValidUsername)
    {
        $(this).addClass("invalid");
        $('#memberUsernameLabel').text("Username (Use six letters followed by two numbers)");
    } else {
        $(this).removeClass("invalid");
        $('#memberUsernameLabel').text("Username");
    }
});

$('#memberFirstName').on('keyup blur', function() {
    let isValidFirstName = validateName($(this));

    if(!isValidFirstName)
    {
        $(this).addClass("invalid");
        $('#memberFirstNameLabel').text("First Name (Use letters)");
    } else {
        $(this).removeClass("invalid");
        $('#memberFirstNameLabel').text("First Name");
    }
});

$('#memberLastName').on('keyup blur', function() {
    let isValidLastName = validateName($(this));

    if(!isValidLastName)
    {
        $(this).addClass("invalid");
        $('#memberLastNameLabel').text("Last Name (Use letters)");
    } else {
        $(this).removeClass("invalid");
        $('#memberLastNameLabel').text("Last Name");
    }
});


$('#memberBirthday').on('keyup change blur', function() {
    let isValidAge = validateAge($(this));
    
    if(!isValidAge)
    {
        $(this).addClass("invalid");
        $('#memberBirthDayLabel').text("Birthday (must be 18 or older)");
    } else {
        $(this).removeClass("invalid");
        $('#memberBirthDayLabel').text("Birthday");
    }
});


$('#memberEnroll').on('keyup change blur', function() {
    let isValidEnroll = validateEnroll($(this));

    if(!isValidEnroll)
    {
        
        $(this).addClass("invalid");
        $('#memberEnrollDateLabel').text("Enroll Date (cannot be today or newer)");
    } else {
        $(this).removeClass("invalid");
        $('#memberEnrollDateLabel').text("Enroll Date");
    }
});



//Validates for username

function validateUsername($element)
{
    
    let userRegex = new RegExp('^[a-zA-Z]{6}[0-9]{2}$');
    return userRegex.test($element.val());
}

    //Validates for only letters
    function validateName($element)
    {
        let nameRegex = new RegExp('^[a-zA-Z]*$');
        return nameRegex.test($element.val());
    }

    //Validates for over 18 years old
    function validateAge($element)
    { 
        let eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

        let userDate = new Date($element.val());
        
        return userDate < eighteenYearsAgo
    }
    // Validate enrollment
    function validateEnroll($element)
    {   
        let currentDate = new Date();
        let userDate = new Date($element.val());

        return userDate < currentDate
    }
// member deletion
   $('.deleteBtn').on('click', function(e){
    
    if(confirm('Delete Member?')){

        $(this).closest('.member').remove()

       // $(members).remove(function(e) { return e.firstName === $(this).closest('.member').$firstName });
        // removing it from the list does not work but I wanted to show that I tried
        console.log(members);

    }
    
   })

});