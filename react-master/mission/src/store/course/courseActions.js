import * as types from "./courseTypes";

export const incrementAction = (id) => ({
	type: types.INCREMENT,
	id,
});
export const decrementAction = (id) => ({
	type: types.DECREMENT,
	id,
});
export const removeAction = (id) => ({
	type: types.REMOVE,
	id,
});
