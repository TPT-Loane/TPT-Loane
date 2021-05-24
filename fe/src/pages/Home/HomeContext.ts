import React, { createContext } from 'react';
import { ViewType } from '../../utils';

interface HomeContextType {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const initHomeContext: HomeContextType = {
  view: ViewType.Grid,
  setView: () => undefined,
  page: 1,
  setPage: () => undefined,
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);
