import React from "react";
import { ThemeData } from "../util/types/data-types";

interface ThemeContextState {
    theme: ThemeData;
    setTheme: (idTheme: ThemeData) => void;
}

const ThemeContext = React.createContext<ThemeContextState>({ theme: null, setTheme: null });

export default ThemeContext;
