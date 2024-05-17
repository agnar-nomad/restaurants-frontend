'use client'

import React, { useState } from 'react'
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

const starIconSize = 6
const starIconSizeClass = `w-${starIconSize} h-${starIconSize}`

type FavouriteIconProps = {
    id: Restaurant["id"],
}

export default function FavouriteIcon({id}: FavouriteIconProps) {

    const [dialogOpen, setDialogOpen] = useState(false)
    const [favourites, setFavourites, removeFavourites] = useLocalStorage<number[]>(favouritesStorageKey, [])
    const isLoggedIn = useReadLocalStorage<string>(nicknameStorageKey)

    const { toast } = useToast()

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

    const handleDialogClose = () => {
        setDialogOpen(false)
        const windowHeigth = window.innerHeight
        
        window.scrollTo({ top: windowHeigth - 20, behavior: 'smooth' })
    }


    return (
        <div>
            {isCurrentIdInFavourites ?
                <Button variant="ghost" size="icon" onClick={handleClick}>
                    <StarFilledIcon className={starIconSizeClass} color='#f3611e' />
                </Button>
            :
                <Button variant="ghost" size="icon" onClick={handleClick}>
                    <StarIcon className={starIconSizeClass} />
                </Button>
            }
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
                        <Button variant="outline" onClick={handleDialogClose}>OK, zavřít</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            }
        </div>
    )
}