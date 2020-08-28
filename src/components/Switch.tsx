import React from 'react';
import classNames from 'classnames';

const Switch = ({ on, onClick }: { on?: boolean; onClick?: () => any }) => {
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
        onClick={onClick}
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

export default Switch;
