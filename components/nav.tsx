import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
            <>
                <div className='container max-w-xl mt-xl'>
                    <nav className='nav'>
                        <img srcSet='/LogoCEFIR.webp' alt={'Logo CEFIR'} loading='lazy' width={118} height={64} />
                        <ul className='nav__list' aria-label='Liens de navigation principal du CEFIR'>
                            <li aria-label="Lien vers l'accueil">
                                <Link href={'/'}>Accueil</Link>
                            </li>
                            {/*<li aria-label='Lien vers la méthodologie'>
                                <Link href={'/test'}>Méthodologie</Link>
                            </li>*/}
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