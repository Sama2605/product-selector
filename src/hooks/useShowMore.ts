import { useState } from "react";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export const useShowMore = <T>(items: T[]) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const showMore = () => {
    setVisibleCount((current) => current + LOAD_MORE_COUNT);
  };

  return {
    visibleItems,
    hasMore,
    showMore,
  };
};
