// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
console.log(galleryItems);
const markup = galleryItems.map(({preview, original, description}) => {
    const item = `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt=${description} />
</a>`
return item
}).join('');

galleryRef.innerHTML = markup;
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });