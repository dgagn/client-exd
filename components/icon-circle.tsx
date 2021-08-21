import React, { PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";

interface IconCircleProps {
    className?: string,
    color?: 'primary' | 'warning' | 'error' | 'success'
}
export default function IconCircle({ className, children, color = "primary" }: PropsWithChildren<IconCircleProps>) {
    return <button className={classNames('icon-circle pointer', className)} data-color={color}>
        {children}
    </button>;
}
