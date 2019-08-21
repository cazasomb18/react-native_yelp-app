import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ }) => {
	const [term, setTerm] = useState('');
	const [searchApi, restaurants, errorMessage] = useResults();

	const resultsCount = restaurants.length;

	const filterResultsByPrice = (price) => {
		// price ==== '$' || '$$' || '$$$'
		return restaurants.filter(restaurant => {
			return restaurant.price === price;
		});
	};
	return (
		<>
			<SearchBar 
				term={term} 
				onTermChange={setTerm} 
				onTermSubmit={()=> searchApi(term)} 
			/>

			{ errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }

			<ScrollView>
				<ResultsList 
					results={filterResultsByPrice('$')} 
					title='Cost Effective' 
				/>
				<ResultsList 
					results={filterResultsByPrice('$$')} 
					title='Bit Pricier'
				/>
				<ResultsList  
					results={filterResultsByPrice('$$$')} 
					title='Top Spender'
				/>
				<ResultsList  
					results={filterResultsByPrice('$$$$')} 
					title='Big Baller'
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	error: {
		color: 'red',
		marginVertical: 5, 
		marginHorizontal: 15
	}
});

export default SearchScreen;