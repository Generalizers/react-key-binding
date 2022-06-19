import { createContext, useContext } from 'react';

const keybindingsCtx = createContext({});

const useKeybindings = () => {
  const keybindings = useContext(keybindingsCtx);
  if (!keybindings) throw new Error('No keybinding context found');
  return keybindings;
};

export const KeybindingsProvider = keybindingsCtx.Provider;
