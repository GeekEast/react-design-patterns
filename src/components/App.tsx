import React, { useState } from 'react';
import Switch from './Switch';

const App = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <Switch onClick={() => setOn(!on)} on={on} />
    </div>
  );
};

export default App;
