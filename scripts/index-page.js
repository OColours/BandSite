// 函数来创建图像元素
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

createImageElements(9);