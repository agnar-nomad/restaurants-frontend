'use client'

import { useEffect, useState } from 'react'
import { Star, Sparkles } from "lucide-react"
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
import { favouritesStorageKey, nicknameStorageKey } from '../lib/config.js';
import { useToast } from './ui/use-toast.js';

type FavouriteIconProps = {
    name: Restaurant["name"],
}

export default function FavouriteIcon({name}: FavouriteIconProps) {
    const [mounted, setMounted] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [favourites, setFavourites] = useLocalStorage<string[]>(favouritesStorageKey, [])
    const isLoggedIn = useReadLocalStorage<string>(nicknameStorageKey)

    const { toast } = useToast()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleAddFavourite = () => {
        if (isLoggedIn && name) {
            if(favourites.includes(name)) return

            setFavourites([...favourites, name])

            toast({
                title: 'Přidáno',
                description: 'Restaurace byla přidána mezi oblíbené.',
            })
        }
    }

    const handleRemoveFavourite = () => {
        if (isLoggedIn && name) {
            const newFavourites = favourites.filter((favourite) => favourite !== name)
            setFavourites([...newFavourites])

            toast({
                title: 'Odebráno',
                description: 'Restaurace byla odebrána ze seznamu oblíbených.',
            })
        }
    }

    const isCurrentNameInFavourites = isLoggedIn && name && favourites.includes(name)

    const handleClick = () => {
        if (isLoggedIn) {
            if (isCurrentNameInFavourites) {
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
                aria-label={isCurrentNameInFavourites ? 'Odebrat z oblíbených' : 'Přidat k oblíbeným'}
            >
                {isCurrentNameInFavourites ? (
                    <Sparkles className="w-6 h-6" color='#f3611e' />
                ) : (
                    <Star className="w-6 h-6" color='#bbb' />
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