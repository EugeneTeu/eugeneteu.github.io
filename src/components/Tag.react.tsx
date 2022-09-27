import react, { ReactElement } from 'react'

export type TagProps = {
    label: string
    custom?: string
}

export const Tag = ({ label, custom }: TagProps) => {
    return (
        <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${custom}`}
        >
            {label}
        </span>
    )
}
