'use client'

import { useReadLocalStorage } from 'usehooks-ts'
import { favouritesStorageKey } from '../lib/config.js'
import { Badge } from './ui/badge.js'

export default function FavouriteRestaurants() {

    const favourites = useReadLocalStorage<string[]>(favouritesStorageKey, {
        // for SSR, prevent client hydration errors
        initializeWithValue: false
    })

    if(!favourites || favourites.length === 0) return null

    const favouritesSorted = favourites.toSorted()

    return (
        <div className='my-4'>
            <p>Oblíbené restaurace</p>
            <div className='max-w-[calc(100vw-3rem)] flex gap-2 py-2 px-1 overflow-x-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-profitakOrange/30'>
            {favouritesSorted.map((f) => (
                <Badge className='cursor-pointer whitespace-nowrap' key={f}>
                    {f}
                </Badge>
            ))}
            </div>
        </div>
    )
}