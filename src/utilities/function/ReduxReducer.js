/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
const safeOps = (state) => {
  if (typeof state.loading !== 'object') {
    state.loading = {}
  }
  if (typeof state.success !== 'object') {
    state.success = {}
  }
  if (typeof state.error !== 'object') {
    state.error = {}
  }
}

export const buildRequestReducer = (builder, actionBase, takeout) => {
  builder
    .addCase(actionBase.REQUEST, (state) => {
      safeOps(state)
      state.error[actionBase.BASE] = null
      state.loading[actionBase.BASE] = true
      state.success[actionBase.BASE] = false
    })
    .addCase(actionBase.SUCCESS, (state, action) => {
      safeOps(state)

      state.success[actionBase.BASE] = true
      state.loading[actionBase.BASE] = false
      if (typeof takeout === 'string') {
        state[takeout] = action.payload
      }
      if (typeof takeout === 'function') {
        takeout(state, action)
      }
      if (takeout?.constructor === Array) {
        takeout.forEach((key) => {
          state[key] = action.payload[key]
        })
      }
    })
    .addCase(actionBase.FAILURE, (state, action) => {
      safeOps(state)

      state.error[actionBase.BASE] = action.payload
      state.loading[actionBase.BASE] = false
      state.success[actionBase.BASE] = false
    })
}
