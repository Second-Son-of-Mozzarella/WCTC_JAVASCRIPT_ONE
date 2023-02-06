//This is an import statment. I gave this JavaScript file the type of module in html and I am able to import from other files
import { students } from "/src/js/data/students.js";

$(students).each(console.log(this));

