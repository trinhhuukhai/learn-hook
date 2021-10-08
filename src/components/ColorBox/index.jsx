import React, { useState } from 'react';
import './ColorBox.scss'


ColorBox.propTypes = {

};

function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5) // lay phan nguyen random 0 -5
    return COLOR_LIST[randomIndex]
}

function ColorBox() {
    
    //cho vao callback around Function chay 1 lan
    const [color, setColor] = useState( () => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        return initColor
    });

    function handlerBoxClick(){
        //get random color - set color
        const newColor = getRandomColor()
        setColor(newColor)

        //luu gia tri thay doi vao localStorage
        localStorage.setItem('box_color', newColor)
    }

    return(
        <div
            className="color-box"
            style={{backgroundColor:color}}
            onClick ={handlerBoxClick}
        >
            COLOR BOX
            
        </div>
    );
}

export default ColorBox