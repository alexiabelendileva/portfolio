import './ScrollUp.css'
import { useState,useEffect } from 'react'
import { BiUpArrow } from "react-icons/bi";


function ScrollUp(){
    const [scrollUp, setScrollUp] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>300){
                setScrollUp(true)
            }else{
                setScrollUp(false)
            }
        })
    },[])


    const goUp = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }
    return(
        <div className='up-button'>
            {
                scrollUp && (
                    <button className='arrow' onClick={goUp}><BiUpArrow/></button>
                )
            }
        </div>
    )
}



export default ScrollUp;