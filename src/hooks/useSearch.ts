import { useState } from 'react';
import { SearchRecommendType } from '@/types/recommend.type';
import { search } from '@/services/searchApi';
import { addSeconds, isValidTime } from '@/utils/tilme';

interface CachedRecommendType {
  data: SearchRecommendType[];
  expireTime: Date;
  lastAccessedTime: Date;
}

interface UseSearchProps {
  cacheExpire?: number;
  cacheLimit?: number;
}

const cache = new Map<string, CachedRecommendType>();

const useSearch = ({ cacheExpire = 300, cacheLimit = 100 }: UseSearchProps) => {
  const [recommendList, setRecommendList] = useState<SearchRecommendType[]>([]);

  const checkCacheLimit = () => {
    return cache.size > cacheLimit;
  };

  const removeOldestAccessedItem = () => {
    let oldestKey = '';
    let oldestAccessedTime = new Date();

    for (const [key, value] of cache.entries()) {
      if (value.lastAccessedTime < oldestAccessedTime) {
        oldestKey = key;
        oldestAccessedTime = value.lastAccessedTime;
      }
    }

    if (oldestKey) {
      cache.delete(oldestKey);
    }
  };

  const fetchingSearch = async (searchKeyword: string) => {
    const cachedData = cache.get(searchKeyword);

    if (cachedData) {
      const { data, expireTime } = cachedData;

      if (isValidTime(expireTime)) {
        setRecommendList(data);

        cache.set(searchKeyword, {
          data,
          expireTime,
          lastAccessedTime: new Date(),
        });
        return;
      }

      cache.delete(searchKeyword);
    }

    const data = await search(encodeURI(searchKeyword));

    const expireTime = addSeconds(cacheExpire);
    const lastAccessedTime = new Date();
    cache.set(searchKeyword, { data, expireTime, lastAccessedTime });

    if (checkCacheLimit()) {
      removeOldestAccessedItem();
    }

    setRecommendList(data);
  };

  const resetCache = () => {
    cache.clear();
  };

  return { recommendList, fetchingSearch, resetCache };
};

export default useSearch;
