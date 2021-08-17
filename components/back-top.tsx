import React, { useRef } from 'react';
import classNames from 'classnames';
import useBackTop from '../hooks/use-back-top';
import { HiChevronUp } from 'react-icons/hi';

export default function BackTop() {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useBackTop(ref);

    const classes = classNames('back-top', {
        'back-top--visible': visible,
    });

    return <div className={classes} ref={ref}>
        <HiChevronUp className='text-contrast-50' style={{ width: 22, height: 22 }} />
    </div>;
}
