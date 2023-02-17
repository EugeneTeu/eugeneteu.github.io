import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App'
import { ThemeContextProvider, useTheme } from './context'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
])

const Base = () => {
    const { mode } = useTheme()

    return (
        <>
            <div className={`${mode}`}>
                <div className="bg-white dark:bg-gray-900">
                    <RouterProvider router={router} />
                </div>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <>
            <ThemeContextProvider>
                <Base />
            </ThemeContextProvider>
        </>
    </React.StrictMode>
)
