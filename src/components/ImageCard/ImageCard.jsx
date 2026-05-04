import css from './ImageCard.module.css';

export default function ImageCard({ image, onSelect }) {
  const imageText = image.alt_description || image.description || 'unsplash Image';

  return (
    <>
      <div className={css.card}>
        <button className={css.btn} type="button" onClick={() => onSelect(image)}>
          <img className={css.image} src={image.urls.small} alt={imageText} />
        </button>
        <div className={css.meta}>
          <p className={css.author}>by {image.user.name}</p>
          <p className={css.likes}>{image.likes}</p>
        </div>
      </div>
    </>
  );
}
