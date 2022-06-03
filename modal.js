// Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal Btn
var modalBtn = document.getElementById('modalBtn');
//Get close modal Btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for Click

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'block';
}

//Listen for close
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}

//Listen for outer click
window.addEventListener('click', outsideClick);

function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none'
    }
}