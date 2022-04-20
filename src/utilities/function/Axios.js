import axios from 'axios'
import { API_ROOT, API_ROOT_VN, TIMEOUT } from 'Config/API'

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: TIMEOUT,
})

export function setDefaultHeaders(headers) {
  Object.keys(headers).forEach((key) => {
    instance.defaults.headers.common[key] = headers[key]
  })
}

export function setDefaultBaseURL(lang) {
  instance.defaults.baseURL = lang === 'vn' ? API_ROOT_VN : API_ROOT
}

export default instance
