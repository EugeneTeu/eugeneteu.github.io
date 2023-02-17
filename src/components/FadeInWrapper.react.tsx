import react, {
    MutableRefObject,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react'
import { useIntersect } from '../hooks'

type ContainerProps = {
    children: react.ReactElement
}

export const FadeInWrapper = ({ children }: ContainerProps) => {
    const ref: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const [isVisible, setVisible] = useState(false)
    const className = isVisible ? 'animate-fadeIn' : 'opacity-0'

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    if (ref.current) {
                        observer.unobserve(ref.current)
                    }
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.8,
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref}>
            <div className={className}>{children}</div>
        </div>
    )
}
