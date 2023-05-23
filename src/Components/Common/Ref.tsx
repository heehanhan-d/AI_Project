import React, { useEffect, useRef } from 'react';
import { ImageSectionProps, ScrollRefProps } from './Interface';

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


export function CenterRef({ children }: ScrollRefProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'center'
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

export function UpScroll({ children }: ScrollRefProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            window.scrollTo(0, 0);
        }
    }, []);

    return <div ref={ref}>{children}</div>;
}

export function ImageSection({ dogImages }: ImageSectionProps) {
    const imageSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageSectionRef.current) {
            imageSectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [dogImages]);

    return (
        <div ref={imageSectionRef}></div>
    )
}