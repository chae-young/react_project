import { useReducer } from "react";
import { cartReducer, initialCartState } from "../store/cartReducer";
import * as types from "../store/cartTypes";

// 급식실 제고관리 시스템
export default function ShoppingCart() {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);
	const addItem = () => {
		const newItem = {
			id: Date.now(),
			name: "신선한 사과",
			price: 3000,
			quantity: 1,
		};
		dispatch({ type: types.ADD_ITEM, payload: newItem });
	};

	return (
		<div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
			<h1>🛒 장바구니 미션</h1>
			<button
				type="button"
				onClick={addItem}
				style={{ marginBottom: "20px", width: "100%", padding: "10px" }}
			>
				랜덤 상품 추가하기
			</button>

			{state.items.length === 0 ? (
				<p>장바구니가 비어 있습니다.</p>
			) : (
				<ul style={{ listStyle: "none", padding: 0 }}>
					{state.items.map((item) => (
						<li
							key={item.id}
							style={{
								borderBottom: "1px solid #eee",
								padding: "10px 0",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div>
								<strong>{item.name}</strong>
								<br />
								{item.price.toLocaleString()}원
							</div>
							<div>
								<button
									type="button"
									onClick={() =>
										dispatch({ type: types.DECREMENT, payload: item.id })
									}
								>
									-
								</button>
								<span style={{ margin: "0 10px" }}>{item.quantity}</span>
								<button
									type="button"
									onClick={() =>
										dispatch({ type: types.INCREMENT, payload: item.id })
									}
								>
									+
								</button>
								<button
									type="button"
									onClick={() =>
										dispatch({ type: types.REMOVE_ITEM, payload: item.id })
									}
									style={{ marginLeft: "10px", color: "red" }}
								>
									삭제
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
