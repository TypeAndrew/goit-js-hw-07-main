import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from '../dist/basicLightbox.min.js';



// Change code below this line

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");

let galleryList = ``;

function initGallery() {

    galleryItems.forEach(element => {

        
       
        galleryList +=`<div class="gallery__item">
        <a class="gallery__link" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.preview}"
            alt="${element.description}"
            />
        </a>
        </div>`;

    });
    galleryEl.innerHTML = galleryList;

};

initGallery();
let instance;

galleryEl.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
        
        event.preventDefault();
        instance = basicLightbox.create(`
            <div class="modal">
            <img src="${event.target.currentSrc}" width="1200" height="800">
            </div>
        `);

       // galleryEl.style.display = 'none';

        instance.show();


    } else {
        console.log("border!!!!");
    }



});

document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        
        event.preventDefault();
       
        instance.close();
        
    } else {
        console.log("press escape to exit in gallery!!!!");
    }

});



//console.log(galleryItems);
 /*let galleryItemEl = document.createElement("div");
        galleryItemEl.classList.add("gallery__item");
        galleryEl.append(galleryItemEl);

        let galleryLinkEl = document.createElement("a");
        galleryLinkEl.setAttribute("href", element.original);
        galleryLinkEl.classList.add("gallery__link");
        galleryItemEl.append(galleryLinkEl);

        let imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.setAttribute("src", element.preview);
        imgEl.setAttribute("alt", element.description);
        imgEl.setAttribute("data-source", element.original);
        listPics.push(imgEl);
        galleryLinkEl.append(imgEl);*/