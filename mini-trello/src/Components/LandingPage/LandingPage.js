import React from 'react';
import './LandingPage.scss';
import Card from './Card/Card';

function LandingPage(props) {
	const {cards } = props;
	return (
		<div className="landing-page">
            <div className='column'>
            <h1>Backlog</h1>
				{cards
					.filter((card) => {
						return card.category === 'Backlog';
					})
					.map((card) => {
						return <Card key={card.id} card={card} />;
					})}
			</div>
            <div className='column'>
            <h1>In Progress</h1>
				{cards
					.filter((card) => {
						return card.category === 'In Progress';
					})
					.map((card) => {
						return <Card  key={card.id} card={card} />;
					})}
			</div>
            <div className='column'>
            <h1>Completed</h1>
				{cards
					.filter((card) => {
						return card.category === 'Completed';
					})
					.map((card) => {
						return <Card key={card.id} card={card} />;
					})}
            </div>
		</div>
	);
}

export default LandingPage;
