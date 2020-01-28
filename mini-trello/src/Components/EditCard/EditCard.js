import React, { useEffect, useState } from 'react';
import './EditCard.scss';
import { useParams, useHistory } from 'react-router-dom';

function EditCard(props) {
	const { cards, setCards } = props;
    const { id } = useParams();
    const history = useHistory();
    const [ card, setCard ] = useState({});
    const [cat, setCat] = useState('Backlog');
    const [input, setInput] = useState('')

    console.log(cat, 'category')

	useEffect(() => {
		const card = cards.filter((card) => {
			return card.id === id;
		});
        setCard(card);
	}, [id,cards]);

    if(!card){
        return <h1>...loading</h1>
    }

    const onSubmit = e => {
        e.preventDefault();
        const editedCards = cards.filter(card => {
            return card.id !== id
        })
        console.log(editedCards)
        const card = {
            name: input,
            category: cat, 
            id: id
        }
        console.log(card)
        setCards([...editedCards, card])
        history.push('/')
        
    }
    
        console.log(cards)
	return (
		<form onSubmit={(e) => onSubmit(e)}>
            <textarea onChange={(e) => setInput(e.target.value)}>{card.name}</textarea>
            <select value={cat} onChange={(e) => setCat(e.target.value)} name='category'>
					<option value='Backlog'>Backlog</option>
					<option value='In Progress'>In Progress</option>
					<option value='Completed'>Completed</option>
                </select>
                <button>Add Card</button>
		</form>
	);
}
export default EditCard;
