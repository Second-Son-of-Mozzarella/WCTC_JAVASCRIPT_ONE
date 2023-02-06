function ranNumb() {
    let sliderran = Number(document.getElementById('ranNumbCap').value);
    document.getElementById('ranNumbCapDisplay').textContent = "Random Number Cap: " + sliderran;

    return sliderran


}

function newrannumb(){

 let max = ranNumb();
 let min = 0;
 let finalrannumb = Math.round(Math.random() * (max - min) + min);

 document.getElementById('RandomFull').textContent = 'RandomNumber: ' + finalrannumb;

}