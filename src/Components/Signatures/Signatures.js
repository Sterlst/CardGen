import React from 'react';

import './Signatures.css';

const Signatures = (props) => {
    const { occassion, relationship, dummySignatures } = props || {};
    
    let filteredSignatures = dummySignatures.filter((signature)=>filterSignatures(occassion, relationship, signature));
    let randomSignatures = [];

    if (filteredSignatures.length > 5) {
        console.log(filteredSignatures)
        randomSignatures = filteredSignatures.sort(() => .5 - Math.random()).slice(0,6);
    }


    return (
        <div className='signatures'>
            <div className='signature-container-1'>
                <p className='signature-1'>{randomSignatures.length > 5 ? randomSignatures[0].signature : ''}</p>
                <p className='signature-2'>{randomSignatures.length > 5 ? randomSignatures[1].signature : ''}</p>
                <p className='signature-3'>{randomSignatures.length > 5 ? randomSignatures[2].signature : ''}</p>
            </div>
            <div className='signature-container-2'>
                <p className='signature-4'>{randomSignatures.length > 5 ? randomSignatures[3].signature : ''}</p>
                <p className='signature-5'>{randomSignatures.length > 5 ? randomSignatures[4].signature : ''}</p>
                <p className='signature-6'>{randomSignatures.length > 5 ? randomSignatures[5].signature : ''}</p>
            </div>
        </div>

    );
}

const filterSignatures = (occassion, relationship, signature) => {
    return signature.occassion === occassion && signature.relationship === relationship;
};

export default Signatures;