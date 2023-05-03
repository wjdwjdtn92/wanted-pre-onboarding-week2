import React from 'react';
import { SearchRecommendType } from '@/types/recommend.type';
import { ReactComponent as SearchIcon } from '@icons/search-icon.svg';
import styles from './SearchRecommendItem.module.css';

function SearchRecommendItem({ id, name }: SearchRecommendType) {
  return (
    <li className={styles.item} id={`recommend_id_${id}`}>
      <SearchIcon className={styles.search_icon} />
      {name}
    </li>
  );
}

export default SearchRecommendItem;
