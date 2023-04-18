import React, { useEffect, useState } from 'react'
import { ArrowUp } from "./Icons"
import { Link } from 'react-scroll'

const BackToTopButton = () => {
    const [btnVisiblity, setBtnVisiblity] = useState(false)
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const toggleVisiblity = () => {
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        }
        window.addEventListener('scroll', toggleVisiblity);
        return () => {
            window.removeEventListener('scroll', toggleVisiblity);
        }
    }, [])


    return (
        <Link onClick={handleScroll} to="App" smooth duration={500} className='' >
            <div className={`transition-before ${btnVisiblity && "transition-after"} backButton`}>
                <ArrowUp />
            </div>
        </Link>
    )
}

export default BackToTopButton;
