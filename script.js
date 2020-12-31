let modal = document.getElementById("modal");

function displayModal(){

    modal.style.display = 'block';

}

function closeModal(){

    modal.style.display = 'none';

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = 'none';

    }

}