import React from 'react';
import { add } from '../utiltits/calculator';


const Shoes = () => {
    const first = 34;
    const second = 32;
    const sum = add(first, second)
    return (
        
        <div>
            <h3>This shoes</h3>
            <p>sum:{sum}</p>
        </div>
    );
};

export default Shoes;