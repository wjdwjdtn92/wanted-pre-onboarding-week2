import React, { useState } from 'react';
import styles from '@pages/HomePage/HomePage.module.css';
import HomeTitle from '@components/HomeTitle';
import SearchForm from '@/components/SearchForm';
import SearchRecommends from '@/components/SearchRecommends';
import useSearch from '@/hooks/useSearch';

function HomePage() {
  const { recommendList, fetchingSearch } = useSearch({
    cacheExpire: 300,
    cacheLimit: 100,
  });
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setSelectedIndex(-1);
  };

  const handleSearch = async (searchKeyword: string) => {
    if (searchKeyword?.length === 0) {
      return;
    }

    await fetchingSearch(searchKeyword);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();

      setSelectedIndex((preIndex) =>
        Math.min(recommendList.length - 1, preIndex + 1)
      );
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();

      setSelectedIndex((preIndex) => Math.max(-1, preIndex - 1));
      return;
    }

    if (event.key === 'Escape') {
      //Todo: 검색어 초기화
      return;
    }
  };

  return (
    <section className={styles.home_wrapper}>
      <div className={styles.home_container}>
        <HomeTitle title={`국내 모든 임상시험 검색하고\n온라인으로 참여하기`} />
        <SearchForm
          onSearch={handleSearch}
          onInputBlur={handleBlur}
          onInputFocus={handleFocus}
          onKeyDown={handleKeyDown}
        />
        {isFocused && (
          <SearchRecommends
            selectedIndex={selectedIndex}
            searchRecommendList={recommendList}
          />
        )}
      </div>
    </section>
  );
}

export default HomePage;
