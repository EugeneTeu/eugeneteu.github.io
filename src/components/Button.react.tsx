import React from 'react'

type Props = {
    label: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
}
export const Button = ({ label, onClick }: Props): React.ReactElement => {
    return (
        <button
            className=" hover:scale-110 ease-in-out inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 dark:bg-blue-800 bg-blue-400 text-black dark:text-white"
            onClick={onClick}
        >
            {label}
        </button>
    )
}
