import * as React from 'react';
import { HomeContext, initHomeContext } from './HomeContext';
import HomeContent from './HomeContent';

function Home(): JSX.Element {
  const [view, setView] = React.useState(initHomeContext.view);
  const [page, setPage] = React.useState(initHomeContext.page);

  const providerValue = {
    view, setView, page, setPage,
  };

  return (
    <HomeContext.Provider value={providerValue}>
      <HomeContent />
    </HomeContext.Provider>
  );
}

export default Home;
