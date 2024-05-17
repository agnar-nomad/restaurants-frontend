'use client'

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {

    const getDefaultTheme = () => {
        if (typeof window === "undefined") return defaultTheme
        // console.log("getDefaultTheme", !!localStorage.getItem(storageKey));
        
        return localStorage.getItem(storageKey) as Theme || defaultTheme
    }
    
    const [theme, setTheme] = useState<Theme>(getDefaultTheme())

    // console.log("theme in state is: ",theme);
    

    useEffect(() => {
        if(typeof window === "undefined") return
        
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        if (theme === "system") {
            // console.log("theme is system");
            
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light"

        root.classList.add(systemTheme)
        return
        }

        root.classList.add(theme)
    }, [theme])


    const value = {
        theme,
        setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme)
        // console.log("setting theme:", theme);
        
        setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
        {children}
        </ThemeProviderContext.Provider>
    )
    }

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}