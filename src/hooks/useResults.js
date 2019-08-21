import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default = () => {
	const [restaurants, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (seachTerm) => {
		console.log('wtf you wanna eat?!');
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'chicago'
				}
			});
			setResults(response.data.businesses);
		} catch(err) {
			setErrorMessage('Oh no! Something went wrong!')
		}
	};

	//Call searchApi when component is first rendered is BAD CODE

	useEffect(()=>  {
		searchApi('pasta');
	}, []);

	return [searchApi, restaurants, errorMessage];
};