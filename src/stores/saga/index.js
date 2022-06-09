import { all, call, spawn } from 'redux-saga/effects'

import auth from './auth'

export default function* sagas() {
  const sagasL = [auth]

  yield all(
    sagasL.map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          // console.log(e);
        }
      }
    }),
    ),
  )
}
