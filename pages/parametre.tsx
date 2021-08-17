import React, { useEffect, useState } from "react";

export default function Parametre() {
    const [primary, setPrimary] = useState('blue')
    const [contrast, setContrast] = useState('blue-gray')

    const primaryColors = [
        'purple',
        'pink',
        'yellow',
        'cool-gray',
        'warm-gray',
        'true-gray',
        'blue-gray',
        'blue',
        'amber',
        'gray',
        'cyan',
        'emerald',
        'fuchsia',
        'green',
        'indigo',
        'orange',
        'lime',
        'red',
        'sky',
        'teal',
        'violet',
        'rose',
    ];

    useEffect(() => {
        document.body.setAttribute('color-primary', primary);
    }, [primary])

    useEffect(() => {
        document.body.setAttribute('color-contrast', contrast);
    }, [contrast])

    return (
        <>
            <div className="container max-w-xl">
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select name="primary-colors" id="primary" value={primary} onChange={(e) => {
                    setPrimary(e.target.value)
                }}>
                    {primaryColors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>

                <select name="contrast-colors" id="primary" value={contrast} onChange={(e) => {
                    setContrast(e.target.value)
                }}>
                    {primaryColors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </div>
        </>
    );
}
