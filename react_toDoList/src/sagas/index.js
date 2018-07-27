import { fork } from 'redux-saga/effects';
import todoSaga from './todo.saga';
import categorySaga from './category.saga';

export default function* rootSaga() {
  yield [fork(todoSaga), fork(categorySaga)];
}
