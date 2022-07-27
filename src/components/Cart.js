import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/Context';
import { Row, Button, ListGroup, Col, Form } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
export default function Cart() {
	const {
		state: { cart },
		dispatch,
	} = CartContext();

	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(
			cart.reduce((acc, curr) => {
				return acc + Number(curr.price) * Number(curr.qty);
			}, 0),
		);
	}, [cart]);
	return (
		<div className="cont container-fluid">
			<div className="productcont">
				<ListGroup>
					{cart.map(
						({ image, name, ratings, price, id, qty, instock }) => {
							return (
								<ListGroup.Item key={id}>
									<Row>
										<span md={2}>
											<img
												className="cart_image"
												src={image}
												alt=""
												fluid
												rounded
											/>
										</span>

										<Col md={2} className="cart_image fw-500 fs-1">
											{name}
										</Col>
										<Col md={2}>
											<Rating rating={ratings} />
										</Col>
										<Col md={2}>
											<AiFillDelete
												style={{ cursor: 'pointer' }}
												onClick={() =>
													dispatch({ type: 'REMOVE', payload: id })
												}
											/>
										</Col>
										<Col md={2}>
											<Form.Control
												onChange={(e) => {
													dispatch({
														type: 'CHANGE_QTY',
														payload: { id: id, qty: e.target.value },
													});
												}}
												as="select"
												value={qty}
											>
												{[...Array(instock).keys()].map((x) => (
													<option key={x + 1}>{x + 1}</option>
												))}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>
							);
						},
					)}
				</ListGroup>
			</div>
			<div className="filter_summary">
				<span className="title">Subtotal ({cart.length}) items</span>
				<span
					style={{ fontWeight: 700, fontSize: 20, marginTop: 20 }}
				>
					Total ${total}
				</span>

				<Button
					style={{ marginTop: 20 }}
					type="button"
					disabled={cart.length === 0}
				>
					Proceed to Checkout
				</Button>
			</div>
		</div>
	);
}
