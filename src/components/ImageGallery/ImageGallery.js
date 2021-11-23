import { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";



export default function ImageGallery({ toggleModal, searchQuery }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '23560247-693fa480425212983640fe465';

  useEffect(() => {
    console.log('Render')
    if (searchQuery === '') {
      return;
    }

    setStatus('pending');
    setPage(1);
    
    
    fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(images => {
        setImages([...images.hits]);
        setStatus("resolved");
      })
    }, [searchQuery]);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  }

  useEffect(() => {
    if (page === 1) {
          return;
    }
    setStatus('pending');
    fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(response => {
        return response.json();
      })
    .then(images => {
      setImages((prevState) => [...prevState, ...images.hits])
      setStatus("resolved");
    })
    .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
    })
  }, [page])
  
    
    
    if (status === 'idle') {
        return <div>Please enter your search query</div>
      }

      if (status === 'pending') {
        return <Loader
          className={s.loader}
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />;
      }

      if (status === 'resolved') {
        return  <ul className={s.gallery}>
          {images.map(item => (
            <ImageGalleryItem
                key={item.id}
                id={item.id}
                webformatURL={item.webformatURL}
                largeImageURL={item.largeImageURL}
                toggleModal={toggleModal}

              />
          ))}
          <Button onClick={loadMore} />
        </ul>
      }
}




ImageGallery.propTypes = {
  toggleModal: PropTypes.func,
  searchQuery: PropTypes.string,
};