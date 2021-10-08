import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function Clock() {
    // const [timeString, setTimeString] = useState('')
    // function formatDate(date){
    //     if(!date) return
    //     // const date = new Date()
    //     const hours = `0${date.getHours()}`.slice(-2)
    //     const minutes = `0${date.getMinutes()}`.slice(-2)
    //     const seconds = `0${date.getSeconds()}`.slice(-2)

    //     return `${hours}:${minutes}:${seconds}`

    // }

    // useEffect(()=>{
    //     const clockInterval =setInterval(()=>{
    //         const now = new Date()
    //         const newTimeString = formatDate(now)

    //         setTimeString(newTimeString)
    //     },1000)

    //     return()=>{
    //         //cleanup
    //         console.log('clock clean up')
    //         clearInterval(clockInterval)
    //     }
    // },[])

    const{timeString} = useClock()

    return (
        <div>
            <p style={{fontSize:'42px'}}>{timeString}</p>
        </div>
    );
}

export default Clock;