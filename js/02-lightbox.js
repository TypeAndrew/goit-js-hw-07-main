import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");


function initGallery() {

    galleryItems.forEach(element => {


        let galleryLinkEl = document.createElement("a");

        galleryLinkEl.classList.add("gallery__item");
        galleryLinkEl.setAttribute("href", element.original);
        galleryLinkEl.setAttribute("rel", "shortcut icon");
        galleryEl.append(galleryLinkEl);

        let imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.setAttribute("src", element.preview);
        imgEl.setAttribute("alt", element.description);

        galleryLinkEl.append(imgEl);



    });
};

initGallery();

galleryEl.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {


        let lightbox = new SimpleLightbox('.gallery a', { /* options */ });

        lightbox.show();


    } else {
        console.log("border!!!!");
    }

});