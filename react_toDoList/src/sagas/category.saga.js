import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { reset } from 'redux-form';

import { CATEGORY_FORM } from '../constants/forms';
import { CATEGORY_URL } from '../constants/urls';
import api from '../services/api';
import {
  requestGetCategorySuccess,
  requestCategoryFailed,
  requestAddCategorySuccess,
  requestDeleteCategorySuccess,
  requestGetCurrentCategorySuccess
} from '../actions/category.actions';
import { requestDeleteToDoInCategory } from '../actions/todo.actions';
import {
  GET_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  GET_CURRENT_CATEGORY
} from '../constants/category.constants';

function* getCategories() {
  try {
    const data = yield call(api.get, CATEGORY_URL);
    yield put(requestGetCategorySuccess(data));
  } catch (error) {
    yield put(requestCategoryFailed(error));
  }
}

function* getCurrentCategory(action) {
  try {
    const data = yield call(api.get, `${CATEGORY_URL}/${action.categoryId}`);
    yield put(requestGetCurrentCategorySuccess(data));
  } catch (error) {
    yield put(requestCategoryFailed(error));
  }
}

function* addCategory(action) {
  try {
    const data = yield call(api.post, CATEGORY_URL, {
      body: action.category
    });
    yield put(requestAddCategorySuccess(data));
    yield put(reset(CATEGORY_FORM));
  } catch (error) {
    yield put(requestCategoryFailed(error));
  }
}

function* deleteCategory(action) {
  try {
    const data = yield call(
      api.delete,
      `${CATEGORY_URL}/${action.category.id}`
    );
    yield put(requestDeleteCategorySuccess(data));
    yield put(requestDeleteToDoInCategory(data));
  } catch (error) {
    yield put(requestCategoryFailed(error));
  }
}

export default function* todoSaga() {
  yield* [
    takeEvery(GET_CATEGORY, getCategories),
    takeEvery(GET_CURRENT_CATEGORY, getCurrentCategory),
    takeEvery(ADD_CATEGORY, addCategory),
    takeEvery(DELETE_CATEGORY, deleteCategory)
  ];
}
