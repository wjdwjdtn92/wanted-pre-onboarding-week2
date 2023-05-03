import React from 'react';
import styles from '@pages/HomePage/HomePage.module.css';
import HomeTitle from '@components/HomeTitle';
import SearchForm from '@/components/SearchForm';
import SearchRecommends from '@/components/SearchRecommends';

const DUMMY = [
  {
    id: 1,
    name: '임상',
  },
  {
    id: 2,
    name: '임상인데',
  },
  {
    id: 3,
    name: '임상실헝이다다다다다다',
  },
  {
    id: 4,
    name: '임상실헝이다다다다다다',
  },
  {
    id: 5,
    name: '임상실헝이다다다다다다',
  },
  {
    id: 6,
    name: '임상실헝이다다다다다다',
  },
];

function HomePage() {
  return (
    <section className={styles.home_wrapper}>
      <div className={styles.home_container}>
        <HomeTitle title={`국내 모든 임상시험 검색하고\n온라인으로 참여하기`} />
        <SearchForm />
        <SearchRecommends searchRecommendList={DUMMY} />
      </div>
    </section>
  );
}

export default HomePage;
