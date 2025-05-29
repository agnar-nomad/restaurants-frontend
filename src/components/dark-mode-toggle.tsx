'use client'

import { useEffect, useState } from 'react';
import { useTheme } from "../contexts/theme-provider.js"
import { MoonStar, SunMedium } from "lucide-react"
import { Button } from "./ui/button.js"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.js"

// Generate a stable ID for the dropdown
const useStableId = (prefix: string) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Only generate the ID on the client side
    setId(`${prefix}-${Math.random().toString(36).substring(2, 9)}`);
  }, [prefix]);

  return id;
};

export function ModeToggle() {
  const { setTheme } = useTheme();
  const dropdownId = useStableId('dropdown');

  // Only render the DropdownMenu when we have a stable ID
  // prevent hydration issues
  if (!dropdownId) {
    // Render a placeholder while waiting for the ID to be generated
    return (
      <Button variant="outline" size="icon" aria-label="Loading theme toggle">
        <SunMedium className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" id={`${dropdownId}-trigger`}>
          <SunMedium className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" id={`${dropdownId}-content`}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
