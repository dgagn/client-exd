import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
            <>
                <div className='container max-w-adaptive-xl mt-xl'>
                    <nav className='nav'>
                        <img src='/LogoCEFIR.png' alt={'Logo CEFIR'} />
                        <ul className='nav__list' id='zhaoNav'>
                            <li>
                                <Link href={'/'}>Accueil</Link>
                            </li>
                            <Link href={'/methodologie'}>Méthodologie</Link>
                        </ul>
                    </nav>
                </div>
                <div className="hamburger hamburger--elastic mt-2xs" id="zhaoNavOpen">
                    <div className="hamburger-box">
                        <div className="hamburger-inner" />
                    </div>
                </div>
            </>
    );
}