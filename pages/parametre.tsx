import React, { useEffect, useMemo, useState } from 'react';
import shallow from 'zustand/shallow';
import useColors from '../hooks/use-colors';
import { AiOutlineCheck } from 'react-icons/ai';
import classNames from 'classnames';
import useStore, { StoreState } from '../store/use-store';

const yearState = ({ setId }: StoreState) => ({ setId });

export default function Parametre() {
    const { setContrast, contrast, primary, primaryColors, setPrimary, contrastColors } =
        useColors();
    const [value, setValue] = useState('');
    const [cValue, setCValue] = useState('');

    const { setId } = useStore(yearState, shallow);

    useEffect(() => {
        setId('');
    }, [setId]);

    useEffect(() => {
        setValue(primary);
    }, [primary]);

    useEffect(() => {
        setCValue(contrast);
    }, [contrast]);

    const selectedContrast = useMemo(() => {
        return contrastColors.filter((el) => el.color === contrast).map((el) => el.name)[0];
    }, [contrast, contrastColors]);

    const selectedPrimary = useMemo(() => {
        return primaryColors.filter((el) => el.color === primary).map((el) => el.name)[0];
    }, [primary, primaryColors]);

    return (
        <>
            <div className="container max-w-xl">
                <div className="mb-lg mt-xl">
                    <h3 className="mb-md">
                        <span role="img" aria-label="Emoji de gear">
                            ⚙️
                        </span>{' '}
                        Paramètres
                    </h3>
                    <p className="mb-md">
                        Couleur primaire <span className="text-primary-500">{selectedPrimary}</span>
                    </p>
                    <ul className="flex gap-sm flex-wrap">
                        {primaryColors.map((color) => (
                            <button
                                key={color.color}
                                className={classNames(
                                    `button-reset circle circle--large bg-hover-${color.color}-500`,
                                    {
                                        'circle--selected align-center': value === color.color,
                                    }
                                )}
                                onClick={() => setPrimary(color.color)}
                            >
                                {value === color.color && (
                                    <AiOutlineCheck className="flex text-contrast-50" />
                                )}
                            </button>
                        ))}
                    </ul>
                </div>
                <div className='mb-xl'>
                    <p className="mb-sm">
                        Couleur de contraste{' '}
                        <span className="text-contrast-500">{selectedContrast}</span>
                    </p>
                    <ul className="flex gap-x-sm flex-wrap">
                        {contrastColors.map((color) => (
                            <button
                                key={color.color}
                                className={classNames(
                                    `button-reset circle circle--large bg-hover-${color.color}-500`,
                                    {
                                        'circle--selected align-center': cValue === color.color,
                                    }
                                )}
                                onClick={() => setContrast(color.color)}
                            >
                                {cValue === color.color && (
                                    <AiOutlineCheck className="flex text-contrast-50" />
                                )}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
