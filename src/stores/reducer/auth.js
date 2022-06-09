import { createReducer } from '@reduxjs/toolkit'
import { GET_ME, SIGN_IN } from 'stores/actions/auth'
import { setDefaultHeaders } from 'utilities/function/Axios'
import { buildRequestReducer } from 'utilities/function/ReduxReducer'

const INITIAL_STATE = {
  token: null,
  env: null,
  isLogged: false,
  user: {},
  isNewRegister: false,
  cartID: null,
  loading: {
    [SIGN_IN.BASE]: false,
  },
  success: {
    [SIGN_IN.BASE]: false,
  },
}

export default createReducer(INITIAL_STATE, (builder) => {
  buildRequestReducer(builder, SIGN_IN, 'token')
  buildRequestReducer(builder, GET_ME, 'user')

  builder
    // .addCase(SIGN_OUT, (state, action) => {
    //   setDefaultHeaders({Authorization: ''});
    //   state = INITIAL_STATE;
    //   return INITIAL_STATE;
    // })
    .addMatcher(
      (action) => action.type === SIGN_IN.SUCCESS.type,
      // || action.type === LOGIN_SOCIAL.SUCCESS.type,
      // action.type === SIGN_IN_APPLE.SUCCESS.type ||
      // action.type === SIGN_IN_FACEBOOK.SUCCESS.type,
      (state, action) => {
        const token = action.payload
        setDefaultHeaders({ Authorization: `Bearer ${token}` })
        return {
          ...state,
          isLogged: true,
        }
      },
    )
})
