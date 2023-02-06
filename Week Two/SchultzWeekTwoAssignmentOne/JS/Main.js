

let students = [];

function student(firstname, lastname, program, enrolldate)
{

    this.firstname = firstname,
    this.lastname = lastname,
    this.program = program,
    this.enrolldate = enrolldate

}

function addStudent()
{
    //Values from Form
    let Fname = document.getElementById('Fname').value;
    let Lname = document.getElementById('Lname').value;
    let program = document.getElementById('Program').value;
    let EnrollDate = document.getElementById('EnrollDate').valueAsDate;

    // create student object

    let MyStudent = new student(Fname, Lname, program, EnrollDate);

    students.push(MyStudent);

    // New Elements

    let studentElement = document.createElement('div');
    let studentFullNameElement = document.createElement('p');
    let studentProgramElement = document.createElement('p');
    let EnrollDateElement = document.createElement('p');

    //onclick event
    studentElement.onclick = function()
    {

        this.remove();


    }

    // Classes added to elements

    studentElement.classList.add('student');
    studentFullNameElement.classList.add('Full-Name');
    studentProgramElement.classList.add('Program');
    EnrollDateElement.classList.add('Enroll-Date');

    //adding content

    studentFullNameElement.textContent = MyStudent.lastname + ', ' + MyStudent.firstname;
    studentProgramElement.textContent = MyStudent.program;
    EnrollDateElement.textContent = MyStudent.enrolldate.toDateString();

    //Elements are added into others

    studentElement.appendChild(studentFullNameElement);
    studentElement.appendChild(studentProgramElement);
    studentElement.appendChild(EnrollDateElement);

    document.getElementById('students').appendChild(studentElement);

    console.log(studentElement);

    document.getElementById('studentForm').reset();





}

//This is a function that can be called to reset the form using the reset method that is part of the form element
function resetForm()
{
    document.getElementById('studentForm').reset();
}
