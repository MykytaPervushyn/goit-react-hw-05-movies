import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "../Button/Button";
import PropTypes from "prop-types";


export default class ImageGallery extends Component {

  state = {
    images: null,
    status: 'idle',
  };

  BASE_URL = 'https://pixabay.com/api';
  API_KEY = '23560247-693fa480425212983640fe465';

  componentDidUpdate(prevProps, prevState) {
    const page = 1;

    if (prevProps.searchQuery !== this.props.searchQuery) {

      this.setState({ status: 'pending', page: 1 });
      fetch(`${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.props.searchQuery}&page=${page}&per_page=12&key=${this.API_KEY}`)
        .then(response => {
          return  response.json();
        })
        .then(images => this.setState({ images: images.hits, page: 1, status: 'resolved' }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  loadMore = () => {
    const page = this.state.page + 1;

    fetch(`${this.BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.props.searchQuery}&page=${page}&per_page=12&key=${this.API_KEY}`)
        .then(response => {
          return  response.json();
        })
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
        }))
      )
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
  };

    render() {
      const { toggleModal } = this.props;
      const { images, status } = this.state;
      
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
        <Button onClick={this.loadMore} /></ul>
      }
    }
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.array,
  toggleModal: PropTypes.func,
  searchQuery: PropTypes.string,
};