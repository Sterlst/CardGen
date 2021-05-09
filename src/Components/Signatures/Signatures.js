import React from 'react';

import './Signatures.css';

const Signatures = (props) => {
    const { occassion, relationship, easybaseData } = props || {};
    
    let filteredSignatures = easybaseData.filter((signature)=>filterSignatures(occassion, relationship, signature));
    let randomSignatures = [];

    if (filteredSignatures.length > 5) {
        randomSignatures = filteredSignatures.sort(() => .5 - Math.random()).slice(0,6);
    }


    return (
        <>
            <p className='signature-default signature-1'>{randomSignatures.length > 5 ? randomSignatures[0].signature : ''}</p>
            <p className='signature-default signature-2'>{randomSignatures.length > 5 ? randomSignatures[1].signature : ''}</p>
            <p className='signature-default signature-3'>{randomSignatures.length > 5 ? randomSignatures[2].signature : ''}</p>

            <p className='signature-default signature-4'>{randomSignatures.length > 5 ? randomSignatures[3].signature : ''}</p>
            <p className='signature-default signature-5'>{randomSignatures.length > 5 ? randomSignatures[4].signature : ''}</p>
            <p className='signature-default signature-6'>{randomSignatures.length > 5 ? randomSignatures[5].signature : ''}</p>
        </>

    );
}

const filterSignatures = (occassion, relationship, signature) => {
    return signature.occassion === occassion && signature.relationship === relationship;
};

export default Signatures;