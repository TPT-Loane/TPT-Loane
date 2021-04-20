import React from 'react';
import { Link } from 'react-router-dom';

function Error(): JSX.Element {
  // @TODO - Add some actual content here.
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
