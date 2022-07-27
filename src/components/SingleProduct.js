import React, { useEffect } from 'react';
import './styles.css';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { CartContext } from '../context/Context';
export default function SingleProduct({ prod }) {
	const {
		state: { cart },
		dispatch,
	} = CartContext();

	return (
		<div className="products">
			<Card>
				<Card.Img variant="top" src={prod.image} />
				<Card.Body>
					<Card.Title>{prod.name}</Card.Title>
					<Card.Subtitle style={{ paddingBottom: 10 }}>
						<span>${prod.price}</span>
						{prod.fastDelivery ? (
							<div>Fast Delivery</div>
						) : (
							<div>4 days delivery</div>
						)}
						<Rating rating={prod.ratings} />
					</Card.Subtitle>
					{cart.some((c) => c.id === prod.id) ? (
						<Button
							onClick={() => {
								dispatch({ type: 'REMOVE', payload: prod.id });
							}}
							variant="danger"
						>
							Remove from cart
						</Button>
					) : (
						<Button
							onClick={() => {
								dispatch({ type: 'ADD_CART', payload: prod });
							}}
							variant="primary"
							disabled={!prod.instock}
						>
							{!prod.instock ? 'Out of stock' : 'Add to Cart'}
						</Button>
					)}
				</Card.Body>
			</Card>
		</div>
	);
}
