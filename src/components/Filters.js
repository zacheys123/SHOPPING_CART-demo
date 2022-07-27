import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/Context';
import Rating from './Rating';
export default function Filters() {
	const {
		query: { bystock, sort, byfastdelivery, byrating },
		setQuery,
	} = CartContext();

	return (
		<div className="filters">
			<span className="title">Filter Products</span>
			<span>
				{' '}
				<Form.Check
					inline
					label="Ascending"
					name="group1"
					type="radio"
					id={`inline-1`}
					onChange={() => {
						setQuery({ type: 'SORT_PRICE', payload: 'lowtohigh' });
					}}
					checked={sort === 'lowtohigh' ? true : false}
				/>{' '}
			</span>
			<span>
				<Form.Check
					inline
					label="Descending"
					name="group1"
					type="radio"
					id={`inline-2`}
					onChange={() => {
						setQuery({ type: 'SORT_PRICE', payload: 'hightolow' });
					}}
					checked={sort === 'hightolow' ? true : false}
				/>{' '}
			</span>
			<span>
				<Form.Check
					inline
					label="Include out of stock"
					name="group1"
					type="checkbox"
					id={`inline-3`}
					onChange={() => {
						setQuery({ type: 'FILTER_STOCK' });
					}}
					checked={bystock}
				/>{' '}
			</span>
			<span>
				<Form.Check
					inline
					label="Fast Delivery Only"
					name="group1"
					type="checkbox"
					id={`inline-4`}
					onChange={() => {
						setQuery({ type: 'FILTER_DELIVERY' });
					}}
					checked={byfastdelivery}
				/>{' '}
			</span>
			<span>
				<label style={{ paddingRight: 10 }}>Rating</label>
				<Rating
					rating={byrating}
					onClick={(i) =>
						setQuery({ type: 'RATING', payload: i + 1 })
					}
					style={{ cursor: 'pointer' }}
				/>
			</span>
			<Button
				onClick={() => setQuery({ type: 'CLEAR' })}
				variant="light"
			>
				Clear Filters
			</Button>
		</div>
	);
}
