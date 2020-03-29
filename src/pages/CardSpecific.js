import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CORS, MAGIC_API } from '../constants/constants';

const CardSpecific = props => {
    const [cardResult, setCardResult] = useState('');

    useEffect(() => {
        axios.get(CORS + MAGIC_API + '/?id=' + props.match.params.id)
            .then(result => {
                setCardResult(result.data.cards[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.match.params.id]);


    return (
        <div className="specific">
            {cardResult === '' ? <p className="specific__info--name">LOADING</p> : 
            <>
                <img src={cardResult.imageUrl === undefined ? 'https://via.placeholder.com/223x310' : cardResult.imageUrl} 
                alt={cardResult.name} className="specific__image"/>
                <div className="specific__info">
                    <p className="specific__info--name">{cardResult.name}</p>
                    <p className="specific__info--text"><span>Text:</span> {cardResult.text}</p>
                    <p className="specific__info--rarity"><span>Rarity:</span> {cardResult.rarity}</p>
                    <p className="specific__info--colors"><span>Color:</span> {cardResult.colors.length === 0 ? 'No color' : cardResult.colors}</p>
                </div>
            </>}
        </div>
    );
}

export default CardSpecific;