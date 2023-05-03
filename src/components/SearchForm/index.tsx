import styles from '@components/SearchForm/SearchForm.module.css';
import useInputs from '@/hooks/useInputs';
import { ReactComponent as SearchIcon } from '@icons/search-icon.svg';
import { FormEvent, KeyboardEvent, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';

interface SearchFormProps {
  onSearch: (searchKeyword: string) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function SearchForm({
  onSearch,
  onInputFocus,
  onInputBlur,
  onKeyDown,
}: SearchFormProps) {
  const [{ searchKeyword }, onChange] = useInputs({
    searchKeyword: '',
  });
  const debouncedValue = useDebounce(searchKeyword, 300);

  const handleSumbit = (
    event: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <form className={styles.search_form} onSubmit={handleSumbit}>
      <input
        id="search_bar_main"
        type="search"
        className={styles.search_input}
        name="searchKeyword"
        value={searchKeyword}
        autoComplete="off"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        className={styles.search_button}
        aria-label="검색버튼"
        type="submit"
        onClick={handleSumbit}
      >
        <div className={styles.svg_container}>
          <SearchIcon />
        </div>
      </button>
    </form>
  );
}

export default SearchForm;
