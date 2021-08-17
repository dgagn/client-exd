import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Nav() {
    const [isDark, toggleDarkMode] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <>
            <div className="container max-w-xl mt-xl">
                <nav className="nav">
                    <img
                        className="logo"
                        src={isDark ? '/LogoCEFIR_1x_dark.webp' : '/LogoCEFIR_1x.webp'}
                        srcSet={
                            isDark
                                ? '/LogoCEFIR_1x_dark.webp 1x, /LogoCEFIR_2x_dark.webp 2x'
                                : '/LogoCEFIR_1x.webp 1x, /LogoCEFIR_2x.webp 2x'
                        }
                        alt={'Logo CEFIR'}
                        loading="lazy"
                        width={118}
                        height={64}
                    />
                    <ul className="nav__list" aria-label="Liens de navigation principal du CEFIR">
                        <li aria-label="Lien vers l'accueil">
                            <Link href={'/'} passHref>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Accueil
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParGroupe'}>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Événements par groupe
                                </button>
                            </Link>
                        </li>
                        <li aria-label="Lien vers les incidents par groupes">
                            <Link href={'/evenementsParAnnee'}>
                                <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                    Événements par année
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