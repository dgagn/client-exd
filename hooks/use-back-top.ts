import { RefObject, useCallback, useEffect, useState } from "react";

interface BacktopOptions {
    offset: number;
}

export default function useBackTop(
        ref: RefObject<HTMLElement>,
        options?: Partial<BacktopOptions>
): boolean {
    const { offset }: BacktopOptions = { offset: 300, ...options };

    const [scrolling, setScrolling] = useState(false);
    const [visible, setVisible] = useState(false);

    const refCurrent = ref.current

    const checkBackTop = useCallback(() => {
        const windowTop = window.scrollY || document.documentElement.scrollTop;
        windowTop > offset ? setVisible(true) : setVisible(false);
        setScrolling(false);
    }, [offset]);

    const handleClick = useCallback((evt: MouseEvent) => {
        evt.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleScroll = useCallback(() => {
        if (!scrolling) {
            setScrolling(true);
            !window.requestAnimationFrame
                    ? setTimeout(checkBackTop, 250)
                    : window.requestAnimationFrame(checkBackTop);
            setScrolling(false)
        }
    }, [checkBackTop, scrolling]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        refCurrent?.addEventListener('click', handleClick);
        return () => {
            refCurrent?.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleClick, handleScroll, refCurrent]);

    return visible;
}