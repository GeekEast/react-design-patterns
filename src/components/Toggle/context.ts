import { createContext } from 'react';

export const ToggleContext = createContext<{
  on?: boolean;
  setOn?: (on: boolean) => any;
}>({});
