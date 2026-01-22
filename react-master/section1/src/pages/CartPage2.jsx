import { useReducer } from "react";
import { CartItem } from "../components/CartItem";
import { initialCart } from "../data/cart/initialCart";
import { cartReducer } from "../reducers/cart/cartReducer";

export function CartPage2() {
	const [cart, dispatch] = useReducer(cartReducer, initialCart);

	function handleAdd() {
		const newItem = {
			id: Date.now(),
			name: "새 상품",
			price: 2000,
			quantity: 1,
		};
		dispatch({ type: "add", item: newItem });
	}

	// 2. 삭제/증감 핸들러: 어떤 아이템인지 구분하기 위해 id를 함께 보냅니다(Payload).
	function handleRemove(id) {
		dispatch({ type: "remove", id });
	}

	function handleIncrement(id) {
		dispatch({ type: "increment", id });
	}

	function handleDecrement(id) {
		dispatch({ type: "decrement", id });
	}

	return (
		<div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
			<h2 style={{ textAlign: "center" }}>🛒 My Shopping Cart</h2>
			<button
				type="button"
				onClick={handleAdd}
				style={{
					width: "100%",
					padding: "10px",
					marginBottom: "20px",
					cursor: "pointer",
				}}
			>
				새 상품 추가하기
			</button>

			{cart.map((p) => (
				<CartItem
					key={p.id}
					item={p}
					onIncrement={() => handleIncrement(p.id)}
					onDecrement={() => handleDecrement(p.id)}
					onRemove={() => handleRemove(p.id)}
				/>
			))}

			<div
				style={{ marginTop: "20px", textAlign: "right", fontWeight: "bold" }}
			>
				총 품목 수: {cart.length}개
			</div>
		</div>
	);
}
