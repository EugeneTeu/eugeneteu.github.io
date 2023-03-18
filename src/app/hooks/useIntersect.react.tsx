import { MutableRefObject, useEffect, useState } from 'react'

export function useIntersect<HTMLElement>(
    ref: MutableRefObject<HTMLDivElement | null>
) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin: '0px',
                threshold: 0,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return isIntersecting
}
