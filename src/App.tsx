import { useState } from 'react'
import { Container, Header } from './components'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Header />
            <div className="max-w-3xl mx-auto md:my-6 ">
                <div className="grid md:grid-cols-4 justify-center justify-items-center">
                    <div>About</div>
                    <div>Experience</div>
                    <div>Education</div>
                    <div>Contact</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default App
