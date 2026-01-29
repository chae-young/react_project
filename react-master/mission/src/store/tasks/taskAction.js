import * as types from "./taskTypes";

export const addTaskAction = (task) => ({
	type: types.ADD_TASK,
	task,
});
export const toggleTaskAction = (id) => ({
	type: types.TOGGLE_TASK,
	id,
});
export const updatePriorityAction = ({ id, priority }) => ({
	type: types.UPDATE_PRIORITY,
	payload: { id, priority },
});
export const removeTaskAction = (id) => ({
	type: types.DELETE_TASK,
	id,
});
