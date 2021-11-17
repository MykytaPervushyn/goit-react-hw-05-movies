import s from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";



const ImageGalleryItem = ({ id, webformatURL, toggleModal, largeImageURL }) => (
    <li className={s.galleryItem}>
    <img onClick={() => toggleModal(largeImageURL)} className={s.galleryItemImage} src={webformatURL} alt={id} />
    </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  toggleModal: PropTypes.func,
};

export default ImageGalleryItem;