// src/components/SearchBar.jsx
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import '../styles/SearchBar.css';

const SearchBar = ({ isScrolled }) => {
  return (
    <form className={`search-bar ${isScrolled ? 'scrolled' : ''}`}>
      <input type="text" placeholder="Search..." className={`search-input ${isScrolled ? 'scrolled' : ''}`} />
      <button type="submit" className={`search-button ${isScrolled ? 'scrolled' : ''}`}>
        <SearchIcon className={`search-icon ${isScrolled ? 'scrolled' : ''}`} />
      </button>
      <button type="button" className={`filter-button ${isScrolled ? 'scrolled' : ''}`}>
        <FilterListIcon className={`filter-icon ${isScrolled ? 'scrolled' : ''}`} />
      </button>
    </form>
  );
};

export default SearchBar;
