import { SagaIterator } from 'redux-saga';
import { fetchEvents, fetchEventsProcess } from 'src/redux/actions/events';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { api } from 'src/redux/api';

export function* fetchEventsWorker(): SagaIterator {
  try {
    yield put(fetchEventsProcess.started());
    const result = yield call(api.fetchEvents);
    yield put(fetchEventsProcess.done({ result }));
  } catch (error) {
    yield put(fetchEventsProcess.failed(error));
  }
}

export function* eventsSaga(): SagaIterator {
  yield all([takeEvery(fetchEvents, fetchEventsWorker)]);
}
