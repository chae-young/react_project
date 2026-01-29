export default function TaskItem({
	taskValue,
	onChangeTaskValue,
	onClickAddTask,
}) {
	return (
		<div>
			<input
				type="text"
				placeholder="Task를 입력해주세요"
				value={taskValue}
				onChange={onChangeTaskValue}
			/>
			<button type="button" onClick={onClickAddTask}>
				추가하기
			</button>
		</div>
	);
}
