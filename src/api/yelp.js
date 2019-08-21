import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 
			'Bearer iFeMtRn8dhR3fCI8RWKTt49Dg8fNM2tLwexk8Rrauy9V853u_c8lwdL6y01UQmCz54ARtGaS5Lz4AIfGdy5yGn88RDf-WzDke7W_zaCRLouIDgOggHUbZz5tUa1cXXYx'
	}
});