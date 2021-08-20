import React, { useEffect, useMemo, useState } from "react";
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import shallow from "zustand/shallow";

const navState = ({ isDark, toggleDarkMode }: PersistantStoreState) => ({ isDark, toggleDarkMode })
export default function Nav() {
    //const [isDark, toggleDarkMode] = useState(false);
    const { isDark, toggleDarkMode } = usePersistantStore(navState, shallow)

    const src = useMemo(() => {
        return isDark ? '/LogoCEFIR_1x_dark.webp' : '/LogoCEFIR_1x.webp'
    }, [isDark])

    const srcSet = useMemo(() => {
        return isDark
                ? '/LogoCEFIR_1x_dark.webp 1x, /LogoCEFIR_2x_dark.webp 2x'
                : '/LogoCEFIR_1x.webp 1x, /LogoCEFIR_2x.webp 2x'
    }, [isDark])

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <>
            <div className="container max-w-xl mt-xl">
                <nav className="nav">
                    <Link href='/' passHref>
                        <img
                                className="logo pointer"
                                src={src}
                                srcSet={srcSet}
                                alt={'Logo CEFIR'}
                                loading="lazy"
                                width={118}
                                height={64}
                        />
                    </Link>
                    <ul className="nav__list" aria-label="Liens de navigation principal du CEFIR">
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
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParGroupe'}>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Par groupe
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParAnnee'}>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Par année
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button
                                aria-label="Bouton pour changer de thème"
                                onClick={() => toggleDarkMode(!isDark)}
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