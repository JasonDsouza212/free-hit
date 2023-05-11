import React, { useEffect, useState } from 'react'
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
        <Link onClick={handleScroll} to="Top" smooth duration={500}>
            <div className={` ${!btnVisiblity ? "transition-before" : "transition-after"} backToTopButton`}>
                <i className="ri-arrow-up-s-line"></i>
            </div>
        </Link>
    )
}

export default BackToTopButton;
