import React from 'react';
import {
	Navbar,
	Container,
	FormControl,
	Badge,
	Nav,
	Dropdown,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

import Cart from './Cart';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/Context';
export default function Header() {
	const {
		state: { cart },
		dispatch,
		setQuery,
	} = CartContext();
	const location = useLocation();
	return (
		<Navbar bg="dark" variant="variant" style={{ height: 80 }}>
			<Container>
				<Navbar.Brand>
					<Link to="/">MusicShopping</Link>
				</Navbar.Brand>
				<Navbar.Text className="search">
					<FormControl
						style={{ width: '500' }}
						placeholder="Search a product"
						className="m-auto"
						onChange={(e) => {
							setQuery({ type: 'SEARCH', payload: e.target.value });
						}}
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown sx={{ alignItems: 'right' }}>
						<Dropdown.Toggle>
							{' '}
							<FaShoppingCart color="white" fontSize="25px" />
							<Badge>{cart.length}</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu style={{ minWidth: 370 }}>
							{cart.length > 0 ? (
								cart.map(({ id, name, price, image }) => {
									return (
										<li
											className="d-flex justify-content-around align-items-center py-2"
											key={id}
										>
											<span>
												{' '}
												<img
													src={image}
													className="image"
													alt={name}
												/>
											</span>

											<span>{name}</span>
											<span>{price}</span>

											<AiFillDelete
												style={{
													color: 'red !important',
													cursor: 'pointer',
												}}
												onClick={() =>
													dispatch({ type: 'REMOVE', payload: id })
												}
											/>
										</li>
									);
								})
							) : (
								<span style={{ padding: 10 }}>Cart is Empty</span>
							)}{' '}
							{cart.length > 0 ? (
								location.pathname === '/' ? (
									<Link
										to="/cart"
										style={{ width: '95%', margin: '0 10px' }}
										className="btn btn-primary"
									>
										Go to Cart
									</Link>
								) : (
									<Link
										to="/"
										style={{ width: '95%', margin: '0 10px' }}
										className="btn btn-primary"
									>
										Go back to Homepage
									</Link>
								)
							) : (
								''
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
}
