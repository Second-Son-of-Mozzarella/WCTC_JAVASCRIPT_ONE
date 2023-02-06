function getdate(){

    let CurrentTime = new Date();

    document.getElementById('Year').textContent = "Year: " + CurrentTime.getFullYear();

    document.getElementById('Month').textContent = "Month: " + (CurrentTime.getMonth() + 1);

    document.getElementById('Day').textContent = "Day: " + CurrentTime.getDate();

    document.getElementById('Hour').textContent = "Hour: " + CurrentTime.getHours();

    document.getElementById('Minute').textContent = "Minute: " + CurrentTime.getMinutes();
    
    document.getElementById('Second').textContent = "Seconds: " + CurrentTime.getSeconds();

    

    
}
