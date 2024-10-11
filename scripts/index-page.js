//Load gallery
function createImageElements(count) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const img = document.createElement('img');
        img.className = `photo-gallery-${i}`;
        img.alt = `Photo Gallery ${i}`;
        gallery.appendChild(img);
    }
}

//execute function after complete page load
document.addEventListener('DOMContentLoaded', function() {
    createImageElements(9);

});
