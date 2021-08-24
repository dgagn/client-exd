import React, { PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";

interface IconCircleProps {
    className?: string,
    color?: 'primary' | 'warning' | 'error' | 'success'
    onClick?: () => void
}
export default function IconCircle({ className, children, color = "primary", onClick = () => {} }: PropsWithChildren<IconCircleProps>) {
    return <button className={classNames('icon-circle pointer', className)} data-color={color} onClick={onClick} aria-label={`Un bouton avec une couleur ${color}.`}>
        {children}
    </button>;
}
