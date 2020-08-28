import { useContext } from 'react';
import { ToggleContext } from './context';

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context)
    throw new Error(
      'Toggle compound components cannot be used outside toggle component.'
    );
  return context;
};
