import React, { useEffect } from 'react' 
import '../styles/Preloader.css'
import {preLoaderAnim} from '../animation/index'
const Preloader = () => {
    useEffect(()=>{
preLoaderAnim()
    },[]);
        return (
               <div className="preloader">
                <div className="texts-container">
                    <span>Find, </span>
                    <span>Utilize,</span>
                    <span>Unleash</span>
                </div>
               </div>
              

        );
        }

export default Preloader;