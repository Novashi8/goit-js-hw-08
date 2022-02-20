import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => {
  return `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
    />
    </a>
    `;
});

gallery.insertAdjacentHTML('beforeend', markup.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
