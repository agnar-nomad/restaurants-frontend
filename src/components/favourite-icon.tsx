'use client'

import React, { useEffect, useState } from 'react'
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { Restaurant } from '../lib/types.js';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { Button } from './ui/button.js';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog.js"
import { favouritesStorageKey, nicknameStorageKey } from '../lib/utils.js';
import { useToast } from './ui/use-toast.js';

type FavouriteIconProps = {
    id: Restaurant["id"],
}

export default function FavouriteIcon({id}: FavouriteIconProps) {
    const [mounted, setMounted] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [favourites, setFavourites, removeFavourites] = useLocalStorage<number[]>(favouritesStorageKey, [])
    const isLoggedIn = useReadLocalStorage<string>(nicknameStorageKey)

    const { toast } = useToast()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleAddFavourite = () => {
        if (isLoggedIn && id) {
            if(favourites.includes(id)) return

            setFavourites([...favourites, id])

            toast({
                title: 'Restaurace přidána',
                description: 'Restaurace byla přidána mezi oblíbené.',
            })
        }
    }

    const handleRemoveFavourite = () => {
        if (isLoggedIn && id) {
            const newFavourites = favourites.filter((favourite) => favourite !== id)
            setFavourites([...newFavourites])

            toast({
                title: 'Restaurace odebrána',
                description: 'Restaurace byla odebrána ze seznamu oblíbených.',
            })
        }
    }

    const isCurrentIdInFavourites = isLoggedIn && id && favourites.includes(id)

    const handleClick = () => {
        if (isLoggedIn) {
            if (isCurrentIdInFavourites) {
                handleRemoveFavourite()
            } else {
                handleAddFavourite()
            }
        }
        else {
            setDialogOpen(true)
        }
    }

    const handleCloseDialog = () => {
        setDialogOpen(false)
        const windowHeigth = window.innerHeight
        
        window.scrollTo({ top: windowHeigth - 20, behavior: 'smooth' })
        // TODO does this work properly?
    }

    // Don't render the icon until we've mounted on the client
    if (!mounted) {
        return <Button variant="ghost" size="icon" aria-hidden="true" className="invisible" />
    }

    return (
        <div>
            <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleClick}
                aria-label={isCurrentIdInFavourites ? 'Odebrat z oblíbených' : 'Přidat k oblíbeným'}
            >
                {isCurrentIdInFavourites ? (
                    <StarFilledIcon className="w-6 h-6" color='#f3611e' />
                ) : (
                    <StarIcon className="w-6 h-6" />
                )}
            </Button>
            {dialogOpen &&
                <Dialog open={dialogOpen}>
                <DialogContent className="sm:max-w-[470px]">
                    <DialogHeader>
                        <DialogTitle>Nezapomeň se přihlásit</DialogTitle>
                        <DialogDescription>
                            Musíš být přihlášený(á). Podívej se na patičku stránky a nastav si přezdívku pro Profitak Obědy. Uloží se pouze v prohlížeči.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCloseDialog}>OK, zavřít</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            }
        </div>
    )
}