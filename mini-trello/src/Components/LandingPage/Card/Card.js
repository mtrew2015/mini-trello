import React from 'react'
import './Card.scss';
import {Link} from 'react-router-dom';

 function Card({card}) {
    return (
        <Link to={`/cards/${card.id}`}  className="card">
        <div>
            <p>{card.name}</p>
        </div>
        </Link>
    )
}

export default Card