$(function() {

    $('nav').html(`
        <div class="wrapper">
            <div class="menu">
                <div class="logo">
                    <span class="logo-line-one">FirstName LastName</span>
                    <span class="logo-line-two">Mod 5 Lab 2</span>
                </div>

                <ul class="items">
                    <li><a href="/index.html">Home</a>
                    <li><a >jQuery Events</a>
                        <ul>
                            <li><a href="/jQueryEvents/onMethod.html">.on() Method</a></li>
                            <li><a href="/jQueryEvents/eventObject.html">Event Object</a></li>
                            <li><a href="/jQueryEvents/formSubmission.html">Form Submission</a></li>
                        </ul>
                    </li>
                    <li><a>Effects</a>
                        <ul>
                            <li><a href="/jQueryEffects/fading.html">Fading</a></li>
                            <li><a href="/jQueryEffects/sliding.html">Sliding</a></li>
                        </ul>
                    </li>
                    <li><a>Try It</a>
                        <ul class="items">
                            <li><a href="/tryIt/directions.html">Directions</a></li>
                            <li><a href="/tryIt/toDoList.html">To Do List</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `);
});