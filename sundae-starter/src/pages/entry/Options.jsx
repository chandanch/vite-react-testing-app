import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';

function Options({ optionType }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => console.log(error));
	}, [optionType]);

	let itemOptions = '';

	if (optionType === 'scoops') {
		itemOptions = items.map((item) => <ScoopOption key={item.name} />);
	}

	return <div> {itemOptions} </div>;
}

export default Options;
