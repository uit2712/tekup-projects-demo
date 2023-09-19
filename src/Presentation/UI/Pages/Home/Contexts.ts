import { createContext } from 'react';

import { CategoryItem, CategoryType } from './Types';

interface HomeContextInterface {
    listCategories: CategoryItem[];
    selectedCategory: CategoryType;
    selectCategory: (selectedCategory: CategoryType) => void
}

export const HomeContext = createContext<HomeContextInterface>({
    listCategories: [],
    selectedCategory: 'all',
    selectCategory: () => { }
})