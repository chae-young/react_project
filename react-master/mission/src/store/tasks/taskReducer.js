import * as types from "./taskTypes";
export const initialTaskState = {
	tasks: [],
};

export function taskReducer(state, action) {
	switch (action.type) {
		case types.ADD_TASK: {
			// 제목이 공백인경우
			if (!action.task.title) return state;

			return {
				...state,
				tasks: [...state.tasks, action.task],
			};
		}
		case types.TOGGLE_TASK: {
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.id ? { ...task, status: !task.status } : task,
				),
			};
		}
		case types.UPDATE_PRIORITY: {
			console.log(action.payload);
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.id
						? { ...task, priority: action.payload.priority }
						: task,
				),
			};
		}
		case types.DELETE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter((item) => item.id !== action.id),
			};
		}
		default:
			return state;
	}
}
