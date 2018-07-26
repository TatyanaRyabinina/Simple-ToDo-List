import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { reset } from 'redux-form';

import { TODO_FORM } from '../constants/forms';
import { TODO_URL } from '../constants/urls';
import api from '../services/api';
import {
  requestGetToDoSuccess,
  requestToDoFailed,
  requestAddToDoSuccess,
  requestDeleteToDoSuccess,
  requestCompleteToDoSuccess
} from '../actions/todo.actions';
import {
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from '../constants/todo.constants.actionTypes';

function* getToDos() {
  try {
    const data = yield call(api.get, TODO_URL);
    yield put(requestGetToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* addToDos(action) {
  try {
    const data = yield call(api.post, TODO_URL, {
      body: action.todo
    });
    yield put(requestAddToDoSuccess(data));
    yield put(reset(TODO_FORM));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* deleteToDos(action) {
  try {
    const data = yield call(api.delete, `${TODO_URL}/${action.todo.id}`);
    yield put(requestDeleteToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* completeToDos(action) {
  try {
    const data = yield call(api.put, `${TODO_URL}/${action.todo.id}`, {
      body: {
        done: !action.todo.done
      }
    });
    yield put(requestCompleteToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

export default function* todoSaga() {
  yield* [
    takeEvery(GET_TODO, getToDos),
    takeEvery(ADD_TODO, addToDos),
    takeEvery(DELETE_TODO, deleteToDos),
    takeEvery(COMPLETE_TODO, completeToDos)
  ];
}
