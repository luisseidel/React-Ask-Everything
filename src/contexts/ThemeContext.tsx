import { useEffect } from 'react';
import { useState, createContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProviderProps = {
    children: ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toogleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
        const storageTheme = localStorage.getItem('theme');
        return (storageTheme ?? 'light') as Theme;
    });

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    function toogleTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={ {theme: currentTheme, toogleTheme} }>
            {props.children}
        </ThemeContext.Provider>
    )
}