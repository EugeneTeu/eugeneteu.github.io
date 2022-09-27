import { Switch } from '@headlessui/react'
import react, { ReactElement, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

type Props = {}

export const Header = ({}: Props) => {
    const [enabled, setEnabled] = useState<boolean>(false)

    return (
        <div className="bg-black">
            <div className="max-w-5xl mx-auto ">
                <div className="flex h-14 mx-8 items-center justify-center justify-items-center">
                    <div className="flex-grow ">
                        <h1>Eugene Teu 👋</h1>
                    </div>
                    <div className="hidden">
                        <Switch.Group>
                            <div className="flex items-center">
                                <Switch.Label className="mr-4">
                                    {enabled ? (
                                        <SunIcon className="h-6 w-6" />
                                    ) : (
                                        <MoonIcon className="h-6 w-6" />
                                    )}
                                </Switch.Label>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className={`${
                                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                                >
                                    <span className="sr-only">
                                        Dark Mode toggle
                                    </span>
                                    <span
                                        className={`${
                                            enabled
                                                ? 'translate-x-6'
                                                : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </Switch>
                            </div>
                        </Switch.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}
