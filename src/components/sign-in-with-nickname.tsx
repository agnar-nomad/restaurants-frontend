'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
import { Label } from "./ui/label.js"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog.js"
import { Trash, PlusIcon } from "lucide-react"
import { useLocalStorage } from 'usehooks-ts'
import { nicknameStorageKey } from '../lib/utils.js'


export default function SignInWithNickname() {
    const [mounted, setMounted] = useState(false)
    const [nickname, setNickname, removeNickname] = useLocalStorage<string>(nicknameStorageKey, "")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputRef.current) {
            try {
                setNickname(inputRef.current.value)
            } catch (error) {
                alert("Error: " + error)
            }
        }
    }

    const handleRemove = () => removeNickname()

    // Don't render anything until we've mounted on the client
    if (!mounted) {
        return (
            <div className='flex items-center gap-2'>
                <span>Přezdívka:</span>
                <span className='w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse' />
            </div>
        )
    }

    return (
        <div className='flex items-center gap-2'>
            <span>Přezdívka:</span>
            {nickname ? 
                <span>{nickname}</span>
            :
            <>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" 
                            className='flex items-center gap-1'
                            title='Přidat přezdívku pro Obědy'
                        >
                            <PlusIcon className='h-3 w-3' />
                            Přidat
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[470px]">
                        <DialogHeader>
                            <DialogTitle>Nastavit přezdívku</DialogTitle>
                            <DialogDescription>
                                Nastav si přezdívku pro Profitak Obědy. Uloží se pouze v prohlížeči a ten si ho bude pamatovat.
                            </DialogDescription>
                        </DialogHeader>

                        <form name='myForm' onSubmit={handleSubmit}>
                            <div className="flex items-center gap-4 py-4">
                                <Label htmlFor="username" className="text-right">
                                    Přezdívka
                                </Label>
                                <Input id="username" 
                                    type="text" 
                                    name='nickname' 
                                    ref={inputRef} 
                                    required 
                                    minLength={5} 
                                />
                            </div>
                            <DialogFooter className='gap-2 sm:gap-0'>
                                <Button type="submit">Uložit</Button>
                                <DialogClose asChild>
                                    <Button variant="outline">Zavřít</Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>

                    </DialogContent>
                </Dialog>
            </>
            }
            {nickname ? 
                <Button variant="ghost" size="sm" onClick={handleRemove}>
                    <Trash color='#7f152e' className='w-5 h-5' /> 
                </Button>
            : 
                null
            }

        </div>
    )
}