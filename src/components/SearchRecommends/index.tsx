import React, { useEffect } from 'react';
import SearchRecommendItem from './SearchRecommendItem';
import SearchRecommendList from './SearchRecommendList';
import { SearchRecommendType } from '@/types/recommend.type';
import styles from './SearchRecommend.module.css';

interface SearchRecommendProps {
  searchRecommendList: SearchRecommendType[];
  selectedIndex: number;
}

function SearchRecommends({
  searchRecommendList,
  selectedIndex,
}: SearchRecommendProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>추천검색어</h2>
      <SearchRecommendList>
        {searchRecommendList.map(({ id, name }, index) => (
          <SearchRecommendItem
            key={id}
            id={id}
            name={name}
            isSeleted={selectedIndex === index}
          />
        ))}
      </SearchRecommendList>
    </div>
  );
}

export default SearchRecommends;
