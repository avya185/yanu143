import { useMemo, useState } from 'react';
import { getProjectsByCategory } from '../data/portfolio';

/**
<<<<<<< HEAD
 * useProjectFilter -Manages active portfolio category filter state.
=======
 * useProjectFilter — Manages active portfolio category filter state.
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
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
