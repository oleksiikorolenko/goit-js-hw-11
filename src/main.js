import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js'


const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', e => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({ message: 'Please enter a search term.' })
        
    }

    clearGallery();
    showLoader();
    
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 3000,
                });
                return;
            }
            
            createGallery(data.hits);
        }).catch(
            () => {
                iziToast.error({ message: 'Something went wrong. Please try again later.', })
            })
        .finally(() => {
            hideLoader();
        });
        
});
