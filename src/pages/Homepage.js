import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { CORS, MAGIC_API } from '../constants/constants';

const Homepage = props => {
    const [cardResult, setCardResult] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        axios.get(CORS + MAGIC_API)
            .then(result => {
                setCardResult(result.data.cards)
            })
            .catch((error) => {
                console.log(error);
                setSearchParam('');
            })
    }, []);

    const searchAPI = () => {
        console.log('clicked');
        axios.get(CORS + MAGIC_API + '/?name=' + searchParam)
            .then(result => {
                setCardResult(result.data.cards)
            })
            .catch((error) => {
                console.log(error);
                setSearchParam('');
            })
    }

    const cards = cardResult.map((card, index) => {
        return (
            <Card   key={index}
                    image={card.imageUrl}
                    name={card.name}
                    id={card.id}/>
        )
    })

    return (
        <div className="[ homepage ]">
            <div className="[ homepage__hero ]">
                <h1 className="[ homepage__hero--title ]">Magic The Gathering</h1>
                <p className="[ homepage__hero--intro ]">On this page you can search and read up on your favourite Magic the Gathering cards!</p>
                <ul className="[ homepage__hero--use ]">
                    How it works:
                    <li>Click the card you want to read more about, or</li>
                    <li>Fill in the search below and click the button to find your favourite card!</li>
                </ul>
            </div>
            <div className="[ homepage__search ]">
                <input type="text"
                    placeholder="Search.."
                    onChange={(e => setSearchParam(e.target.value))}></input>
                <button onClick={searchAPI}>SEARCH</button>
            </div>
            <div className="[ homepage__cards ]">
                {cardResult.length >= 1 ? cards : null}
            </div>
        </div>
    );
}

export default Homepage;