export function fetchImages(query) {
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&key=23560247-693fa480425212983640fe465`)
        .then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`no images on request`));
  })
}

const api = {
    fetchImages,
};

export default api;