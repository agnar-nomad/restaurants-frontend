'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { darkModeStorageKey } from "../lib/config.js"

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
  storageKey = darkModeStorageKey,
  ...props
}: ThemeProviderProps) {

    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    // After mounting, we have access to the theme
    useEffect(() => {
        setMounted(true)
        const storedTheme = localStorage.getItem(storageKey) as Theme | null
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        if (!mounted) return
        
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"
            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme, mounted])


    const value = {
        theme: mounted ? theme : defaultTheme, // Use default theme during SSR
        setTheme: (newTheme: Theme) => {
            if (mounted) {
                localStorage.setItem(storageKey, newTheme)
                setTheme(newTheme)
            }
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