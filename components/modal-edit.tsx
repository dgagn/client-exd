import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import IconCircle from './icon-circle';
import { AiOutlineClose } from 'react-icons/ai';
import usePersistantStore, { PersistantStoreState } from '../store/use-persistant-store';
import shallow from 'zustand/shallow';
import { trim } from 'lodash';

interface ModalEditProps {
    open: boolean;
    toggleOpen: () => void;
    nom: string;
    note: string
}

const modalState = ({ liste, modifyListe }: PersistantStoreState) => ({ liste, modifyListe });
export default function ModalEdit({ open, toggleOpen, nom, note }: ModalEditProps) {
    const [newName, setNewName] = useState(nom)
    const [newNote, setNewNote] = useState(note)
    const [newNameError, setNewNameError] = useState(note)

    useEffect(() => {
        setNewName(nom)
        setNewNote(note)
    }, [nom, note])

    const { liste, modifyListe } = usePersistantStore(modalState, shallow);

    const newToggle = useCallback(() => {
        setNewNameError('')
        setNewNote(note)
        setNewName(nom)
        toggleOpen()
    }, [toggleOpen])

    useEffect(() => {
        const close = (e: any) => {
            if (e.keyCode === 27 && open) {
                newToggle();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [newToggle, open]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length <= 20)
            setNewName(e.target.value)
        if(liste.map(l => l.nom.toLowerCase()).includes(trim(e.target.value.toLowerCase()))) {
            setNewNameError(`Vous avez déjà une liste nommée ${trim(e.target.value)}`)
        } else {
            setNewNameError('')
        }
    }, [liste])

    const modifierListe = useCallback(() => {
        if(trim(newName) !== '') {
            modifyListe(nom, {
                nom: trim(newName),
                note: trim(newNote)
            })
            newToggle()
        }
    }, [modifyListe, newName, newNote, newToggle, nom])

    const handleNoteChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewNote(e.target.value)
    }, [])

    const confirmation = useMemo(() => {
        return (nom === newName && note === newNote ? null : <>
            {nom !== newName && <span className='block'>Êtes-vous sure de vouloir modifier le nom de la liste <span className='color-info'>{trim(nom)}</span> à {(<span className='color-info'>{trim(newName)}</span>)} ?</span>}
            {note !== newNote && <span className='block'>Êtes-vous sure de vouloir modifier la note de la liste <span className='color-info'>{trim(newName)}</span> ?</span>}
        </>)
    }, [newName, newNote, nom, note])

    return open ? (
        <div className="modal">
            <div className="content rounded relative p-sm@!sm">
                <IconCircle className="absolute top-lg right-xl pointer" color="error" onClick={newToggle}>
                    <AiOutlineClose  />
                </IconCircle>
                <h3 className="mt-sm">
                    <span role="img" aria-label="emoji pour un étoile">
                        ✏️
                    </span>{' '}
                    Modifier la liste « {nom} »
                </h3>
                <p className="mt-sm">Les modifications à la liste sont définitive.</p>

                <span className="block mt-lg">
                    <label htmlFor="editNom" className="form__label">
                        Modifier le nom
                    </label>
                    <input type="text" id='editNom' className='form__control mt-sm' value={newName} onChange={handleChange} />
                    <p className='text-sm text-contrast-500 mt-xs'>Un maximum de 20 caractères</p>
                    {newNameError !== '' && <p className='text-sm text-error-500 mt-xs'>{newNameError}</p>}
                </span>
                <span className='block mt-sm'>
                    <label htmlFor="note" className='form__label'>Note</label>
                    <textarea onChange={handleNoteChange} value={newNote} id='note' className='form__control' />
                </span>
                <p className='mt-sm'>{confirmation}</p>


                <div className="flex mt-md mb-sm align-center justify-center mt-lg flex-wrap gap-y-md">
                    <button
                        className="button-reset text-bg-fx text-bg-fx--scale-y mr-lg"
                        onClick={newToggle}
                    >
                        Annuler
                    </button>
                    {newNameError === '' && <button
                        className="button-reset text-bg-fx text-bg-fx--scale-y button-bg px-md py-sm rounded h-50"
                        onClick={modifierListe}
                    >
                        Modifier  « {nom} »
                    </button>}
                </div>
            </div>
        </div>
    ) : null;
}