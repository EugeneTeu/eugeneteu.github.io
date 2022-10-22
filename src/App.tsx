import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Header, Tag } from './components'

function App() {
    return (
        <div>
            {<Header />}
            {Home()}
        </div>
    )
}

export default App

function Home() {
    const [clicked, setClicked] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <>
            {RoundedAvatar()}
            <div className={`max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6`}>
                <div className="flex">
                    <div className="mx-auto animate-bounce">
                        <Button
                            label={'Tap'}
                            onClick={() => {
                                setClicked(!clicked)
                            }}
                        />
                    </div>
                </div>
                <div className={`${clicked ? ' my-7 animate-spin' : ''}`}>
                    {Intro()}
                    <div className="my-6 border dark:border-gray-500"></div>
                    {Experience()}
                    <div className="my-6 border dark:border-gray-500"></div>
                    {Skills()}
                    <div className="my-6 border dark:border-gray-500"></div>
                    {Socials()}
                </div>

                {/* <div className="flex">
                    <div className="mx-auto">
                        <Button
                            label={'Try Me'}
                            onClick={() => {
                                navigate('/experience')
                            }}
                        />
                    </div>
                </div> */}
            </div>
            <div className="max-w-5xl mx-auto mt-6 bg-white dark:bg-grey"></div>
        </>
    )
}

function Socials() {
    return (
        <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
            <h1>Socials</h1>
            <p>Connect with me</p>
            <div className="not-prose flex justify-center">
                <a href="https://www.linkedin.com/in/eugeneteu">
                    <img
                        alt="linkedin"
                        className="w-16 h-16 mx-2"
                        src="/linkedin.svg"
                    />
                </a>
                <a href="https://github.com/EugeneTeu">
                    <img
                        alt="github"
                        className="w-16 h-16 mx-2"
                        src="/github.svg"
                    />
                </a>
            </div>
            <h4>© 2022 Eugene Teu. All rights reserved.</h4>
        </article>
    )
}

function Skills() {
    return (
        <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
            <h1>Skills</h1>
            <p>
                The following are the software and technologies that I have
                worked with
            </p>
            <h4>Web Technologies</h4>
            <div className="not-prose">
                <Tag label="ReactJS" custom="bg-blue-800" />
                <Tag label="Javascript" custom="bg-indigo-500" />
                <Tag label="HTML/CSS" custom="bg-indigo-500" />
                <Tag label="SolidJS" custom="bg-blue-500" />
                <Tag label="Relay" custom="bg-purple-800" />
                <Tag label="VueJS" custom="bg-purple-700" />
                <Tag label="Graphql" custom="bg-yellow-600" />
                <Tag label="NodeJS" custom="bg-orange-500" />
                <Tag label="ExpressJS" custom="bg-red-800" />
                <Tag label="NestJS" custom="bg-red-700" />
                <Tag label="Lucene/Elasticsearch" custom="bg-orange-800" />
            </div>
            <h4>Languages</h4>
            <div className="not-prose">
                <Tag label="Typescript" custom="bg-blue-800" />
                <Tag label="Javascript" custom="bg-indigo-600" />
                <Tag label="Java" custom="bg-yellow-800" />
                <Tag label="C++" custom="bg-indigo-500" />
                <Tag label="Python" custom="bg-purple-700" />
                <Tag label="Hack/php" custom="bg-indigo-800" />
            </div>
            <h3>Using the newest Technologies excites me</h3>
        </article>
    )
}

function Experience() {
    return (
        <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
            <h1>Experience</h1>
            <p>
                I have extensive experience in the software engineering field
                and have a proven ability in delivering polished products.
            </p>
            <ul>
                <li>
                    <b>Meta</b>, Full Stack Software Engineer (2022-)
                </li>
                <li>
                    <b>Coinhall</b>, Founding Engineer (2021-2022)
                </li>
                <li>
                    <b>Sprinklr</b>, Backend Developer Intern (2021)
                </li>
                <li>
                    <b>Shopee</b>, Backend Developer Intern (2021)
                </li>
                <li>
                    <b>Shopee</b>, Frontend Developer Intern (2020)
                </li>
            </ul>
            <h3>I thrive in Collaborative Environments</h3>
        </article>
    )
}

function Intro() {
    return (
        <article className="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
            <h1>About</h1>
            <p>
                Hello there, my name is Eugene Teu and I am a currently a full
                time Software Engineer based in sunny Singapore 🇸🇬
            </p>
            <p>
                I graduated in 2022 with a Bachelor Of Computing (Computer
                Science) from the National University Of Singapore
            </p>
            <h3>I specialise in Full Stack Web Development</h3>
        </article>
    )
}

function RoundedAvatar() {
    return (
        <div className="w-full flex mt-6">
            <div className="mx-auto ">
                <img
                    className="transition duration-100 transform hover:-translate-y-1 hover:scale-110 ease-in-out object-cover p-1 w-32 h-32 rounded-full ring-2 dark:ring-gray-700"
                    src="/profile-2.jpg"
                />
            </div>
        </div>
    )
}
