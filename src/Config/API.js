// import Setting from './Setting';

import Setting from './Setting'

export const API_ROOT = `${Setting.Domain}/rest/V1`
export const API_ROOT_VN = `${Setting.Domain}/rest/vn/V1`
export const TIMEOUT = 10000

export default {
  AUTH: {
    SIGN_IN: '/integration/customer/token',
    GET_ME: '/customers/me',
  },
}
