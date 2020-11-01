import React, { useState } from 'react';
import ThemeContext from "../../contexts/theme-contexts";
import { ThemeData } from '../../util/types/data-types';

/**
 * Contexte Provider des thèmes.
 * @param props 
 */
const ThemeContextProvider: React.FC = (props) => {
  const [theme, setTheme] = useState<ThemeData>();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
