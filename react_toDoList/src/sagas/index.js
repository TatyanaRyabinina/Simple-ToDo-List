import { fork } from 'redux-saga/effects';
import todoSaga from './todo.saga';
import categorySaga from './category.saga';

export default function* rootSaga() {
  //yield put(push('/categories')); // it works as store.dispath(push(path))
  yield [fork(todoSaga), fork(categorySaga)];
}
