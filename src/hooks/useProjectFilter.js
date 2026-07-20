import { useMemo, useState } from 'react';
import { getProjectsByCategory } from '../data/portfolio';

/**
 * useProjectFilter -Manages active portfolio category filter state.
 */
export function useProjectFilter(initialCategory = 'all') {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProjects = useMemo(
    () => getProjectsByCategory(activeCategory),
    [activeCategory]
  );

  return {
    activeCategory,
    setActiveCategory,
    filteredProjects,
  };
}
