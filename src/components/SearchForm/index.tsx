import React, { useState } from 'react';
import styles from '@components/SearchForm/SearchForm.module.css';
import useInputs from '@/hooks/useInputs';
import { ReactComponent as SearchIcon } from '@icons/search-icon.svg';

function SearchForm() {
  const [{ searchText }, onChange] = useInputs({
    searchText: '',
  });

  return (
    <form className={styles.search_form}>
      <input
        id="search_bar_main"
        type="search"
        className={styles.search_input}
        name="searchText"
        value={searchText}
        onChange={onChange}
      />
      <button className={styles.search_button} aria-label="검색버튼">
        <div className={styles.svg_container}>
          <SearchIcon />
        </div>
      </button>
    </form>
  );
}

export default SearchForm;
