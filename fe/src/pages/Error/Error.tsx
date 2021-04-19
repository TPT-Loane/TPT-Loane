import React from 'react';
import { Link } from 'react-router-dom';

export const Error: React.FC = () => (
  // @TODO - Add some actual content here.
  <div>
    <h1>404 - Not Found</h1>
    <Link to="/">Back to Home</Link>
  </div>
);
