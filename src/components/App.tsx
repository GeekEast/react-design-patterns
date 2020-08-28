import React from 'react';
import Toggle from 'components/Toggle/Toggle';

const App = () => {
  return (
    <div className="flex">
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
      <Toggle>
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
        <Toggle.Switch />
      </Toggle>
    </div>
  );
};

export default App;
