'use strict'
const videoBtn = document.querySelector('.videoPlay'),
    videoFront = document.querySelector('.videoFront'),
    furnitureVideo = document.querySelector('#furnitureVideo');

videoBtn.addEventListener('click', function() {
    videoFront.style.display = 'none'
    furnitureVideo.play();
});
furnitureVideo.addEventListener('click', function(){
    videoFront.style.display = 'flex'
});