import React from 'react';

const customFetch = (products) => {

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export default customFetch;