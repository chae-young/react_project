export function CartItem({ item, onIncrement, onDecrement, onRemove }) {
	return (
		<div
			style={{
				marginBottom: "12px",
				padding: "10px",
				border: "1px solid #eee",
				borderRadius: "8px",
			}}
		>
			<p style={{ fontWeight: "bold" }}>
				{item.name} - {item.price.toLocaleString()}원
			</p>
			<p>수량: {item.quantity}</p>

			{/* 버튼 클릭 시 부모가 내려준 '통신기'를 작동시킵니다. */}
			<button type="button" onClick={onIncrement}>
				+
			</button>
			<button type="button" onClick={onDecrement} style={{ margin: "0 5px" }}>
				-
			</button>
			<button type="button" onClick={onRemove} style={{ color: "red" }}>
				삭제
			</button>
		</div>
	);
}
