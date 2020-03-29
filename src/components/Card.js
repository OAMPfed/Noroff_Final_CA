import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, image, id} = props;

    return(
    <div className="card">
        <img src={image ? image : 'https://via.placeholder.com/223x310'} alt={'The Magic the Gathering card: ' + name}
        className="card__image" />
        <p className="card__name">{name}</p>
        <Link to={'/card/' + id}>
            <p className="card__link">Read More</p>
        </Link>
    </div>
    )
};

export default Card;