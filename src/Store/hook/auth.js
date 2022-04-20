import { GET_ME, SIGN_IN } from 'Store/actions/auth'

const { useDispatch } = require('react-redux')

const isAllFilled = (body) => !Object.values(body).filter((value) => !value?.length)?.length

const useLogin = () => {
  const dispatch = useDispatch()

  const doLogin = (requestBody) => {
    if (!isAllFilled(requestBody)) {
      alert('falure')
    } else {
      dispatch(SIGN_IN.REQUEST(requestBody))
    }
  }

  return doLogin
}

const getMe = () => {
  const dispatch = useDispatch()

  const doLogin = (requestBody) => {
    dispatch(GET_ME.REQUEST(requestBody))
  }

  return doLogin
}

export {
  useLogin,
  getMe,
}
