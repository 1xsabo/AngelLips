let shareBtn = document.querySelector('.share')
let shareMedia = document.querySelector('.share-media')
shareBtn.onclick = function (){
    shareMedia.classList.toggle('active-share')
}