import React, { useState, createContext, useContext } from 'react';
import classNames from 'classnames';

const ToggleContext = createContext<{
  on?: boolean;
  setOn?: (on: boolean) => any;
}>({});

const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error(
      'Toggle compound components cannot be used outside toggle component.'
    );
  return context;
};

const Switch = () => {
  const { on, setOn } = useToggleContext();
  return (
    <div>
      <button
        className={classNames(
          'relative box-content inline-block outline-none cursor-pointer select-none',
          'w-14 h-7 p-1',
          'border-2 border-black-40 rounded-5',
          'transition-all duration-300 ease-in-out',
          {
            'bg-blue-60': on,
          }
        )}
        onClick={() => setOn!(!on)}
      >
        <div
          className={classNames(
            'relative box-border',
            'block',
            'w-1/2',
            'h-full',
            'rounded-4',
            'bg-white',
            'transition-allMarginPadding duration-300 ease-allMarginPadding',
            'shadow-switch',
            {
              'left-1/2': on,
            }
          )}
        />
      </button>
    </div>
  );
};

const Toggle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [on, setOn] = useState(false);
  return (
    <ToggleContext.Provider value={{ on, setOn }}>
      <div className={className}>{children}</div>
    </ToggleContext.Provider>
  );
};

Toggle.Switch = Switch;
export default Toggle;
