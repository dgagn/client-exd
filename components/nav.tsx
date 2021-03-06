import React, { useEffect, useMemo, useState } from "react";
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import shallow from "zustand/shallow";

const navState = ({ isDark, toggleDarkMode }: PersistantStoreState) => ({ isDark, toggleDarkMode })
export default function Nav() {
    const { isDark, toggleDarkMode } = usePersistantStore(navState, shallow)

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <>
            <div className="container max-w-xl mt-xl pb-lg">
                <nav className="nav gap-y-md">
                    <Link href='/' passHref>
                        <div
                            className="logo logo-image pointer"
                            role='img'
                        />
                    </Link>

                    <ul className="nav__list gap-y-md" aria-label="Liens de navigation principal du CEFIR">
                        <li aria-label="Lien vers l'accueil">
                            <Link href={'/'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Accueil
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers l'accueil">
                            <Link href={'/parametre'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Paramètres
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers l'accueil">
                            <Link href={'/liste'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Liste
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParGroupe'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Par groupe
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParAnnee'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Par année
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button
                                aria-label="Bouton pour changer de thème"
                                onClick={toggleDarkMode}
                                className="pointer"
                            >
                                {isDark ? <FiSun /> : <FiMoon />}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {/*<div className="hamburger hamburger--elastic mt-2xs" id="zhaoNavOpen">
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                </div>*/}
        </>
    );
}