// import Setting from './Setting';

export const API_ROOT = `${'http://puffinca-staging.reliasoftware.com'}/rest/V1`
export const API_ROOT_VN = `${'http://puffinca-staging.reliasoftware.com'}/rest/vn/V1`

export const TIMEOUT = 10000

export default {
  AUTH: {
    SIGN_IN: '/integration/customer/token',
    GET_ME: '/customers/me',
  },
}
