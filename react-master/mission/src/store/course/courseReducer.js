import * as types from "./courseTypes";

export const courseInitialState = {
	items: [
		{
			id: 1,
			name: "React 마스터 클래스",
			price: 5000,
			quantity: 1,
		},
		{
			id: 2,
			name: "Next.js 실무 가이드",
			price: 15000,
			quantity: 1,
		},
	],
};

export function courseReducer(state, action) {
	switch (action.type) {
		case types.INCREMENT: {
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			};
		}
		case types.DECREMENT: {
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.id
						? { ...item, quantity: Math.max(0, item.quantity - 1) }
						: item,
				),
			};
		}
		case types.REMOVE:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.id),
			};
		default:
			return state;
	}
}
