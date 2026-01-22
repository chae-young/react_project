import * as types from "./cartTypes";

export const initialCartState = {
	items: [],
};

export function cartReducer(state, action) {
	switch (action.type) {
		case types.ADD_ITEM:
			return { ...state, items: [...state.items, action.payload] };
		case types.INCREMENT:
			// 해당 ID의 상품 수량만 1 증가시킨 새 배열을 만듭니다.
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			};
		case types.DECREMENT:
			// 수량을 줄이되, 1보다 클 때만 줄이고 아니면 그대로 유지합니다.
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, quantity: Math.max(1, item.quantity - 1) }
						: item,
				),
			};
		case types.REMOVE_ITEM:
			// filter를 사용하여 해당 ID가 아닌 상품들만 남깁니다.
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};

		default:
			return state;
	}
}
