import React, { useEffect, useRef } from 'react';
import { ScrollRefProps } from './Interface';

export function ScrollRef({ children }: ScrollRefProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end'
                }
            )
        }
    }, []);

    return <div ref={ref}>{children}</div>;
}

export function ResultRef({ children }: ScrollRefProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'start'
                }
            )
        }
    }, []);

    return <div ref={ref}>{children}</div>;
}