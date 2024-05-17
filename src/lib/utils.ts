import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nicknameStorageKey = "obedy-nickname";
export const favouritesStorageKey = "obedy-favourites";
export const darkModeStorageKey = "obedy-vite-ui-theme";
