import { useState } from "react";
import TaskInput from "../../../mission/src/components/tasks/TaskItem";
import { addTaskAction } from "../../../mission/src/store/tasks/taskAction";
import * as types from "../../../mission/src/store/tasks/taskTypes";

export default function TaskPage() {
	const [taskValue, setTaskValue] = useState("");

	const handleAddTask = () => {
		const newTask = {
			id: new Date.now(),
			status: false,
			priority: types.PRIORITY.MEDIUM,
		};
		addTaskAction(newTask);
	};

	return (
		<>
			<h1>협업 툴 'Gemini Flow'</h1>
			<TaskInput
				taskValue={taskValue}
				onChangeTaskValue={(e) => setTaskValue(e.target.value)}
				onClickAddTask={handleAddTask}
			/>
		</>
	);
}
