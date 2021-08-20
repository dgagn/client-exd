import React, { PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";

interface IconCircleProps {
    className?: string,
    color?: 'primary' | 'warning' | 'error'
}
export default function IconCircle({ className, children, color = "primary" }: PropsWithChildren<IconCircleProps>) {
    return <div className={classNames('icon-circle', className)} data-color={color}>
        {children}
    </div>;
}
