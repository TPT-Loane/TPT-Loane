import * as React from 'react';
import { HomeContext, initHomeContext } from './HomeContext';
import HomeContent from './HomeContent';

function Home(): JSX.Element {
  const [view, setView] = React.useState(initHomeContext.view);

  return (
    <HomeContext.Provider value={{ view, setView }}>
      <HomeContent />
    </HomeContext.Provider>
  );
}

export default Home;
