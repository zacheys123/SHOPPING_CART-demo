import React, { useEffect } from 'react';
import { CartContext } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
export default function Home() {
	const {
		state: { products },
		query: { bystock, sort, byfastdelivery, byrating, searchQuery },
	} = CartContext();

	const transformProducts = () => {
		let sortedProd = products;

		if (sort) {
			sortedProd = sortedProd.sort((a, b) =>
				sort === 'lowtohigh' ? a.price - b.price : b.price - a.price,
			);
		}
		if (!bystock) {
			sortedProd = sortedProd.filter((prod) => prod.instock);
		}
		if (byfastdelivery) {
			sortedProd = sortedProd.filter((prod) => prod.byfastdelivery);
		}
		if (byrating) {
			sortedProd = sortedProd.filter(
				(prod) => prod.ratings >= byrating,
			);
		}
		if (searchQuery) {
			sortedProd = sortedProd.filter((prod) =>
				prod.name.toLowerCase().includes(searchQuery),
			);
		}
		return sortedProd;
	};
	return (
		<div className="home lg-5">
			<Filters />
			<div className="productContainer">
				{transformProducts().map((prod) => {
					return <SingleProduct prod={prod} key={prod.id} />;
				})}
			</div>
		</div>
	);
}
