import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import IconCircle from './icon-circle';
import { AiOutlineClose } from 'react-icons/ai';
import { trim } from 'lodash';
import usePersistantStore, { PersistantStoreState } from '../store/use-persistant-store';
import shallow from 'zustand/shallow';

interface ModalProps {
    open: boolean;
    toggleOpen: () => void;
}

const modalState = ({ liste, addListe }: PersistantStoreState) => ({ liste, addListe });
export default function Modal({ open, toggleOpen }: ModalProps) {
    const [nom, setNom] = useState('');
    const [note, setNote] = useState('');
    const [nomError, setNomError] = useState('');

    const newToggle = useCallback(() => {
        toggleOpen();
        setNomError('');
        setNom('');
        setNote('');
    }, [toggleOpen]);

    const { addListe, liste } = usePersistantStore(modalState, shallow);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length <= 20) setNom(e.target.value);
            if (
                liste.map((l) => l.nom.toLowerCase()).includes(trim(e.target.value.toLowerCase()))
            ) {
                setNomError(`Vous avez déjà une liste nommée ${trim(e.target.value)}`);
            } else {
                setNomError('');
            }
        },
        [liste]
    );

    const handleNoteChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
    }, []);

    const confirmation = useMemo(() => {
        return (
            <>
                Êtes-vous sure de vouloir créer la liste{' '}
                {<span className="color-info">{trim(nom)}</span>} ?
            </>
        );
    }, [nom]);

    useEffect(() => {
        const close = (e: any) => {
            if (e.keyCode === 27 && open) {
                newToggle();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [newToggle]);

    const createList = useCallback(() => {
        const noms = liste.map((l) => trim(l.nom));

        if (noms.includes(trim(nom))) {
            setNomError(`Vous avez déjà une liste nommée ${trim(nom)}`);
            setNom('');
        } else {
            if (trim(nom) !== '') {
                addListe({
                    nom: trim(nom),
                    note: trim(note),
                });
                newToggle();
            }
        }
    }, [liste, nom, addListe, note, newToggle]);

    return open ? (
        <div className="modal">
            <div className="content rounded relative p-sm@!sm">
                <IconCircle className="absolute top-lg right-xl pointer" color="error" onClick={newToggle}>
                    <AiOutlineClose  />
                </IconCircle>
                <h3 className="mt-sm">
                    <span role="img" aria-label="emoji pour un étoile">
                        ⭐
                    </span>{' '}
                    Création d&apos;une liste personnelle
                </h3>
                <p className="mt-sm">Les listes sont utilisées pour classer vos recherches</p>
                <span className="block mt-lg">
                    <label htmlFor="nom" className="form__label">
                        Nom de la liste
                    </label>
                    <input
                        type="text"
                        id="nom"
                        className="form__control"
                        onChange={handleChange}
                        value={nom}
                    />
                    <p className="text-sm text-contrast-500 mt-xs">Un maximum de 20 caractères</p>
                    {nomError !== '' && <p className="text-sm text-error-500 mt-xs">{nomError}</p>}
                </span>
                <span className="block mt-sm">
                    <label htmlFor="note" className="form__label">
                        Note
                    </label>
                    <textarea
                        onChange={handleNoteChange}
                        value={note}
                        id="note"
                        className="form__control"
                    />
                </span>
                <p className="mt-sm">{confirmation}</p>
                <div className="flex mt-md mb-sm align-center justify-center flex-wrap gap-y-md">
                    <button
                        className="button-reset text-bg-fx text-bg-fx--scale-y mr-lg"
                        onClick={newToggle}
                    >
                        Annuler
                    </button>
                    {nomError === '' && (
                        <button
                            className="button-reset text-bg-fx text-bg-fx--scale-y button-bg px-md py-sm rounded h-50"
                            onClick={createList}
                        >
                            Créer la liste
                        </button>
                    )}
                </div>
            </div>
        </div>
    ) : null;
}