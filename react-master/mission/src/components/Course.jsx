// [문제의 코드] src/App.jsx - 모든 로직이 한 곳에 섞여 있어 관리가 불가능함
import React, { useReducer } from "react";
import {
	decrementAction,
	incrementAction,
	removeAction,
} from "../store/course/courseActions";
import {
	courseInitialState,
	courseReducer,
} from "../store/course/courseReducer";

export default function Course() {
	const [state, dispatch] = useReducer(courseReducer, courseInitialState);
	const totalCourse = state.items.reduce((acc, cur) => acc + cur.quantity, 0);
	const totalPrice = state.items.reduce(
		(acc, cur) => acc + cur.price * cur.quantity,
		0,
	);
	console.log(state);
	return (
		<div style={{ padding: "20px", textAlign: "center" }}>
			<h1>🎓 GEMINI ACADEMY 수강 바구니 </h1>
			<ul>
				{state.items.map((item) => (
					<li key={item.id}>
						<p>{item.name}</p>
						<div>
							<button
								onClick={() => dispatch(incrementAction(item.id))}
								type="button"
							>
								+
							</button>
							<span>{item.quantity}</span>
							<button
								onClick={() => dispatch(decrementAction(item.id))}
								type="button"
							>
								-
							</button>
						</div>
						<button
							type="button"
							onClick={() => dispatch(removeAction(item.id))}
						>
							삭제
						</button>
					</li>
				))}
			</ul>
			<div>총 강의수: {totalCourse}개</div>
			<div>최종 결제 금액: {totalPrice}원</div>
		</div>
	);
}
