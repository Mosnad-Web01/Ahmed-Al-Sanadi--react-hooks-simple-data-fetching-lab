// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
	const [dogPic, setDogPic] = useState(null);

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then((response) => response.json())
			.then((data) => {
				setDogPic(data.message);
			});
	}, []);
	if (!dogPic) return <p>Loading...</p>;
	return (
		<div
			style={{
				textAlign: 'center',
				margin: '20px',
				padding: '20px',
				border: '1px solid black',
				borderRadius: '10px',
				
			}}>
			<img
				style={{
					width: '100%',
				}}
				src={dogPic}
				alt="A Random Dog"
			/>
			;
		</div>
	);
}

export default App;
