import { ADD_TASK, TOGGLE_TASK_STATUS, DELETE_TASK } from "./ActionType";

export const addTask = (description) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Math.random(),
      description,
      isDone: false,
    },
  };
};

export const toggleTaskStatus = (id) => {
  return {
    type: TOGGLE_TASK_STATUS,
    payload: { id },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: { id },
  };
};
