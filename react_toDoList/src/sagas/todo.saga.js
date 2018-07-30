import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { reset } from 'redux-form';

import { TODO_FORM } from '../constants/forms';
import { TODO_URL, CATEGORY_URL } from '../constants/urls';
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
} from '../constants/todo.constants';

function* getToDos(action) {
  try {
    const data = yield call(
      api.get,
      `${CATEGORY_URL}/${action.todo.categoryId}/${TODO_URL}`
    );
    yield put(requestGetToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* addToDo(action) {
  try {
    const data = yield call(
      api.post,
      `${CATEGORY_URL}/${action.todo.categoryId}/${TODO_URL}`,
      {
        body: action.todo
      }
    );
    yield put(requestAddToDoSuccess(data));
    yield put(reset(TODO_FORM));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* deleteToDo(action) {
  try {
    const data = yield call(
      api.delete,
      `${CATEGORY_URL}/${action.todo.categoryId}/${TODO_URL}/${action.todo.id}`
    );
    yield put(requestDeleteToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

function* completeToDo(action) {
  try {
    const data = yield call(
      api.put,
      `${CATEGORY_URL}/${action.todo.categoryId}/${TODO_URL}/${action.todo.id}`,
      {
        body: {
          done: !action.todo.done
        }
      }
    );
    yield put(requestCompleteToDoSuccess(data));
  } catch (error) {
    yield put(requestToDoFailed(error));
  }
}

export default function* todoSaga() {
  yield* [
    takeEvery(GET_TODO, getToDos),
    takeEvery(ADD_TODO, addToDo),
    takeEvery(DELETE_TODO, deleteToDo),
    takeEvery(COMPLETE_TODO, completeToDo)
  ];
}
