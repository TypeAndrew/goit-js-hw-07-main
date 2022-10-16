import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basicLightbox';



// Change code below this line

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");


function initGallery() {

    galleryItems.forEach(element => {

        let galleryItemEl = document.createElement("div");
        galleryItemEl.classList.add("gallery__item");
        galleryEl.append(galleryItemEl);

        let galleryLinkEl = document.createElement("a");
        //galleryLinkEl.setAttribute("href", element.original);
        galleryLinkEl.classList.add("gallery__link");
        galleryItemEl.append(galleryLinkEl);

        let imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.setAttribute("src", element.preview);
        imgEl.setAttribute("alt", element.description);
        imgEl.setAttribute("data-source", element.original);
        galleryLinkEl.append(imgEl);



    });
};

initGallery();

galleryEl.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {


        let instance = basicLightbox.create(`
            <div class="modal">
            <img src="${event.target.currentSrc}" width="1200" height="800">
            </div>
        `);

        galleryEl.style.display = 'none';

        instance.show()


    } else {
        console.log("border!!!!");
    }



});

document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        // console.log("ha ha ha");

        galleryEl.style.display = 'grid';
        let moduleEl = document.querySelector(".basicLightbox");
        moduleEl.remove();

    } else {
        console.log("press escape to exit in gallery!!!!");
    }

});



console.log(galleryItems);
