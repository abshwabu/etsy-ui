// Script to handle image switching
const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImg = document.getElementById('main-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImg.src = thumbnail.src;
    });
});
