function htmlOnClick() {
    console.log('HTML On Click');
}

let domBtn = document.getElementById('btnDomClick');

domBtn.onclick = function (){

    console.log('DOM Click Event');
}

domBtn.onclick = function(){

    alert("DOM button has been clicked");
}

let listenBtn = document.getElementById('btnListenerClick');


listenBtn.addEventListener('click', function(){console.log('Listen Button')});

listenBtn.addEventListener('click', function(){alert('Listen Button')})