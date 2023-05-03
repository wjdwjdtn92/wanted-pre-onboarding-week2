import React from 'react';
import styles from './SearchRecommendList.module.css';

interface SearchRecommendListProps {
  children: React.ReactNode;
}

function SearchRecommendList({ children }: SearchRecommendListProps) {
  return <ul className={styles.recommend_list}>{children}</ul>;
}

export default SearchRecommendList;
