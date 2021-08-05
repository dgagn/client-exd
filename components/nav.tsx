import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Nav() {
    return (
            <>
                <div className='container max-w-xl mt-xl'>
                    <nav className='nav'>
                        <img src='https://res.cloudinary.com/cefir/image/upload/f_auto,c_limit,w_128,q_auto/v1628141832/LogoCEFIR_pjt5ic.webp' srcSet='https://res.cloudinary.com/cefir/image/upload/f_auto,c_limit,w_128,q_auto/v1628141832/LogoCEFIR_pjt5ic.webp 1x, https://res.cloudinary.com/cefir/image/upload/f_auto,c_limit,w_256,q_auto/v1628141832/LogoCEFIR_pjt5ic.webp 2x' alt={'Logo CEFIR'} loading='lazy' width={118} height={64} />
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