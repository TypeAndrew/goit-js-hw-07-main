import { galleryItems } from './gallery-items.js';
//import SimpleLightbox from "simplelightbox";

let galleryEl = document.querySelector(".gallery");
galleryEl.classList.add("gallery");

let galleryList = ``;

function initGallery() {

    galleryItems.forEach(element => {


    
         galleryList +=`<a class="gallery__item" href="${element.original}">
                        <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
                        </a>`;
        

    });
    galleryEl.innerHTML = galleryList;
    let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250  });

};

initGallery();

    /*let galleryLinkEl = document.createElement("a");

        galleryLinkEl.classList.add("gallery__item");
        galleryLinkEl.setAttribute("href", element.original);
        galleryLinkEl.setAttribute("rel", "shortcut icon");
        galleryEl.append(galleryLinkEl);

        let imgEl = document.createElement("img");
        imgEl.classList.add("gallery__image");
        imgEl.setAttribute("src", element.preview);
        imgEl.setAttribute("alt", element.description);

        galleryLinkEl.append(imgEl);*/