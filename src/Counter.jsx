import React, { useState } from 'react';

import './Counter.css';


export const Counter = () => {
    const [contador,setContador] = useState(0)
    
    const handleDis = () => {
        setContador(contador - 1);
    }

    const handleAdd = () => {
        setContador(contador + 1);
    }

    const handleRes = () => {
        setContador(0);
    }

    return (
        <>
            <h2>Aplicación</h2>
            <p>{ contador }</p>
            <button onClick={handleDis}>-1</button>
            <button onClick={handleRes}>Res</button>
            <button onClick={handleAdd}>+1</button>
        </>
    )
}
