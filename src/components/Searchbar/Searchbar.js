import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

    handleQueryChange = e => {
        this.setState({searchQuery: e.currentTarget.value.toLowerCase()})
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            alert('Please enter search query');
            return;
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    }

    render() {
      return (
          <header className={s.searchbar}>
              <form onSubmit={this.handleSubmit} className={s.form}>
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
                      value={this.state.searchQuery}
                      onChange={this.handleQueryChange}
                  />
              </form>
          </header>
      );
    }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};