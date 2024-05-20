'use client'

import React from 'react'
import { useReadLocalStorage } from 'usehooks-ts'
import { favouritesStorageKey } from '../lib/utils.js'
import { Badge } from './ui/badge.js'

export default function FavouriteRestaurants() {

    const favourites = useReadLocalStorage<number[]>(favouritesStorageKey)

    if(!favourites || favourites.length === 0) return null

    console.log("favourites", favourites);
    

    const favouritesCount = favourites.length
    // const favouritesSorted = favourites.toSorted()
    
    const favouritesSorted = [...favourites, ...favourites,...favourites,...favourites,...favourites,...favourites].toSorted()
    console.log("favouritesSorted",favouritesSorted.length,favouritesSorted, );

    return (
        <div className='my-4'>
            <p className=''>Oblíbené restaurace</p>
            <div className='w-[calc(100vw-3rem)] flex gap-2 py-2 px-1 overflow-x-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-profitakOrange/30'>
            {favouritesSorted.map((f,idx) => (
                // TODO change key to real id
                <Badge className='cursor-pointer whitespace-nowrap' key={f+""+idx}>
                    ID: {f}
                </Badge>
            ))}
            </div>
        </div>
    )
}


