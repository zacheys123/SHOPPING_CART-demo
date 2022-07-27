export default (state = {}, action) => {
	switch (action.type) {
		case 'SORT_PRICE':
			return {
				...state,
				sort: action.payload,
			};
		case 'FILTER_STOCK':
			return {
				...state,
				bystock: !state.bystock,
			};
		case 'FILTER_DELIVERY':
			return {
				...state,
				byfastdelivery: !state.byfastdelivery,
			};

		case 'SEARCH':
			return {
				...state,
				searchQuery: action.payload,
			};
		case 'RATING':
			return {
				...state,
				byrating: action.payload,
			};
		case 'CLEAR':
			return {
				bystock: false,
				byfastdelivery: false,
				byrating: 0,
				searchQuery: '',
			};
			break;

		default:
			return state;
	}
};
