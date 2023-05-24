import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [
		{
			name: 'Jarritos Lemon',
			description: 'Lemon flavored soda (370ml).',
			price: '5.59',
			img: 'beb4.webp',
			id: 'beb4',
		},
		{
			name: 'Heineken',
			description: '330ml bottle of Heineken.',
			price: '5.99',
			img: 'beb5.webp',
			id: 'beb5',
		},
	],
	totalItems: 0,
	totalAmount: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			const itemAlreadyExistsInList = state.items.find(
				item => item.id === action.payload.id
			);
			state.totalItems += action.payload.quantity;
			state.totalValue +=
				Number(action.payload.price) * action.payload.quantity;

			if (itemAlreadyExistsInList) {
				itemAlreadyExistsInList.quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
		},

		addOneItemToCart(state, action) {
			const itemAlreadyExistsInList = state.items.find(
				item => item.id === action.payload
			);
			state.totalItems++;
			itemAlreadyExistsInList.quantity++;
			state.totalValue += Number(itemAlreadyExistsInList.price);
		},

		removeOneItemFromCart(state, action) {
			const id = action.payload;
			const itemAlreadyExistsInList = state.items.find(item => item.id === id);
			state.totalItems--;
			itemAlreadyExistsInList.quantity--;
			state.totalValue -= Number(itemAlreadyExistsInList.price);

			if (itemAlreadyExistsInList.quantity === 0) {
				state.items = state.items.filter(item => item.id !== id);
			}
		},

		removeAll(state) {
			state.items = [];
			state.totalItems = 0;
			state.totalAmount = 0;
		},
	},
});

export const {
	addItemToCart,
	addOneItemToCart,
	removeOneItemToCart,
	removeAll,
} = cartSlice.actions;
