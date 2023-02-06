//This is an import statment. I gave this JavaScript file the type of module in html and I am able to import from other files
import { students } from "/src/js/data/students.js";

let studentsElement = document.querySelector('.students');


for(let i = 0; i < students.length; i++)
{

    studentsElement.innerHTML += `
    
    <div class="student" data-student-id="${students[i].studentId}">
     <h3> ${students[i].studentName} </h3>
    </div>

    `

}


let currentStudentElement = document.querySelector('.current-student');

studentsElement.addEventListener('click', studentClick);

function studentClick(e)
{
    
    if(!e.target.classList.contains('students'))
    {
        let currentStudentId = e.target.closest('.student').dataset.studentId;

        for(let i = 0; i < students.length; i++)
        {
            if(students[i].studentId == currentStudentId){
                currentStudentElement.innerHTML = 
                `<div class="student" data-student-id="${students[i].studentId}">
                <h3> ${students[i].studentName} </h3>
                </div>`
            }
        }
    }

}