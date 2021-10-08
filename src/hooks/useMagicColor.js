import  { useState,useEffect, useRef } from 'react';

function randomColor(currentColor){
    const COLOR_LIST = ['red','pink','yellow']

    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex

    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() *3)
    }
    console.log(COLOR_LIST[newIndex])
    return COLOR_LIST[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent')

    //su dung useRef de luu gia tri
    const colorRef = useRef('transparent')

    //change color every 1 second
    useEffect(() => {

        const colorInterval = setInterval(() =>{
            const newColor = randomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
        },1000)

        return ()=>{
            clearInterval(colorInterval) // cleanInterval
        }


    }, [])

    return color

}

export default useMagicColor;