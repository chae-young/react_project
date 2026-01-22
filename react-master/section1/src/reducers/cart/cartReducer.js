export function cartReducer(state, action) {
	if (action.type === "add") {
		return [...state, action.item];
	}
	if (action.type === "remove") {
		return state.filter((p) => p.id !== action.id);
	}
	if (action.type === "increment") {
		// map을 사용해 전체를 순회하며 id가 같은 상품의 수량만 1 증가시킵니다.
		return state.map((p) =>
			p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p,
		);
	}
	if (action.type === "decrement") {
		return state.map((p) =>
			p.id === action.id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p,
		);
	}

	return state;
}
