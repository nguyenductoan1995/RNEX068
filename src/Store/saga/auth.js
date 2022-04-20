import { put, takeEvery } from '@redux-saga/core/effects'
import { API } from 'Config'
import { Loading } from 'Page/Global'
import { request } from 'utilities/function/Request'
import { GET_ME, SIGN_IN } from 'Store/actions/auth'

function* signIn(action) {
  const { payload } = action
  Loading.show()
  const result = yield request({
    method: 'post',
    url: API.AUTH.SIGN_IN,
    params: payload,
    success: SIGN_IN.SUCCESS,
    failure: SIGN_IN.FAILURE,
  })
  yield put(result)
  // if (get(result, 'type') === SIGN_IN.SUCCESS.type) {
  //   // yield put(CREATE_CART.REQUEST());
  //   // yield put(GET_OPTIONS.REQUEST());
  //   // yield put(GET_ME.REQUEST({ login: true }))
  // }
  Loading.hide()
}

function* getMe(action) {
  const { payload } = action
  Loading.show()
  const result = yield request({
    method: 'get',
    url: API.AUTH.GET_ME,
    params: payload,
    success: GET_ME.SUCCESS,
    failure: GET_ME.FAILURE,
  })
  yield put(result)
  Loading.hide()
}

export default function* watchAuth() {
  yield takeEvery(SIGN_IN.REQUEST.type, signIn)
  yield takeEvery(GET_ME.REQUEST.type, getMe)
}
