import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';


import galleryItems from './components/ImageGallery/ImageGalleryItem/galleryItems.json';

class App extends Component {
  state = {
    showModal: false,
    searchQuery: '',
  };

  componentDidMount() {
  }

  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
    }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery: searchQuery})
  }

  render() {
console.log('App render')

    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery
          galleryItems={galleryItems}
          toggleModal={this.toggleModal}
          searchQuery={this.state.searchQuery}

        />
        {showModal && <Modal
          toggleModal={this.toggleModal}
          largeImageURL={this.state.largeImageURL} />}
    </div>
    );
  }
}

export default App;