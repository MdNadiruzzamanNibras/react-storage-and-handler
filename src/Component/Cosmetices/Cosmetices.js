import React, { useEffect, useState } from 'react';
import Cosmaic from '../Cosmatic/Cosmaic';
import { getTotal } from '../utiltits/calculator';

const Cosmetices = () => {
    const [cosmetics, setCosmetics]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    const total =getTotal(cosmetics)
    return (
        <div>

            <h2>Cosmetices</h2>
            <h3>Money need:{total}</h3>
            {
                cosmetics.map(cosmetic=> <Cosmaic key={cosmetic.id} 
                cosmetic={cosmetic}></Cosmaic>)
            }
        </div>
    );
};

export default Cosmetices;