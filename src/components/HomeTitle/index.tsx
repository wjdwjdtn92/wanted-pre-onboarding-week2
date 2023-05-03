import React from 'react';
import styles from '@components/HomeTitle/HomeTitle.module.css';

interface HomeTitleProps {
  title: string;
}

function HomeTitle({ title }: HomeTitleProps) {
  return (
    <h2 className={[styles.title, styles.flex_center].join(' ')}>{title}</h2>
  );
}

export default HomeTitle;
