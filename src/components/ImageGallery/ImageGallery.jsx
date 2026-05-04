import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onSelect }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <ImageCard image={image} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
}
