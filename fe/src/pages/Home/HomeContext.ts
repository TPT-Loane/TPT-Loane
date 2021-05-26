import React, { createContext } from 'react';
import { ViewType } from '../../utils';

interface HomeContextType {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filters: Array<number>;
  setFilters: React.Dispatch<React.SetStateAction<Array<number>>>;
}

export const initHomeContext: HomeContextType = {
  view: ViewType.Grid,
  setView: () => undefined,
  page: 1,
  setPage: () => undefined,
  searchTerm: '',
  setSearchTerm: () => undefined,
  filters: [],
  setFilters: () => undefined,
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);
