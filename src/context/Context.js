import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer } from './Reducers';
import queryReducer from './queryReducers';
import {
	randProductName,
	randBoolean,
	rand,
	randImg,
	randUuid,
	seed,
} from '@ngneat/falso';
import { faker } from '@faker-js/faker';
const Cart = createContext();

faker.seed(99);
export default function Context({ children }) {
	const products = [...Array(30)].map(() => ({
		id: randUuid(),
		name: randProductName(),
		price: rand([
			200, 400, 600, 500, 450, 566, 234, 100, 231, 254, 900, 600, 750,
			680,
		]),
		image: faker.image.image(),
		instock: rand([0, 3, 5, 6, 7]),
		fastDelivery: randBoolean(),
		ratings: rand([1, 2, 3, 4, 5]),
	}));

	const [state, dispatch] = useReducer(cartReducer, {
		products,
		cart: [],
	});
	const [query, setQuery] = useReducer(queryReducer, {
		sort: '',
		bystock: false,
		byfastdelivery: false,
		byrating: 0,
		serchQuery: '',
	});

	return (
		<Cart.Provider value={{ state, dispatch, query, setQuery }}>
			{children}
		</Cart.Provider>
	);
}

export const CartContext = () => {
	return useContext(Cart);
};
