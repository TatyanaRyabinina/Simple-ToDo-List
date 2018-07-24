import {
  ADD_TASK,
  REQUEST_ADD_TASK_FAILED,
  REQUEST_ADD_TASK_SUCCESS,
  DELETE_TASK,
  REQUEST_DELETE_TASK_FAILED,
  REQUEST_DELETE_TASK_SUCCESS,
  COMPLETE_TASK,
  REQUEST_COMPLETE_TASK_SUCCESS,
  REQUEST_COMPLETE_TASK_FAILED,
  GET_TASK,
  REQUEST_GET_TASK_SUCCESS,
  REQUEST_GET_TASK_FAILED
} from '../constants/actionTypes';

export const getTask = () => {
  return {
    type: GET_TASK
  };
};

export const requestGetTaskSuccess = task => {
  return {
    type: REQUEST_GET_TASK_SUCCESS,
    task
  };
};

export const requestGetTaskFailed = () => {
  return {
    type: REQUEST_GET_TASK_FAILED
  };
};

export const addTask = task => {
  return {
    type: ADD_TASK,
    task: {
      name: task.newToDo,
      done: true
    }
  };
};

export const requestAddTaskSuccess = task => {
  return {
    type: REQUEST_ADD_TASK_SUCCESS,
    task: task
  };
};

export const requestAddTaskFailed = task => {
  return {
    type: REQUEST_ADD_TASK_FAILED
  };
};

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    task
  };
};

export const requestDeleteTaskSuccess = task => {
  return {
    type: REQUEST_DELETE_TASK_SUCCESS,
    task: task
  };
};

export const requestDeleteTaskFailed = task => {
  return {
    type: REQUEST_DELETE_TASK_FAILED
  };
};

export const completeTask = task => {
  return {
    type: COMPLETE_TASK,
    task
  };
};

export const requestCompleteTaskSuccess = task => {
  return {
    type: REQUEST_COMPLETE_TASK_SUCCESS,
    task: task
  };
};

export const requestCompleteTaskFailed = task => {
  return {
    type: REQUEST_COMPLETE_TASK_FAILED
  };
};