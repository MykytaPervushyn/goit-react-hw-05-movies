import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');

  const toggleModal = (largeImageURL) => {
    setShowModal(!showModal);
    setLargeImageURL(largeImageURL);
  };

  return (
    <div>
        <Searchbar onSubmit={setSearchQuery}/>
      <ImageGallery
          toggleModal={toggleModal}
          searchQuery={searchQuery}

        />
        {showModal && <Modal
          toggleModal={toggleModal}
          largeImageURL={largeImageURL} />}
    </div>
  )
}