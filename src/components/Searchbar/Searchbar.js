import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import PropTypes from "prop-types";

export default function Searchbar({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleQueryChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase())
    };


  const handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Please enter search query');
            return;
        }

        onSubmit(searchQuery);
        setSearchQuery('');
    }

  return (
    <header className={s.searchbar}>
              <form onSubmit={handleSubmit} className={s.form}>
                  <button type="submit" className={s.button}>
                      <ImSearch />
                      <span className={s.buttonLabel}>Search</span>
                  </button>
                  <input
                      className={s.input}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      value={searchQuery}
                      onChange={handleQueryChange}
                  />
              </form>
          </header>
  )
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};