//Object constructor for creating student objects
function Student(firstName, lastName, program, currentSemester)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.program = program;
    this.currentSemester = currentSemester;
    this.createElement = function() {
        //Creating Elements
        let studentElement = document.createElement('div');
        let studentNameElement = document.createElement('p');
        let studentProgramElement = document.createElement('p');
        let studentCurrentSemesterElement = document.createElement('p');

        //Adding classes to use for styling classList object and the .add() method
        studentElement.classList.add('student');
        studentNameElement.classList.add('student-name');
        studentProgramElement.classList.add('student-program');
        studentCurrentSemesterElement.classList.add('student-semester');

        //Add text content to the name element, program element, and semester element using the .textContent property
        studentNameElement.textContent = this.firstName + ' ' + this.lastName + ' ';
        studentProgramElement.textContent = this.program;
        studentCurrentSemesterElement.textContent = 'Semester ' + this.currentSemester;
        
        //Add the name element, program element, and semester element to the student div using the .appendChild() method
        studentElement.appendChild(studentNameElement);
        studentElement.appendChild(studentProgramElement);
        studentElement.appendChild(studentCurrentSemesterElement);

        //Return the one student element that we created. This element has all information for the current instance of the object.
        return studentElement;
    }
}

let allStudents = [
    new Student('Shawnee', 'Eden', 'Computer Support Specialist', 3),
    new Student('Micky', 'Frona', 'Data and Analytics Specialist', 1),
    new Student('Anwen', 'Giffard', 'Web and Software Developer', 4),
    new Student('Mark', 'Cai', 'Network Specialist', 2),
    new Student('Linus', 'Luana', 'Computer Support Specialist', 2),
    new Student('Linnet', 'Peder', 'Computer Support Specialist', 4),
    new Student('Anissa', 'Domnall', 'Network Specialist', 1),
    new Student('Marin', 'Shelly', 'Data and Analytics Specialist', 3),
    new Student('Krystine', 'Vin', 'Web and Software Developer', 1),
    new Student('Ainslee', 'Angie', 'Cybersecurity Specialist', 1),
    new Student('Pamela', 'Dwayne', 'Computer Support Specialist', 2),
    new Student('Julian', 'Arianne', 'Web and Software Developer', 3),
];


function exampleLoop() {

    //getting the result element to use later
    let resultElement = document.getElementById('exampleResult');
    //since we are adding html inside of this, I want to clear out the html so it is not holding any old values
    resultElement.innerHTML = '';


    //iterate through each student using a for loop
    //--intialization expression: set up a variable to use for the current index. This will start as 0 and go up
    //--test expression: test to see if the counter has reached the size of the array yet
    //--update expression: increment the counter by one to match the index

    for(let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++)
    {
        //you can get the current student with by using the current index: allStudents[currentStudentIndex]
        //you can access properties and methods using the member operator of . (period): allStudents[currentStudentIndex].firstName;

        //since we made a method (function in an object) to create a student element, we can call that to display a student
        let currentStudentElement = allStudents[currentStudentIndex].createElement();

        //You can then append this element to any other element. In this case, the result which we already got
        resultElement.appendChild(currentStudentElement);
    }

}

function sortingLoop() {
    let resultElement = document.getElementById('sortingResult');
    resultElement.innerHTML = '';

    let programSelect = document.getElementById('studentProgram').value;

    let semesterSelect = document.getElementById('studentSemester').value;

    for(let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++)
    {
        debugger;
        //Use this condition and the filters to only display select students
        if(((programSelect == allStudents[currentStudentIndex].program) || (programSelect == 'Any')) && ((semesterSelect == allStudents[currentStudentIndex].currentSemester) || (semesterSelect == 'Any')))
        {
            let currentStudentElement = allStudents[currentStudentIndex].createElement();

            resultElement.appendChild(currentStudentElement);
        }
    }
}