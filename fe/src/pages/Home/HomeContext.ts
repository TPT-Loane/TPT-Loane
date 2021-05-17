import React, { createContext } from 'react';
import { ViewType } from '../../utils';

interface HomeContextType {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

export const initHomeContext: HomeContextType = {
  view: ViewType.Grid,
  setView: () => undefined,
};

export const HomeContext = createContext<HomeContextType>(initHomeContext);
