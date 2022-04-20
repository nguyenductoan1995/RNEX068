// import { Platform } from 'react-native'
// import RNFetchBlob from 'rn-fetch-blob'
import { get } from 'lodash-es'
import axios from './Axios'
import { buildURL } from './Function'

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 405) {
      const { error } = err.response.data || null
      if (error) {
        return Promise.reject(error)
      }
    }
    if (err.response.status === 401) {
      const { error } = err.response.data || null
      //  const {store} = Store();
      //  store.dispatch(SIGN_OUT());
      if (error) {
        return Promise.reject(error)
      }
    }
    return Promise.reject(err)
  },
)

async function request({
  method = 'get',
  url,
  query,
  params,
  success,
  failure,
  headers,
}) {
  // if (__DEV__) {
  //   console.tron.log(method, buildURL(url, query), params)
  // }
  const axiosMethod = axios[method]
  if (typeof axiosMethod === 'function') {
    try {
      const result = method === 'get' || method === 'delete'
        ? await axiosMethod(buildURL(url, query), { headers })
        : await axiosMethod(buildURL(url, query), params, { headers })
      if (result.status === 200 || result.status === 201) {
        if (typeof success === 'function') {
          return success(result.data)
        }
      } else {
        return failure({
          message: result?.data,
        })
      }
    } catch (err) {
      const result = err?.toJSON?.()
      if (typeof failure === 'function') {
        if (get(err, 'response.status') === 401) {
          //  store.dispatch(SIGN_OUT());
        }
        if (err?.response?.data) {
          return failure({
            ...err?.response?.data,
            status: err?.response?.status,
          })
        }
        return failure({
          message: result?.message,
        })
      }
    }
  }
}

// function fetchBlob({ url, params, method = 'POST', success, failure }) {
//   // Build request headers
//   const headers = { 'Content-Type': 'multipart/form-data' }
//   if (axios.defaults.headers.common.Authorization) {
//     headers.Authorization = axios.defaults.headers.common.Authorization
//   }

//   if (__DEV__) {
//     console.log(method, buildURL(url), params)
//   }
//   // Build request body
//   const body = Object.keys(params)
//     .map((name) => {
//       if (params[name] && params[name].isFile && params[name].path) {
//         let filePath = params[name].path
//         if (!filePath) {
//           return null
//         }
//         if (Platform.OS === 'ios' && filePath.startsWith('file://')) {
//           filePath = filePath.replace('file://', '')
//         }
//         const filename = filePath.split('/').splice(-1)[0]
//         return {
//           name,
//           filename,
//           data: RNFetchBlob.wrap(filePath),
//         }
//       } if (
//         typeof params[name] !== 'object'
//         && typeof params[name] !== 'undefined'
//       ) {
//         return {
//           name,
//           data: `${params[name]}`,
//         }
//       }
//       return {}
//     })
//     .filter((item) => !!item.name)

//   return RNFetchBlob.fetch(method, API_ROOT + url, headers, body)
//     .then((resp) => {
//       if (resp.respInfo.status === 200 || resp.respInfo.status === 201) {
//         return success(JSON.parse(resp.data))
//       }
//       return failure(JSON.parse(resp.data))
//     })
//     .catch((err) => failure(err))
// }

export { request }
