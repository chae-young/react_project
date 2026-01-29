import React, { useReducer, useState } from "react";
import {
	addTaskAction,
	removeTaskAction,
	toggleTaskAction,
	updatePriorityAction,
} from "../store/tasks/taskAction";
import { initialTaskState, taskReducer } from "../store/tasks/taskReducer";
import * as types from "../store/tasks/taskTypes";
import TaskInput from "./tasks/TaskInput";
import TaskStatus from "./tasks/TaskStatus";

export default function TaskSection() {
	const [taskValue, setTaskValue] = useState("");
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const handleAddTask = () => {
		const newTask = {
			id: Date.now(),
			title: taskValue,
			status: false,
			priority: types.PRIORITY.MEDIUM,
		};
		dispatch(addTaskAction(newTask));
	};

	const handleChangeStatus = (id) => {
		dispatch(toggleTaskAction(id));
	};

	const handleChangePriority = (id, value) => {
		const payload = { id, priority: value };
		dispatch(updatePriorityAction(payload));
	};

	const handleRemoveTask = (id) => {
		dispatch(removeTaskAction(id));
	};

	return (
		<>
			<h1>협업 툴 'Gemini Flow'</h1>
			<TaskStatus tasks={state.tasks} />
			<TaskInput
				taskValue={taskValue}
				onChangeTaskValue={(e) => setTaskValue(e.target.value)}
				onClickAddTask={handleAddTask}
			/>
			<ul>
				{Array.isArray(state.tasks) && state.tasks.length > 0 ? (
					state.tasks.map((task: any, idx: number) => (
						<li
							key={task.id}
							style={{
								textDecoration: task.status ? "line-through" : "auto",
							}}
						>
							{task.title}
							<button type="button" onClick={() => handleChangeStatus(task.id)}>
								{task.status ? "완료" : "미완료"}
							</button>
							<select
								value={task.priority || types.PRIORITY.MEDIUM}
								onChange={(e) => {
									const selectedValue = e.target.value;
									// 이 value가 항상 string이 되도록, 그리고 handleChangePriority가 id와 string priority만 받도록
									handleChangePriority(task.id, selectedValue);
								}}
							>
								<option value={types.PRIORITY.HIGH}>높음</option>
								<option value={types.PRIORITY.MEDIUM}>중간</option>
								<option value={types.PRIORITY.LOW}>낮음</option>
							</select>
							<button type="button" onClick={() => handleRemoveTask(task.id)}>
								삭제
							</button>
						</li>
					))
				) : (
					<li>등록된 task가 없습니다.</li>
				)}
			</ul>
		</>
	);
}
