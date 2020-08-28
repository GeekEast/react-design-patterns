import React, { useState } from 'react';
import Switch from './Switch';
import { ToggleContext } from './context';

const Toggle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [on, setOn] = useState(false);
  return (
    // value in state, won't cause unnecessary re-render
    <ToggleContext.Provider value={{ on, setOn }}>
      <div className={className}>{children}</div>
    </ToggleContext.Provider>
  );
};

Toggle.Switch = Switch;
export default Toggle;
