import React from 'react';
import { SearchRecommendType } from '@/types/recommend.type';
import { ReactComponent as SearchIcon } from '@icons/search-icon.svg';
import styles from './SearchRecommendItem.module.css';

interface SearchRecommendItemProps extends SearchRecommendType {
  isSeleted: boolean;
}

function SearchRecommendItem({
  id,
  name,
  isSeleted,
}: SearchRecommendItemProps) {
  const className = isSeleted
    ? [styles.item, styles.selected].join(' ')
    : styles.item;

  console.log(className);
  return (
    <li className={className} id={`recommend_id_${id}`}>
      <SearchIcon className={styles.search_icon} />
      {name}
    </li>
  );
}

export default SearchRecommendItem;
