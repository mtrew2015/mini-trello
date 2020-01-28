import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import AddCard from './Components/AddCard/AddCard';
import EditCard from './Components/EditCard/EditCard';

function App() {
	const [ cards, setCards ] = useState([]);
	useEffect(() => {
		axios
			.get('https://mini-trello.mtrew.now.sh/api/data')
			.then((res) => setCards(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact>
					<LandingPage cards={cards} setCards={setCards} />
				</Route>
				<Route path='/add'>
					<AddCard cards={cards} setCards={setCards} />
				</Route>
				<Route path='/cards/:id'>
					<EditCard cards={cards} setCards={setCards} />
				</Route>
				<Route>
					<h1>Oops Something Went Wrong (we are working on it)</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
