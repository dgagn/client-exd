import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import IconCircle from './icon-circle';
import { AiOutlineClose } from 'react-icons/ai';
import usePersistantStore, { PersistantStoreState } from '../store/use-persistant-store';
import shallow from 'zustand/shallow';
import { trim } from 'lodash';

interface ModalCloseProps {
    open: boolean;
    toggleOpen: () => void;
    nom: string;
}

const modalState = ({ liste, deleteListe }: PersistantStoreState) => ({ liste, deleteListe});
export default function ModalClose({ open, toggleOpen, nom }: ModalCloseProps) {
    const [validation, setValidation] = useState('')
    const [validationError, setValidationError] = useState('')

    const { deleteListe, liste } = usePersistantStore(modalState, shallow);

    const newToggle = useCallback(() => {
        setValidation('')
        setValidationError('')
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
        setValidation(e.target.value)
    }, [])

    const handleSubmit = () => {
        if(validation === '') {
            setValidationError(`Le nom ne peut pas être vide et doit correspondre à ${nom}`)
        }
        else if(trim(validation) !== nom) {
            setValidationError(`${validation} doit correspondre à ${nom}`)
        } else {
            setValidationError('')
            deleteListe(nom)
            setValidation('')
            newToggle()
        }
    }

    return open ? (
        <div className="modal">
            <div className="content rounded relative">
                <IconCircle className="absolute top-lg right-xl" color="error">
                    <AiOutlineClose onClick={newToggle} />
                </IconCircle>
                <h3 className="mt-sm">
                    <span role="img" aria-label="emoji pour un étoile">
                        ❌
                    </span>{' '}
                    Supprimer la liste {nom}
                </h3>
                <p className="mt-sm">Une fois supprimer, vous ne pouvez plus revenir en arrière.</p>

                <span className="block mt-lg">
                    <label htmlFor="verifNom" className="form__label">
                        Entrer <span className="color-info">{nom}</span> pour pouvoir supprimer la
                        liste
                    </label>
                    <input type="text" id="verifNom" className="form__control mt-sm" onChange={handleChange} value={validation} />
                    {validationError !== '' && <p className='text-sm text-error-500 mt-xs'>{validationError}</p>}
                </span>

                <div className="flex mt-md mb-sm align-center justify-center mt-lg">
                    <button
                        className="button-reset text-bg-fx text-bg-fx--scale-y mr-lg"
                        onClick={newToggle}
                    >
                        Annuler
                    </button>
                    <button
                        className="button-reset text-bg-fx text-bg-fx--scale-y button-bg px-md py-sm rounded h-50"
                        onClick={handleSubmit}
                    >
                        Supprimer {nom}
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}