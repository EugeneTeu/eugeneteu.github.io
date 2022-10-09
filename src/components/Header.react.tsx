import { Switch } from '@headlessui/react'
import react, { ReactElement, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Button } from './Button.react'
import { NavLink, useNavigate } from 'react-router-dom'

type Props = {}

export const Header = ({}: Props) => {
    const [enabled, setEnabled] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className="bg-black">
            <div className="max-w-5xl mx-auto ">
                <div className="flex h-14 mx-8 items-center justify-center justify-items-center">
                    <div className="flex-grow ">
                        <h1>Eugene Teu 👋</h1>
                    </div>
                    <div className="items-center justify-center justify-items-center mt-1">
                        <NavLink
                            to="/experience"
                            className={({ isActive }) =>
                                isActive ? 'hidden' : undefined
                            }
                        >
                            <Button label="Try Me" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
