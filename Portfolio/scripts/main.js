let photos = document.getElementsByTagName("img");
for (const photo of photos) {
    photo.onmouseover = (event) => {
        if (photos.length == 1) {
            photo.style.setProperty('width', '422px');
        } else {
            photo.style.setProperty('width', '582px');
        }
    };
    photo.onmouseout = (event) => {
        photo.style.setProperty('width', '265px');
    }
}