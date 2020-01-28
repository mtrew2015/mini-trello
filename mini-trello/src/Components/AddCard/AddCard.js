import React, { useState } from 'react';
import './AddCard.scss';
import {useHistory} from 'react-router-dom';

function AddCard(props) {
    const history = useHistory();
    const {cards, setCards} = props;
    const [ input, setInput ] = useState('');
    const [cat, setCat] = useState('Backlog');

    console.log(cards, 'cards from addcard')
    
    const submitHandler = e => {
        e.preventDefault()
        const post = {
            id: Math.random(),
            name: input, 
            category: cat, 
        }
        setCards([...cards, post])
        history.push('/')
        // axios.post('www.mini-trello.com/api/add', post)
        // .then(res => setCards(res.data))
        // .catch(err => console.log(err))
}
	return (
		<div>
			<form onSubmit={(e) => submitHandler(e)}>
				<input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Task...' />
				<select value={cat} onChange={(e) => setCat(e.target.value)} name='category'>
					<option value='Backlog'>Backlog</option>
					<option value='In Progress'>In Progress</option>
					<option value='Completed'>Completed</option>
                </select>
                <button>Add Card</button>
            </form>
            
		</div>
	);
}

export default AddCard;


