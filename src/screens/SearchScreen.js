import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [restaurants, setResults] = useState([]);

	const searchApi = async () => {
		const response = await yelp.get('/search', {
			params: {
				limit: 50,
				term: term,
				location: 'chicago'
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View>
			<SearchBar 
				term={term} 
				onTermChange={setTerm} 
				onTermSubmit={searchApi} 
			/>
			<Text>Search Screen</Text>
			<Text>We have found {restaurants.length} results</Text>
		</View>
	);
	
};

const styles = StyleSheet.create({});

export default SearchScreen;