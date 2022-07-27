export const cartReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_CART':
			return {
				...state,
				cart: [...state.cart, { ...action.payload, qty: 1 }],
			};
		case 'REMOVE':
			return {
				...state,
				cart: state.cart.filter((c) => c.id !== action.payload),
			};
		case 'CHANGE_QTY':
			return {
				...state,
				cart: state.cart.filter((c) =>
					c.id === action.payload.id
						? (c.qty = action.payload.qty)
						: c.qty,
				),
			};
		default:
			return state;
	}
};
