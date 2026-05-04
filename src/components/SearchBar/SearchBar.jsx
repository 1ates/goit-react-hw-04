import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const normalizedTopic = topic.trim();

    if (!normalizedTopic) {
      toast.error('Please enter a keyword to search bar for images!');
      return;
    }

    onSubmit(normalizedTopic);
    setTopic('');
  };

  return (
    <>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search photos or images!"
            value={topic}
            onChange={event => setTopic(event.target.value)}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
}
