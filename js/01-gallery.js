import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__link" href="${image.original}"> <img class= "gallery__image" src="${image.preview}" data-source=${image.original}
 alt="${image.description}"></a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

console.log(galleryItems);

gallery.onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let source = e.target.dataset.source;
  basicLightbox.create(`<img src="${source}">`).show();
};
