import { createAction } from '@reduxjs/toolkit'
import { createRequestTypes } from '../ReduxAction'

export const SIGN_IN = createRequestTypes('SIGN_IN')
export const SIGN_OUT = createAction('SIGN_OUT')

export const GET_ME = createRequestTypes('GET_ME')
