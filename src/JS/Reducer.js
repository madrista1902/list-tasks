import { ADD_TASK, TOGGLE_TASK_STATUS, DELETE_TASK } from "./ActionType";

const initialState = {
  tasks: [
    {
      id: 1,
      description: "task1",
      isDone: false
    },
    {
      id: 2,
      description: "task2",
      isDone: true
    },
    {
      id: 3,
      description: "task3",
      isDone: false
    }
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, isDone: !task.isDone };
          }
          return task;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
