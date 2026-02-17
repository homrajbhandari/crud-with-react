import React from 'react';
import SingleItem from './components/SingleItem';

function App() {
  const item = {
    name: "learn react",
    completed: false,
  };

  return (
    <div>
      <SingleItem item={item} />
    </div>
  );
}

export default App;
