import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';

import { TODO_URL } from '../constants/urls';
import api from '../services/api';
import {
  requestGetTaskSuccess,
  requestTaskFailed,
  requestAddTaskSuccess,
  requestDeleteTaskSuccess,
  requestCompleteTaskSuccess
} from '../actions/todo.actions';
import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from '../constants/actionTypes';

function* getToDos() {
  try {
    const data = yield call(api.get, TODO_URL);
    yield put(requestGetTaskSuccess(data));
  } catch (error) {
    yield put(requestTaskFailed(error));
  }
}

function* addToDos(action) {
  try {
    const data = yield call(api.post, TODO_URL, {
      body: action.task
    });
    yield put(requestAddTaskSuccess(data));
  } catch (error) {
    yield put(requestTaskFailed(error));
  }
}

function* deleteToDos(action) {
  try {
    const data = yield call(api.delete, `${TODO_URL}/${action.task.id}`);
    yield put(requestDeleteTaskSuccess(data));
  } catch (error) {
    yield put(requestTaskFailed(error));
  }
}

function* completeToDos(action) {
  try {
    const data = yield call(api.put, `${TODO_URL}/${action.task.id}`, {
      body: {
        done: !action.task.done
      }
    });
    yield put(requestCompleteTaskSuccess(data));
  } catch (error) {
    yield put(requestTaskFailed(error));
  }
}

export default function* rootSaga() {
  yield* [
    takeEvery(GET_TASK, getToDos),
    takeEvery(ADD_TASK, addToDos),
    takeEvery(DELETE_TASK, deleteToDos),
    takeEvery(COMPLETE_TASK, completeToDos)
  ];
}
