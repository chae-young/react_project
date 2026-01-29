export default function TaskStatus({ tasks }) {
	const total = tasks.length;
	const completedCount = tasks.filter((task) => Boolean(task.status)).length;
	const inProgressCount = total - completedCount;
	return (
		<ul>
			<li>전체 : {total}</li>
			<li>진행중 : {inProgressCount}</li>
			<li>완료됨 : {completedCount}</li>
		</ul>
	);
}
