import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: '#09131db3',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 32px)',
    maxWidth: '960px',
    maxHeight: 'calc(100% - 48px)',
    padding: 0,
    border: 'none',
    borderRadius: '28px',
    overflow: 'hidden',
    backgroundColor: '#2b677f',
  },
};

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) {
    return null;
  }

  const description = image.description || image.alt_description || 'Unsplash Image';

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Selected Image"
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
      >
        <div className={css.content}>
          <img className={css.image} src={image.urls.regular} alt={description} />
          <div className={css.details}>
            <h2 className={css.title}>{description}</h2>
            <p className={css.text}>
              Author:<span> {image.user.name}</span>
            </p>
            <p className={css.text}>
              Likes:<span> {image.likes}</span>
            </p>
            <p className={css.text}>
              Location:<span> {image.user.location}</span>
            </p>
            <a className={css.link} href={image.links.html} target="_blank" rel="noreferrer noopener">
              View on Unsplash
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
