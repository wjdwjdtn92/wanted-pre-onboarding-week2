import React from 'react';
import SearchRecommendItem from './SearchRecommendItem';
import SearchRecommendList from './SearchRecommendList';
import { SearchRecommendType } from '@/types/recommend.type';
import styles from './SearchRecommend.module.css';

interface SearchRecommendProps {
  searchRecommendList: SearchRecommendType[];
}

function SearchRecommends({ searchRecommendList }: SearchRecommendProps) {
  return searchRecommendList.length > 0 ? (
    <div className={styles.container}>
      <h2 className={styles.title}>추천검색어</h2>
      <SearchRecommendList>
        {searchRecommendList.map(({ id, name }) => (
          <SearchRecommendItem key={id} id={id} name={name} />
        ))}
      </SearchRecommendList>
    </div>
  ) : null;
}

export default SearchRecommends;
